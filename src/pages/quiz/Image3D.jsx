// Image3D.jsx
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';

const Image3D = ({ imageUrl }) => {
  const texture = useLoader(TextureLoader, imageUrl);
  const controlsRef = useRef();
  const logoRef = useRef(null);
  
  //useFrame((state,delta)=>{
    //if(logoRef.current){
      //const elapsedTime = state.clock.getElapsedTime();
      //logoRef.current.position.x = Math.cos(elapsedTime) * 2;
    //}
  //})
  return (
    <Canvas
      onCreated={({ camera }) => {
        camera.position.set(0, 0, 5); 
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}   
        enableRotate={true} 
        autoRotate={false}  
        autoRotateSpeed={0} 
      />
      <mesh ref={logoRef}>
        <planeGeometry args={[5, 5]} /> 
        <meshBasicMaterial map={texture} />
      </mesh>
    </Canvas>
  );
};

export default Image3D;