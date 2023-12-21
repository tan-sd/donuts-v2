import { Text, Center } from "@react-three/drei";

export function DonutText() {
    return (
        <Center top right>
            <Text font="./font/donutquest.woff" fontSize={0.8}>
                DONUTS
                <meshBasicMaterial toneMapped={false} />
            </Text>
        </Center>
    );
}
