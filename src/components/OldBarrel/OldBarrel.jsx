import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import useQuizTime from '../../stores/use-time-store';
import { RigidBody } from '@react-three/rapier';

export function OldBarrel(props) {
  const { nodes, materials } = useGLTF('/models-3d/oldbarrel.glb')
  const ref = useRef(null);

  const { setQuizPoints,setQuizStarted } = useQuizTime();
  const [isVisible, setIsVisible] = useState(true);

  const handleCollisionEnter = () => {
    setQuizPoints()
    setIsVisible(false); // Oculta el objeto
    setQuizStarted(true)
  };

  if (!isVisible) return null; // Deja de renderizar el componente si no es visible
  return (
    <RigidBody ref={ref}
      {...props}
      type="fixed"
      onCollisionEnter={({ other }) => {
        if (other.rigidBodyObject.name === "boat") {
          handleCollisionEnter()
        }
      }}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Oil_Barell_GEO.geometry}
          material={materials.oil_barell}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/moldels-3d/oldbarrel.glb')
