// Start.js
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Start.css";
import { Model } from "../../components/ocean/Ocean";
import WelcomeText from "./welcomeText/WelcomeText";

const Start = () => {
  // Configuración de la cámara
  const cameraSettings = {
    position: [0, 185, 0],  // Posición de la cámara (ajustada para estar por debajo del modelo)
    fov: 80,                 // Campo de visión
  };

  return (
    <div className="canvas-container">
      <Canvas
        camera={cameraSettings}
        style={{ height: "100vh", width: "100vw" }}
      >
        {/* Configuración de iluminación */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Modelo */}
        <Model />
        <WelcomeText />

        {/* Controles de cámara con límites */}
        <OrbitControls
          target={[0, 180, -20]} // Asegura que la cámara mire hacia el centro de la escena
          maxDistance={120}   // Límite máximo de distancia de la cámara
          minDistance={120}    // Límite mínimo de distancia de la cámara
          maxPolarAngle={Math.PI / 1.5}  // Limita el ángulo vertical para evitar que la cámara vea hacia abajo
          minPolarAngle={Math.PI / 4}  // Limita el ángulo vertical para evitar que la cámara vea hacia abajo
        />
      </Canvas>
    </div>
  );
};

export default Start;
