import { useFrame } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";
import { useGLTF } from '@react-three/drei'

export function Ball3d(props) {
    const rbBallRef = useRef(null);
    

  const handleBall = useCallback(() => {
    rbBallRef.current.applyImpulse({ x: 0, y: 0, z: 0.1 }, true);
  }, []);

  const { nodes, materials } = useGLTF('/models-3d/ball3d.glb')
  
  return (
    <RigidBody ref={rbBallRef} colliders="ball" >
        <group {...props} dispose={null}>
        <mesh
        onClick={handleBall}
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials['Material.001']}
        />
        </group>
    </RigidBody>
  )
}

useGLTF.preload('/models-3d/ball3d.glb')