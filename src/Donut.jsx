import { useGLTF, Center, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

export function Donut() {
    const donutLongSprinkle = useGLTF("./donutLongSprinkle.glb");
    const donutRoundSprinkle = useGLTF("./donutRoundSprinkle.glb");
    const donutRoundSprinkleBakedTexture = useTexture(
        "./donutRoundSprinkleBaked.jpg"
    );
    const donutLongSprinkleBakedTexture = useTexture(
        "./donutLongSprinkleBaked.jpg"
    );
    const donutRef = useRef();
    const [rotationSpeed, setRotationSpeed] = useState(
        getRandomNumber(0.001, 0.004)
    );
    const [positionX, setPositionX] = useState(getRandomNumber(-6, 6));
    const [positionYSpeed, setPositionYSpeed] = useState(
        getRandomNumber(0.001, 0.004)
    );
    const [sprinkleType, setSprinkleType] = useState(
        Math.random() < 0.5 ? "round" : "long"
    );

    donutRoundSprinkleBakedTexture.flipY = false;
    donutLongSprinkleBakedTexture.flipY = false;

    useFrame(() => {
        donutRef.current.rotation.x += rotationSpeed;
        donutRef.current.rotation.y += rotationSpeed;
        donutRef.current.position.y -= positionYSpeed;

        if (donutRef.current.position.y <= -5) {
            donutRef.current.position.y = 5;
            setRotationSpeed(getRandomNumber(0.001, 0.002));
            setPositionX(getRandomNumber(-6, 6));
            setPositionYSpeed(getRandomNumber(0.001, 0.004));
        }
    });
    return (
        <mesh
            ref={donutRef}
            geometry={
                sprinkleType === "round"
                    ? donutRoundSprinkle.nodes.baked.geometry
                    : donutLongSprinkle.nodes.baked.geometry
            }
            scale={10}
            rotation={[0.5, 0, 0]}
            position={[positionX, 3.9, 1]}
        >
            <meshBasicMaterial
                map={
                    sprinkleType === "round"
                        ? donutRoundSprinkleBakedTexture
                        : donutLongSprinkleBakedTexture
                }
            />
        </mesh>
    );
}
