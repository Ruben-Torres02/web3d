import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/models-3d/Desertt.glb');
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desert.geometry}
        material={materials.MaterialDesert}
        position={[-0.203, -0.298, 0.124]}
      />
      <group position={[0.953, 0.13, 1.973]} rotation={[Math.PI / 1, 1, 10]} scale={2.239}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottlematerial.geometry}
          material={materials['Bottle.material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottlematerial_1.geometry}
          material={materials['lid.material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bottlematerial_2.geometry}
          material={materials['label.material']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lid.geometry}
        material={materials['lid.material']}
        position={[1, -1.45, 3]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.5, 1.5, 2]} // Asegúrate de ajustar la escala según lo que necesites
      />
    </group>
  );
}

useGLTF.preload('/models-3d/Desertt.glb');
