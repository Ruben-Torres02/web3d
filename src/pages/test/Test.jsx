import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader, OrbitControls, Sky, Text, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import { Physics } from "@react-three/rapier";
import { Boat3d } from "../../components/Boat3d/Boat3d";
import { Ocean3d } from "../../components/Ocean3d/Ocean3d";
import PostProcessing from "../../components/PostProcessing/PostProcesing";

const Test = () => {

  const keyboardMap = [
    { name: "forward", keys: ["KeyW", "ArrowUp"] },
    { name: "backward", keys: ["KeyS", "ArrowDown"] },
    { name: "left", keys: ["KeyA", "ArrowLeft"] },
    { name: "right", keys: ["KeyD", "ArrowRight"] },
  ];

  const cameraSettings = {
    position: [0, 1, 10],
  };

  return (
    <>
      <ButtonGoBack />
      <Canvas shadows camera={cameraSettings}>
      <PostProcessing />
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
        <Suspense fallback={null}>
          <Physics>
            <KeyboardControls map={keyboardMap}>
              <Boat3d scale={0.03} position={[0, 0, 0]} />
            </KeyboardControls>
            <Ocean3d />
          </Physics>
          <OrbitControls
            maxPolarAngle={Math.PI * 0.4}
            minPolarAngle={Math.PI * 0.3}
            maxAzimuthAngle={Math.PI * 0.25}
            minAzimuthAngle={-Math.PI * 0.25}
            minDistance={5}
            maxDistance={10}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Test;
