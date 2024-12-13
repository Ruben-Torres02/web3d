import { Canvas } from "@react-three/fiber"
import Nature from "../../components/Nature/Nature"
import OrbitControls from "./OrbitControls";
import { Sky, Stars } from "@react-three/drei";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";



const ShortageTest = () => {
    const cameraSettings = {
        position: [0, -2, 18
        ],
        fov: 65,
    };
    return (
        <>
        <ButtonGoBack />
        <Canvas shadows camera={cameraSettings}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 50, 5]} intensity={0.8} />
            <Nature />
            <OrbitControls />
            <Sky 
                sunPosition={[0,0,1]}
                inclination={0.2}
                azimuth={180}
                mieCoefficient={0.005}
                elevation={5}
                mieDirectionalG={0.07}
                rayleigh={1}
                turbidity={15}
                expesure={1}
            />

            <Stars 
                radius={100}
                depth={50}
                count={5000}
                factor={10}
                saturation={0}
                fade
                speed={2}
            />




        </Canvas>
        </>
    )

}

export default ShortageTest;