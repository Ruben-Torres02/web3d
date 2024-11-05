import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

    return (
        <>
            {/* Luz ambiental para una iluminación básica en toda la escena */}
            <ambientLight color={"#8f00ff"} intensity={1.5} /> 

            {/* Luz direccional ajustada con límites de cámara de sombras */}
            <directionalLight
                //ref={directionalLightRef}
                color={"yellow"}
                position={[0, 20, 5]} // Asegúrate de que esté elevada y centrada
                intensity={5}
                
            />
        </>
    );
}

export default Lights;
