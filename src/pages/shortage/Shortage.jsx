import "./Shortage.css";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Text3D } from "@react-three/drei";
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
import Scorpio from "../../components/scorpio/Scorpio";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import SolutionText from "./text/SolutionText";
import KeyboardControls from "./keyboardControls/KeyboradControls";
import Video from "./Video";
import PostProcessingShortage from "./postProcessingShortage/PostProcessingShortage";


function Modal({ text, onClose, onNext, onPrev, showModal }) {
    return (
        <div className={`modal ${showModal ? 'show' : ''}`}>
            <div className="modal-content">
                {text}
                <div className="modal-buttons">
                    {onNext && (
                        <button className="modal-arrow-button modal-arrow-next" onClick={onNext}>
                            <FaArrowRight size={24} color="white" />
                        </button>
                    )}
                    {onPrev && (
                        <button className="modal-arrow-button modal-arrow-prev" onClick={onPrev}>
                            <FaArrowLeft size={24} color="white" />
                        </button>
                    )}
                    <button className="modal-content-button" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}


function Shortage() {
    const cameraSettings = {
        position: [0, 8, 35],
        fov: 94,
    };

    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState("");
    const [modalStep, setModalStep] = useState(0); // Para manejar el paso del modal

    // Contenido de los modales (puedes agregar más textos o componentes)
    const modalContent = [
        <ProblematicText />, //Modal 1
        <SensitizationText />, //Modal 2
        <SolutionText /> //Modal 3

    ];

    const handleSignClick = (text) => {
        setModalText(text);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Función para ir al siguiente modal
    const goToNextModal = () => {
        setModalStep((prevStep) => (prevStep + 1) % modalContent.length);  // Cambiar al siguiente modal
        setModalText(modalContent[(modalStep + 1) % modalContent.length]); // Actualizar el texto del modal
    };

    // Función para ir al modal anterior
    const goToPreviousModal = () => {
        setModalStep((prevStep) => (prevStep - 1 + modalContent.length) % modalContent.length); // Cambiar al anterior
        setModalText(modalContent[(modalStep - 1 + modalContent.length) % modalContent.length]); // Actualizar el texto
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
                <Video name="screen" position={[-20, 15, 6]} scale={6} />
                <KeyboardControls />w
                <Physics debug={false}>
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
                    <Catus position={[2, 1, 2]} scale={0.23} />
                    <Scorpio position={[7, 1, 18]} />
                    <PostProcessingShortage />
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
                <Html
                    position={[12, -0.5, 11]}
                    
                    
                    >
                    <div style={{fontSize: "1em", width: "300px", whiteSpace: "normal"}}>
                        Haz clic aqui
                    </div>
                    
                </Html>
            </Canvas>
            {showModal && (
                <Modal
                    text={modalText}
                    onClose={closeModal}
                    onNext={goToNextModal}
                    onPrev={goToPreviousModal}
                    showModal={showModal}
                />
            )}

        </div>
    );
}

export default Shortage;
