import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Prueba2(props) {
  const { nodes, materials } = useGLTF('/models-3d/fantasy_game_inn.glb')

  return (
    <RigidBody type="fixed" colliders="trimesh" ccd>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.11}>
          <mesh castShadow receiveShadow geometry={nodes.TheInn_bakeInn_0.geometry}>
            <meshStandardMaterial map={materials.bakeInn.map} />
          </mesh>
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/models-3d/fantasy_game_inn.glb')
