import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import useQuizTime from '../../stores/use-time-store';

export function CrushedBottle(props) {
  const { nodes, materials } = useGLTF('/models-3d/crushedbottle.glb')
  const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const { setQuizPoints, setQuizStarted } = useQuizTime();
  
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
      <group  dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={2.094}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/7153fe7d6f19_435503d51018_crushed_bottle__3d_.glb')
