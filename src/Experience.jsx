import { PresentationControls, OrbitControls } from "@react-three/drei";
import { Donut } from "./Donut";
import { DonutText } from "./DonutText";
import { Perf } from "r3f-perf";

export default function Experience() {
    const numDonuts = 10;

    return (
        <>
            {/* <OrbitControls makeDefault /> */}

            {/* <Perf position="top-left" /> */}

            <color args={["#FF69B4"]} attach="background" />

            <DonutText />

            {Array.from({ length: numDonuts }, (_, index) => (
                <Donut key={index} />
            ))}
        </>
    );
}
