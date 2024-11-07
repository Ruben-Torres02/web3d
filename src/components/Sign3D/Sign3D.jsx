import { useGLTF } from '@react-three/drei'

export function Sign3D(props) {
  const { nodes, materials } = useGLTF('/models-3d/sign3d.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_0_com_bm_murekanban.geometry}
        material={materials.h00_mkan_M_mat}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/sign3d.glb')