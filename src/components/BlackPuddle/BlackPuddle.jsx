import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function BlackPuddle(props) {
  const { nodes, materials } = useGLTF('/models-3d/blackpuddle.glb')
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleCollisionEnter = () => {
    setIsVisible(false); // Oculta el objeto
  };

  if (!isVisible) return null;
  ( // Deja de renderizar el componente si no es visible
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
          geometry={nodes.high_poly.geometry}
          material={materials.Material_0}
          scale={2.313}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models-3d/blackpuddle.glb')