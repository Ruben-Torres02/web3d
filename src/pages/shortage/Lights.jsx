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
                position={[0, 20, 30]} // Asegúrate de que la luz esté bien posicionada
                intensity={5}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-far={100} 
                shadow-camera-left={-50} 
                shadow-camera-right={50}
                shadow-camera-top={50}
                shadow-camera-bottom={-50}
  
            />
        </>
    );
}

export default Lights;
