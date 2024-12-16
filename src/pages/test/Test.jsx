import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader, OrbitControls, Sky, Text, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import { Physics } from "@react-three/rapier";
import { Ocean3d } from "../../components/Ocean3d/Ocean3d";
import PostProcessing from "../../components/PostProcessing/PostProcesing";
import { CrushedBottle } from "../../components/CrushedBottle/Crushedbottle";
import { GreenPuddle } from "../../components/GreenPuddle/GreenPuddle";
import { BlackPuddle } from "../../components/BlackPuddle/BlackPuddle";
import { generateRandomX, generateRandomZ } from "../../utils/randomNumber";
import { Boat3d } from "../../components/Boat3d/Boat3d"
import Prueba from "../../components/Prueba/Prueba";
import Prueba2 from "../../components/Prueba/Prueba2";
import Ecctrl from 'ecctrl'

const Test = () => {

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  const cameraSettings = {
    position: [0, 1, 10],
  };

  return (
    <>
      <ButtonGoBack />
      {/* <ButtonTest /> */}
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
                  <CrushedBottle position={[generateRandomX(), 0 ,generateRandomZ()]}/>
                  <GreenPuddle position={[generateRandomX(), 0 ,generateRandomZ()]} scale={3}/>
                  <BlackPuddle position={[generateRandomX(), 1.4 ,generateRandomZ()]} scale={3}/>
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
