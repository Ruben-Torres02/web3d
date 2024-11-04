import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Lights = () => {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

    return (
        <>
            <ambientLight color={"#8f00ff"} intensity={1} />  {/* Ajusta la intensidad */}
            <directionalLight
                color={"yellow"}
                position={[0, 5, 5]}
                intensity={5}
                castShadow // Asegúrate de que se emiten sombras
            />
        </>
    );
}

export default Lights;
