import "./Shortage.css";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../components/desert1/Desert1";
import { OrbitControls, Text, Text3D, Html } from "@react-three/drei";
import Lights from "./Lights";
import Staging from "./staging/Staging";

function Shortage() {
    const cameraSettings = {
        position: [0, 5, 25], 
        fov: 94,
    };

    return (
        <Canvas 
            shadows 
            camera={cameraSettings}
            style={{ height: '100vh', width: '100vw' }} 
        >
            <OrbitControls />
            <Staging />
            <Lights />
            <Model />

            {/* Texto en 3D, con ajustes de posición */}
            <Text
                position={[-5, 1.5, 0.2]} // Aumenta la posición Y y Z
                fontSize={0.8}
                maxWidth={10}
                lineHeight={1.1}
                color="black"
                anchorX="right"
                anchorY="bottom"
            >
                La falta de agua genera importantes problemas medioambientales. La disminución de ríos y de humedales agota el propio ecosistema, pone en peligro a la biodiversidad.
            </Text>

            <Text 
                position={[15, 3, 0.2]} // Ajuste de posición
                fontSize={0.8}
                maxWidth={9}
                lineHeight={1.1}
                color="black"
                anchorX="right"
                anchorY="bottom"
            >
                El cuidado del agua en el presente significa asegurar un futuro en el que podemos disfrutar de tierras fértiles y biodiversidad.
            </Text>

            {/* Título en 3D, con cambios en la posición */}
            <Text3D
                position={[-15, 10, 0.2]} // Ajusta la posición para que esté visible
                font="fonts/blue-ocean.json"
                bevelEnabled
                bevelSize={0.02}
                bevelThickness={1}
                height={0.1}
                lineHeight={0.75}
                letterSpacing={0.1}
                size={3}
            >
                Escasez de agua
                <meshNormalMaterial attach="material" />
            </Text3D>
        </Canvas>
    );
}

export default Shortage;
