import "./Shortage.css";  // Asegúrate de importar el archivo CSS para el modal
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import Lights from "./Lights";
import Staging from "./staging/Staging";
import { Sign3D } from "../../components/Sign3D/Sign3D";
import { useState } from "react";
import { Model } from "../../components/desert2/Desert2";  // Aquí se importa el Model
import ProblematicText from "./text/ProblematicText";
import SensitizationText from "./text/SensitizationText";

// Componente Modal para mostrar el cuadro de diálogo
function Modal({ text, onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                {text}
                <button className="modal-content-button" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

function Shortage() {
    const cameraSettings = {
        position: [9, 8.5, 25],
        fov: 94,
    };

    // Estados para controlar la visibilidad del modal y el texto
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("");

    // Función para manejar el clic en las señales y mostrar el modal
    const handleSignClick = (text) => {
        setModalText(text);  // Establece el texto del modal
        setShowModal(true);   // Muestra el modal
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Canvas
                shadows
                camera={cameraSettings}
                style={{ height: "100vh", width: "100vw" }}
            >
                <OrbitControls

                    minDistance={10}    // Limita el zoom mínimo
                    maxDistance={27}    // Limita el zoom máximo
                    maxPolarAngle={Math.PI / 2.5}  // Limita la rotación vertical hacia abajo
                    minPolarAngle={Math.PI / 3.3}  // Limita la rotación vertical hacia arriba
                    minAzimuthAngle={-Math.PI / 6}  // Limita la rotación horizontal a la izquierda
                    maxAzimuthAngle={Math.PI / 6}   // Limita la rotación horizontal a la derecha
                    enablePan={false}

                />
                <Staging />
                <Lights />
                <Model position={[0, 18, 0]} scale={[1.5, 1.5, 1.5]} />  {/* Asegúrate de que el Model esté importado y se muestre correctamente */}

                {/* Aquí es donde se manejan los clics para mostrar el modal */}
                <Sign3D
                    scale={0.3}
                    position={[15, -0.5, 2]}
                    text="Sensibilizacion"
                    onClick={() => handleSignClick(<SensitizationText />)}
                />
                <Sign3D

                    scale={0.3}
                    position={[-10, -0.5, 2]}
                    text="Problematica"
                    onClick={() => handleSignClick(<ProblematicText />)}
                />

                <Text3D
                    position={[-15, 13, 0.2]}
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

            {/* Mostrar el modal si showModal es verdadero */}
            {showModal && <Modal text={modalText} onClose={closeModal} />}
        </div>
    );
}

export default Shortage;
