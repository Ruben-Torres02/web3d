import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/Desert2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catcus_4.geometry}
        material={materials['Material.catus4']}
        position={[19.208, -8.046, -13.821]}
        scale={[0.862, 1.576, 0.862]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catcus1.geometry}
        material={materials['Material.catus4']}
        position={[-15.793, -6.842, 11.407]}
        rotation={[Math.PI, -1.508, Math.PI]}
        scale={[0.862, 2.062, 0.862]}
      />
      <group position={[0.802, -12.582, 0]} scale={[20.67, 20.67, 18.734]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.plane01']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials['Material.plene02']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catcus5.geometry}
        material={materials['Material.cactus5']}
        position={[-13.635, -9.191, 6.51]}
        rotation={[0.095, 0.507, -0.194]}
        scale={[0.654, 1.196, 0.654]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catcus2.geometry}
        material={materials['Material.catus4']}
        position={[17.082, -8.693, -10.102]}
        rotation={[-3.065, -0.582, 2.982]}
        scale={[0.574, 1.373, 0.574]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stone.geometry}
        material={materials['Material.stone']}
        position={[14.656, -12.06, -13.563]}
        rotation={[0, -1.221, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catcus_6.geometry}
        material={materials['Material.cactus06']}
        position={[-0.557, -7.602, -10.195]}
        scale={[0.862, 1.576, 0.862]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catcus3.geometry}
        material={materials['Material.catus.3']}
        position={[14.684, -7.423, 14.151]}
        rotation={[Math.PI, -1.508, Math.PI]}
        scale={[0.862, 2.062, 0.862]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Desert2.glb')

