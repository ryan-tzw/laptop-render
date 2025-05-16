import {
    useGLTF,
    Environment,
    Float,
    PresentationControls,
    ContactShadows,
    Html,
    Text3D,
    useTexture,
} from '@react-three/drei'
import { useControls } from 'leva'

export default function Experience() {
    const computer = useGLTF('./macbook.glb')
    const matcap = useTexture('./E1E1D4_777C7B_9FA19A_898F8D-512px.png')
    const colors = useControls({
        bgColor: '#39323e',
    })

    return (
        <>
            <Environment files="./potsdamer_platz_1k.hdr" />
            <color args={[colors.bgColor]} attach="background" />

            <PresentationControls
                global
                rotation={[0.15, -0.1, 0.05]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                snap={{ mass: 2, tension: 250 }}
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

                    <Text3D
                        font="./yeseva-one-regular.json"
                        size={0.5}
                        position={[2, 0.7, -1.5]}
                        rotation-y={-1}
                    >
                        Dev &
                        <meshMatcapMaterial matcap={matcap} />
                    </Text3D>
                    <Text3D
                        font="./yeseva-one-regular.json"
                        size={0.5}
                        position={[2, 0, -1.2]}
                        rotation-y={-1}
                    >
                        Design
                        <meshMatcapMaterial matcap={matcap} />
                    </Text3D>
                </Float>
            </PresentationControls>

            <ContactShadows position-y={-1.4} opacity={0.4} scale={10} blur={2} />
        </>
    )
}
