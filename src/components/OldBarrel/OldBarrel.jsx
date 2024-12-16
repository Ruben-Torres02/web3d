import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/uploads_files_4380614_Oil_Barrel.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Oil_Barell_GEO.geometry}
        material={materials.oil_barell}
      />
    </group>
  )
}

useGLTF.preload('/uploads_files_4380614_Oil_Barrel.glb')
