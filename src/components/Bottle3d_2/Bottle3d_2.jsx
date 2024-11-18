import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import useStarStore from '../../stores/use-star-store';


export function Bottle3d_2(props) {
  const bottleRef = useRef(null);
  const {incrementStars} = useStarStore();


  const handleBall = useCallback(() => {
    bottleRef.current.applyImpulse({ x: -0.02, y: 0, z: 0 }, true);
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
        geometry={nodes.Plastic_Bottle_02_GEO.geometry}
        material={materials.Plastic_Bottles}
      />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models-3d/bottles3d.glb')