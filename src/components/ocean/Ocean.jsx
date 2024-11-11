import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/ocean.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ocean.geometry}
        material={materials.Sea_Bottom}
      />
      <mesh castShadow receiveShadow geometry={nodes.ocean_1.geometry} material={materials.Water} />
      <mesh
        castShadow 
        receiveShadow
        geometry={nodes.whale001.geometry}
        material={materials['Material.whale.1']}
        position={[100, -50, 150]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.whale001_1.geometry}
        material={materials['Material.whale.2']}
        position={[100, -50, 150]}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.whale001_2.geometry}
        material={materials['Material.whale.3']}
        position={[100, -50, 150]}
        
      />
    </group>
  )
}

useGLTF.preload('/model-3d/ocean.glb')