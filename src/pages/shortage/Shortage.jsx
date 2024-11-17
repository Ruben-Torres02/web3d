import "./Shortage.css";  
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import Lights from "./Lights";
import Staging from "./staging/Staging";
import { Sign3D } from "../../components/Sign3D/Sign3D";
import { useState } from "react";
import { Model } from "../../components/desert2/Desert2"; 
import ProblematicText from "./text/ProblematicText";
import SensitizationText from "./text/SensitizationText";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import { Physics } from "@react-three/rapier";
import Catus from "../../components/catus/Catus";


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

    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("");

 
    const handleSignClick = (text) => {
        setModalText(text); 
        setShowModal(true);   
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <ButtonGoBack />
            <Canvas
                shadows
                camera={cameraSettings}
                style={{ height: "100vh", width: "100vw" }}
            >
                <OrbitControls

                    minDistance={10}    
                    maxDistance={27}   
                    maxPolarAngle={Math.PI / 2.5}  
                    minPolarAngle={Math.PI / 3.3} 
                    minAzimuthAngle={-Math.PI / 6}  
                    maxAzimuthAngle={Math.PI / 6}   
                    enablePan={false}

                />
                <Staging />
                <Lights />
                <Physics debug>
                    <Model position={[0, 18, 0]} scale={[1.5, 1.5, 1.5]} />
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

                    <Catus position = {[2, 2, 2]}  scale = {0.2}/>


                </Physics>


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
                    Escasez de agua.
                    <meshNormalMaterial attach="material" />
                </Text3D>
            </Canvas>

            {/* Mostrar el modal si showModal es verdadero */}
            {showModal && <Modal text={modalText} onClose={closeModal} />}
        </div>
    );
}

export default Shortage;
