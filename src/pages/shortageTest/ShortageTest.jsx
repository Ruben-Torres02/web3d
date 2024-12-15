import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Nature from "../../components/Nature/Nature";
import OrbitControls from "./OrbitControls";
import { Sky, Stars } from "@react-three/drei";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import Cylinder from "../../components/cylinder/Cylinder";
import TrashBag from "../../components/trashBag/TrashBag";
import FireMoisturizer from "../../components/fireMoisturizer/FireMoisturizer";
import PostProcessing from "../../components/PostProcessing/PostProcesing";
import Dory from "../../components/Dory/Dory";
import Coral from "../../components/Coral/Coral";
import Coral_1 from "../../components/Coral_1/Coral_1";
import Coral_2 from "../../components/Coral_2/Coral_2";
import useQuizStore from "../../stores/use-quiz-store";
import "./ShortageTest.css";
import RewardStar from "./rewardStart/RewardStar";

const ShortageTest = () => {
    const [isModalOpen, setIsModalOpen] = useState(true); // Controla si el modal está visible
    const [currentMessage, setCurrentMessage] = useState(0); // Controla el mensaje actual del modal
    const percentageQuizCompleted = useQuizStore((state) => state.quiz.percentageQuizCompleted);

    const cameraSettings = {
        position: [0, -2, 18],
        fov: 65,
    };

    // Mensajes del modal
    const introMessages = [
        "Bienvenido al test interactivo.",
        "Aprenderás cómo prevenir la escasez de agua.",
        "Explorarás formas de reducir la contaminación del agua.",
        "Conocerás cómo combatir la acidificación de los océanos.",
        "¡Comencemos y marca la diferencia!",
    ];

    const handleNextMessage = () => {
        if (currentMessage < introMessages.length - 1) {
            setCurrentMessage((prev) => prev + 1);
        } else {
            setIsModalOpen(false); // Cierra el modal al llegar al último mensaje
        }
    };

    return (
        <>
            {isModalOpen && (
                <div className="modal-overlay1">
                    <div className="modal-content1">
                        <h2>¡Bienvenido!</h2>
                        <p>
                            En este test interactivo, participarás en actividades que te enseñarán a prevenir la contaminación del agua, combatir la escasez y reducir la acidificación de los océanos.
                            Moverás elementos para limpiar y reparar entornos dañados, ayudando a restaurar el equilibrio ambiental.
                            ¡Haz clic en "Comenzar" para iniciar tu misión y marcar la diferencia!
                        </p>
                        <button onClick={() => setIsModalOpen(false)}>Comenzar</button>
                    </div>
                </div>
            )}

            <ButtonGoBack />
            <Canvas shadows camera={cameraSettings}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 50, 5]} intensity={2} />
                <Nature />
                <Cylinder position={[8.5, -0.8, 0]} scale={2} />
                <TrashBag position={[8, 0, 9]} scale={1} />
                <FireMoisturizer position={[2, 1, 0]} scale={2.5} />
                <Dory position={[8, 0.4, 10]} scale={2} />
                <Coral position={[9, -1, -4]} scale={0.1} />
                <Coral_1 position={[9, -0.6, 7]} scale={0.015} />
                <Coral_2 position={[10, -0, 0]} scale={0.1} />
                <OrbitControls />
                <PostProcessing />
                <Sky
                    sunPosition={[0, 0, 1]}
                    inclination={0.2}
                    azimuth={180}
                    mieCoefficient={0.005}
                    elevation={5}
                    mieDirectionalG={0.07}
                    rayleigh={1}
                    turbidity={15}
                    expesure={1}
                />
                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={10}
                    saturation={0}
                    fade
                    speed={2}
                />
            </Canvas>

            <div className="progress-bar-container">
                <div
                    className="progress-bar"
                    style={{
                        width: `${percentageQuizCompleted}%`,
                    }}
                />
            </div>

            <div className="progress-text">
                <span>{percentageQuizCompleted}% Completado</span>
            </div>

            {percentageQuizCompleted === 100 && <RewardStar />}
        </>
    );
};

export default ShortageTest;
