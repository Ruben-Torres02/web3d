import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const FireMoisturizer = (props) => {
  const { nodes, materials } = useGLTF('models-3d/fireMoisturizer.glb');
  const particlesRef = useRef([]);
  const [paused, setPaused] = useState(false); // Estado para pausar las gotas
  const [showPuddle, setShowPuddle] = useState(true); // Estado para mostrar/ocultar el charco
  const [showParticles, setShowParticles] = useState(true); // Estado para mostrar/ocultar las gotas

  const handleClick = () => {
    setPaused(!paused); // Cambiar el estado de pausa de las gotas
    setShowPuddle(false); // Ocultar el charco
    setShowParticles(false); // Ocultar las gotas
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

      {/* Renderizar el charco si 'showPuddle' es true */}
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
          ref={(el) => (particlesRef.current[i] = el)} // Referencia a cada partícula
          position={[Math.random() * 0.2 - 0.1, 1.2, Math.random() * 0.2 - 0.1]} // Inicialización de la posición
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
