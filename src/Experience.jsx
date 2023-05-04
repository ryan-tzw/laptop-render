import {
    useGLTF,
    Environment,
    Float,
    PresentationControls,
    ContactShadows,
    Html,
    Text,
    Text3D,
    useTexture,
} from '@react-three/drei'

export default function Experience() {
    const computer = useGLTF('./macbook.glb')
    const matcap = useTexture('./E1E1D4_777C7B_9FA19A_898F8D-512px.png')

    return (
        <>
            <Environment files="./potsdamer_platz_1k.hdr" />
            <color args={['#333']} attach="background" />

            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 1.5, tension: 400 }}
                snap={{ mass: 2, tension: 400 }}
            >
                <Float rotationIntensity={0.4}>
                    <primitive object={computer.scene} position-y={-1.2}>
                        <Html
                            transform
                            wrapperClass="htmlScreen"
                            distanceFactor={1.17}
                            position={[0, 1.56, -1.4]}
                            rotation-x={-0.256}
                            // occlude="blending"
                        >
                            <iframe src="https://basic-site-rtzw.vercel.app/" />
                        </Html>

                        <rectAreaLight
                            width={2.5}
                            height={1.65}
                            intensity={65}
                            color={'#ccc'}
                            rotation={[0.1, Math.PI, 0]}
                            position={[0, 0.55, -1.15]}
                        />
                    </primitive>

                    {/* <Text
                        font="./yeseva-one-v20-latin-regular.woff"
                        fontSize={0.5}
                        position={[2, 0.75, 0.75]}
                        rotation-y={-1.25}
                        maxWidth={2}
                        textAlign="center"
                    >
                        Simple Portfolio
                    </Text> */}

                    <Text3D
                        font="./yeseva-one-regular.json"
                        size={0.5}
                        position={[2, 0.75, -0.25]}
                        rotation-y={-1.25}
                        textAlign="center"
                    >
                        Simple
                        <meshMatcapMaterial matcap={matcap} />
                    </Text3D>
                    <Text3D
                        font="./yeseva-one-regular.json"
                        size={0.5}
                        position={[2, 0, -0.75]}
                        rotation-y={-1.25}
                        textAlign="center"
                    >
                        Portfolio
                        <meshMatcapMaterial matcap={matcap} />
                    </Text3D>
                </Float>
            </PresentationControls>

            <ContactShadows position-y={-1.4} opacity={0.4} scale={10} blur={2} />
        </>
    )
}
