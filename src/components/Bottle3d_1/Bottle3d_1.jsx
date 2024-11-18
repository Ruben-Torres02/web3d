import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import useStarStore from '../../stores/use-star-store';

export function Bottle3d_1(props) {
  const bottleRef = useRef(null);
  const {incrementStars} = useStarStore();


  const handleBall = useCallback(() => {
    bottleRef.current.applyImpulse({ x: 0.03, y: 0, z: 0 }, true);
    incrementStars()
  }, []);

  const { nodes, materials } = useGLTF('/models-3d/bottles3d.glb')
  return (
    <RigidBody  ref={bottleRef} colliders="hull">
      <group  {...props} dispose={null} >
        <mesh
          onClick={handleBall}
          castShadow
          receiveShadow
          geometry={nodes.Plastic_Bottle_01_GEO.geometry}
          material={materials.Plastic_Bottles}
          position={[-0.367, 0, 0]}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models-3d/bottles3d.glb')