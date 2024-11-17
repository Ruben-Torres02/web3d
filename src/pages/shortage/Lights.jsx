import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

    return (
        <>
            <ambientLight color={"#8f00ff"} intensity={1} /> {/* Ajusta la luz ambiental */}
            
            <directionalLight
                //ref={directionalLightRef}
                color={"yellow"}
                position={[0, 15, 20]} // Asegúrate de que la luz esté bien posicionada
                intensity={4}
                castShadow
                shadow-mapSize-with={2048}
                shadow-mapSize-height={2048}
                shadow-camera-far={50} 
                shadow-camera-left={-50} 
                shadow-camera-right={50}
                shadow-camera-top={50}
                shadow-camera-bottom={-50}
                shadow-normalBias={0.1}
  
            />
        </>
    );
}

export default Lights;
