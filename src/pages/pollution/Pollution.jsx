import "./Pollution.css"
import { Canvas } from "@react-three/fiber";
import { House3D } from "../../components/House3D/House3D";
import { Html, Loader, OrbitControls, Sky, Text } from "@react-three/drei";
import { Lapras3D } from "../../components/Lapras3D/Lapras3D";
import { Sign3D } from "../../components/Sign3D/Sign3D";
import Raindrop from "../../components/Raindrop/Raindrop";
import { Suspense, useState } from "react";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";

const Pollution = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };

  const openSignModal = () => {
    setIsOpen(true);
  }

  const closeSignModal = (e) => {
    setIsOpen(false);
  }

  const cameraSettings = {
    position: [0, 1, 5],
  };

  return (
    <>
      <ButtonGoBack/>
      <Canvas shadows camera={cameraSettings}>
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
          <Sign3D onClick={openSignModal} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} scale={0.02} position={[-1.6, -0.5, 2]} rotation={[0, 0, 0]} />
          <Text
            position={[-1.56, 0, 2.1]}
            color={"black"}
            fontSize={0.1}
            fontWeight={"bold"}
          >
            {`Click Aqui`}
          </Text>
          <House3D scale={0.3} rotation={[0, 4.75, 0]} />
          <Lapras3D scale={0.005} position={[1, -0.5, 1]} rotation={[0, -0.5, 0]} />
          <OrbitControls
            maxPolarAngle={Math.PI * 0.4}
            minPolarAngle={Math.PI * 0.3}
            maxAzimuthAngle={Math.PI * 0.25}
            minAzimuthAngle={-Math.PI * 0.25}
            maxDistance={5}
            minDistance={5}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
      <Loader />
      <Raindrop isOpen={isOpen} onClose={closeSignModal} />
    </>
  );
};

export default Pollution;
