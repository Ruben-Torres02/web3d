import { useGLTF } from "@react-three/drei";

export function Lapras3D(props) {
  const { nodes, materials } = useGLTF("/models-3d/lapras3d.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0131_00} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01.geometry}
          material={materials.BodyATattu00_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01_1.geometry}
          material={materials.Eye_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01_2.geometry}
          material={materials.BodyB_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_6_BodyATattu01_3.geometry}
          material={materials.BodyBVco_mat}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
      />
    </group>
  );
}

useGLTF.preload("/models-3d/lapras3d.glb");
