import React, { useCallback, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber';
import useStarStore from '../../stores/use-star-store';

export function Bottle3d_3(props) {
  const bottleRef = useRef(null);
  const {incrementStars} = useStarStore();

  const handleBall = useCallback(() => {
    bottleRef.current.applyImpulse({ x: 0, y: 0, z: -0.2 }, true);
    incrementStars()
  }, []);
  const { nodes, materials } = useGLTF('/models-3d/bottles3d.glb')
  return (
    <RigidBody  ref={bottleRef} colliders="hull">
      <group ref={bottleRef} {...props} dispose={null} >
      <mesh
        onClick={handleBall}
        castShadow
        receiveShadow
        geometry={nodes.Plastic_Bottle_03_GEO.geometry}
        material={materials.Plastic_Bottles}
        position={[0.59, 0, 0]}
      />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models-3d/bottles3d.glb')