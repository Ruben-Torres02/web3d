import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Earth3d(props) {
    const earthRef=useRef(null)
    useFrame((state,delta)=>{
        if (earthRef.current){
            const elapsedTime = state.clock.getElapsedTime();
            earthRef.current.position.x = Math.cos(elapsedTime) * 2;
            earthRef.current.position.y = Math.sin(elapsedTime) * 2; // Movimiento vertical
            earthRef.current.rotation.y += 0.5 * delta; // Rotación
        }
    })
  const { nodes, materials } = useGLTF('models-3d/earth3d.glb')
  return (
    <group {...props} dispose={null}>
      <group ref={earthRef} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_0.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_1.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_2.geometry}
          material={materials.white}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models-3d/earth3d.glb')