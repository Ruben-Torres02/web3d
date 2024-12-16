import React from 'react';
import { RigidBody } from '@react-three/rapier';
import { MeshReflectorMaterial } from '@react-three/drei';

export function Ocean3d(props) {
  return (
    <RigidBody
      type="fixed"
      colliders="cuboid"    
      ccd                
      friction={0.65}
      restitution={0.2}
      {...props}          
    >
      <mesh
        position={[0,-5, 0]}
        receiveShadow={true}
      >
        <cylinderGeometry args={[100, 50, 10, 32]} />
        
        <meshStandardMaterial color="#1e90ff" />
      </mesh>
    </RigidBody>
  );
}
