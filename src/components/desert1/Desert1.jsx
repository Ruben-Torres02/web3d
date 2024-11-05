import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('models-3d/desert1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AV_LP.geometry}
        material={materials.wire_224086086}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
        position={[0, -4.3, 0]}
      />
    </group>
  )
}

useGLTF.preload('models-3d/desert1.glb')


