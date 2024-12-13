import { OrbitControls as DreiOrbitControls } from "@react-three/drei";

const OrbitControls = () => {
    return (
        <DreiOrbitControls
            maxPolarAngle={Math.PI / 5} // Limita el ángulo vertical superior
            minPolarAngle={Math.PI / 3} // Limita el ángulo vertical inferior
            maxAzimuthAngle={Math.PI / 15} // Limita la rotación horizontal máxima
            minAzimuthAngle={-Math.PI / 15} // Limita la rotación horizontal mínima
            minDistance={5} // Distancia mínima de la cámara al objeto
            maxDistance={25} // Distancia máxima de la cámara al objeto
            enablePan={false} // Desactiva el movimiento lateral de la cámara
        />
    );
};

export default OrbitControls;
