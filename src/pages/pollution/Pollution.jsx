import "./Pollution.css"
import { Canvas } from "@react-three/fiber";
import { House3D } from "../../components/House3D/House3D";
import {  KeyboardControls, Loader, OrbitControls, Sky, Text, Text3D } from "@react-three/drei";
import { Lapras3D } from "../../components/Lapras3D/Lapras3D";
import { Sign3D } from "../../components/Sign3D/Sign3D";
import Raindrop from "../../components/Raindrop/Raindrop";
import { Suspense, useState } from "react";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import { Physics } from "@react-three/rapier";
import { Ball3d } from "../../components/Ball3d/Ball3d";

import Stars from "../../components/Stars/Stars";
import Tooltip from "../../components/Tooltip/Tooltip";
import { Bottle3d_1 } from "../../components/Bottle3d_1/Bottle3d_1";
import { Bottle3d_2 } from "../../components/Bottle3d_2/Bottle3d_2";
import { Bottle3d_3 } from "../../components/Bottle3d_3/Bottle3d_3";
import PostProcessing from "../../components/PostProcessing/PostProcesing";
import VideoPollution from "../../components/VideoPollution/VideoPollution";

const Pollution = () => {

  const keyboardMap = [
    { name: 'jump', keys: ['Space'] },
  ];

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
      <div>
        <Stars />
        <Tooltip text={"Dale Click a la basura para limpiar el mar"}/>
      </div>
      <ButtonGoBack />
      <Canvas shadows camera={cameraSettings}>
        <PostProcessing/>
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
          <Text
            position={[-1.59, -0.02, 2.05]}
            color={"black"}
            fontSize={0.1}
            fontWeight={"bold"}
          >
            {`Click Aqui`}
          </Text>
          {/* <Text3D font={"/fonts/Black_Regular.json"} position={[0.05, 1.1, 1]} rotation={[0, -0.5, 0]} lineHeight={0.6} size={0.15} >
                {`Oprime "Espacio"
           v`}
              <meshNormalMaterial color="black" />
            </ Text3D> */}
            <Text3D
          curveSegments={32}
          position={[0.4, 1.3, 1]}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0}
          lineHeight={0.5}
          letterSpacing={0.04}
          rotation={[0, -0.5, 0]}
          size={0.2}
          font="/fonts/Inter_Bold.json">
          {`Oprime\nEspacio`}
          <meshNormalMaterial />
        </Text3D>
          <VideoPollution position={[-0.1,2.5,0]}/>
          <Physics>
            <Sign3D onClick={openSignModal} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} scale={0.02} position={[-1.6, -0.5, 2]} rotation={[0, 0, 0]} />
            <Bottle3d_1 scale={1.2} position={[4, -0, 1]} rotation={[5, 0, 0]} />
            <Bottle3d_2 scale={1.2} position={[-4, 0, 1]} rotation={[5, 0, 0]} />
            <Bottle3d_3 scale={1.2} position={[-2.2, 0, 1]} rotation={[5, 0, 0]} />
            <Ball3d scale={0.3} position={[0, -0.4, 1]} />
            <House3D scale={0.3} rotation={[0, 4.75, 0]} />

            <KeyboardControls map={keyboardMap}>
              <Lapras3D scale={0.005} position={[1, -0.5, 1]} rotation={[0, -0.5, 0]} />
            </KeyboardControls>
          </Physics>
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
