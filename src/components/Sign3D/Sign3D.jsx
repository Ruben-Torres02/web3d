import { useGLTF, Text } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Sign3D({ text, redirectPath, ...props }) {
  const { nodes, materials } = useGLTF('/models-3d/sign3d.glb');
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const scale = hovered ? 1.1 : 1;

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_0_com_bm_murekanban.geometry}
        material={materials.h00_mkan_M_mat}
        rotation={[Math.PI / 2, 0, 0]}
        onPointerDown={(e) => handleSing3d(e)} // Redirección al hacer clic
        scale={hovered ? 1.1 : 1} // Cambia el tamaño al pasar el mouse
        onPointerOver={() => setHovered(true)}  // Cambia la escala al pasar el mouse
        onPointerOut={() => setHovered(false)}  // Vuelve al tamaño original
      />

      <Text
        position={[0, 23,  2.4]} // Ajusta la posición del texto
        fontSize={4 *  scale}
        color= "black"
        anchorX="center"
        anchorY="middle"
        fontWeight={"bold"}
      >
        {text}
      </Text>
    </group>
  );
}

useGLTF.preload('/models-3d/sign3d.glb');
