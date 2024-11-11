import { useGLTF, Text } from '@react-three/drei';

export function Sign3D({ text, ...props }) {
  const { nodes, materials } = useGLTF('/models-3d/sign3d.glb');

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_0_com_bm_murekanban.geometry}
        material={materials.h00_mkan_M_mat}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <Text
        position={[0, 23,  2.4]}
        fontSize={4}
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
