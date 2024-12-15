import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import useQuizStore from '../../stores/use-quiz-store';

const FireMoisturizer = (props) => {
  const { nodes, materials } = useGLTF('models-3d/fireMoisturizer.glb');
  const particlesRef = useRef([]);
  const incrementQuizProgress = useQuizStore(state => state.incrementQuizProgress);
  const [paused, setPaused] = useState(false); 
  const [showPuddle, setShowPuddle] = useState(true); 
  const [showParticles, setShowParticles] = useState(true); 
  const [hasClicked, setHasClicked] = useState(false)

  const handleClick = () => {
    if (!hasClicked) {
      incrementQuizProgress();
      alert('¡ Excelente! Una fuga de agua es una oportunidad perdida! Cada gota cuenta. Reparar las fugas no solo reduce el desperdicio de agua, sino que ayuda a prevenir la escasez de este recurso vital ')
      setPaused(!paused); 
      setShowPuddle(false); 
      setShowParticles(false); 
      setHasClicked(true);
    }

  };

  useFrame(() => {
    if (!paused) {
      particlesRef.current.forEach((particle) => {
        if (particle) {
          particle.position.y -= 0.10;
          if (particle.position.y < -2) {
            particle.position.set(
              Math.random() * 0.2 - 0.1,
              1.2,
              Math.random() * 0.2 - 0.1
            );
          }
        }
      });
    }
  });

  return (
    <group {...props} dispose={null} rotation={[Math.PI / 20, 5, 0]} onClick={handleClick}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FireMoisturizer.geometry}
        material={materials.aiStandardSurface17}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />

   
      {showPuddle && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <circleGeometry args={[1, 32]} />
          <meshStandardMaterial
            color="#00bfff"
            transparent
            opacity={0.5}
            roughness={0.1}
            metalness={0.3}
          />
        </mesh>
      )}


      {showParticles && Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (particlesRef.current[i] = el)}
          position={[Math.random() * 0.2 - 0.1, 1.2, Math.random() * 0.2 - 0.1]} 
        >
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="aqua" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
};

export default FireMoisturizer;

useGLTF.preload('models-3d/fireMoisturizer.glb');
