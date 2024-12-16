import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader, OrbitControls, Sky, Text, Text3D } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import { Physics } from "@react-three/rapier";
import { Ocean3d } from "../../components/Ocean3d/Ocean3d";
import PostProcessing from "../../components/PostProcessing/PostProcesing";
import { CrushedBottle } from "../../components/CrushedBottle/CrushedBottle";
import { GreenPuddle } from "../../components/GreenPuddle/GreenPuddle";
import { BlackPuddle } from "../../components/BlackPuddle/BlackPuddle";
import { generateRandomX, generateRandomZ } from "../../utils/randomNumber";
import { Boat3d } from "../../components/Boat3d/Boat3d";
import Ecctrl from 'ecctrl'
import useQuizTime from "../../stores/use-time-store";
import { OldBarrel } from "../../components/OldBarrel/OldBarrel";
import Tooltip from "../../components/Tooltip/Tooltip";
import Timer from "../../components/Timer/Timer";
import quizDAO from "../../daos/quizDAO";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";

const Test = () => {

  const { quizPointsReset, setQuizStarted, quizFinished, quizTime, setQuizFinished } = useQuizTime();

  const navigate = useNavigate();
  const [scores, setScores] = useState([]);
  const { user } = useAuthStore()
  useEffect(() => {
    quizPointsReset()
    setQuizStarted(false)
    setQuizFinished(false)
  }, [])

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  const fetchTopScores = async () => {
    try {
      const topScores = await quizDAO.getTopScores()
      setScores(topScores);
      console.log(scores)
    } catch (error) {
      console.error("Error fetching top scores:", error);
    }
  };

  useEffect(() => {
    const saveQuizData = async () => {
      if (quizFinished) {
        const userName = user.displayName || user.email;
        const time = quizTime;

        try {
          await quizDAO.createQuizRecord({ name: userName, time: time });
          setQuizFinished(false);
          fetchTopScores(); // Actualiza los puntajes después de guardar
        } catch (error) {
          console.error("Error saving quiz data:", error);
        }
      }
    };

    saveQuizData();
    fetchTopScores(); // Recupera los puntajes al montar el componente
  }, [quizFinished]);

  const nextTest = () => {
    setQuizFinished(false)
    alert("¡Felicidades! Has completado el juego.")
    navigate("/shortage-Test")
  }

  return (
    <>
      {quizFinished && nextTest()}
      <div className="tooltip-container">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
          >
            <path
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.518 0-10-4.482-10-10s4.482-10 10-10 10 4.482 10 10-4.482 10-10 10zm-1-16h2v6h-2zm0 8h2v2h-2z"
            ></path>
          </svg>
        </div>
        <div className="tooltip">
          <span>Mejores tiempos</span>
          <ol>
            {scores.map((score, index) => (
              <li key={index}>
                {score.name} - {score.time} s
              </li>
            ))}
          </ol>
        </div>
      </div>
      <ButtonGoBack />
      {/* <ButtonTest /> */}
      <Timer />
      <Canvas shadows>
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight intensity={1.5} />
        <directionalLight
          color={"#ffffff"}
          position={[10, 10, 10]}
          intensity={2}
          castShadow
          shadow-camera-left={-50}
          shadow-camera-right={50}
          shadow-camera-top={50}
          shadow-camera-bottom={-50}
          shadow-camera-far={50}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-normalBias={0.5}
        />
        <Physics timeStep="vary">
          <Suspense fallback={null}>
            <KeyboardControls map={keyboardMap}>
              <Ecctrl name="boat" floatHeight={0}>
                <Boat3d rotation={[0, -Math.PI / 2, 0]} scale={0.03} />
              </Ecctrl>

            </KeyboardControls>
            {
              Array.from({ length: 5 }, (_, i) => (
                <>
                  <CrushedBottle position={[generateRandomX(), 0, generateRandomZ()]} />
                  <GreenPuddle position={[generateRandomX(), 0, generateRandomZ()]} scale={3} />
                  <OldBarrel position={[generateRandomX(), -0.5, generateRandomZ()]} scale={2} />
                </>

              ))
            }
            <Ocean3d />
          </Suspense>
        </Physics>
      </Canvas>
      <Loader />
    </>
  );
};

export default Test;
