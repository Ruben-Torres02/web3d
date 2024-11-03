import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Trash(props) {
  const { nodes, materials } = useGLTF('/models-3d/trash3d.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.447, 0.31, 8.777]}
        rotation={[3.115, -0.744, 3.104]}
        scale={[3.219, 2.92, 2.92]}>
        <mesh geometry={nodes.Circle009.geometry} material={materials['2']} />
        <mesh geometry={nodes.Circle009_1.geometry} material={materials['7.001']} />
      </group>
      <group
        position={[3.643, 0.273, -0.253]}
        rotation={[0.064, -1.264, 0.042]}
        scale={[3.219, 2.92, 2.92]}>
        <mesh geometry={nodes.Circle002.geometry} material={materials['2.003']} />
        <mesh geometry={nodes.Circle002_1.geometry} material={materials['Material.006']} />
      </group>
      <mesh
        geometry={nodes.Trash_bin.geometry}
        material={materials['5']}
        position={[-0.517, -0.01, -0.943]}
        scale={1.967}
      />
      <group position={[-0.385, -0.003, 4.206]} rotation={[1.329, -1.497, 1.102]} scale={0.017}>
        <mesh
          geometry={nodes.Mesh015.geometry}
          material={materials.smallaccents_red_delicious01_mtl_1}
        />
        <mesh
          geometry={nodes.Mesh015_1.geometry}
          material={materials.smallaccents_red_delicious01_mtl_2}
        />
        <mesh
          geometry={nodes.Mesh015_2.geometry}
          material={materials.smallaccents_red_delicious01_mtl_3}
        />
        <mesh
          geometry={nodes.Mesh015_3.geometry}
          material={materials.smallaccents_red_delicious01_mtl_4}
        />
      </group>
      <group position={[-0.527, -0.003, 4.408]} rotation={[0.066, 0, 0]} scale={0.02}>
        <mesh
          geometry={nodes.Mesh014.geometry}
          material={materials.smallaccents_red_delicious01_mtl_1}
        />
        <mesh
          geometry={nodes.Mesh014_1.geometry}
          material={materials.smallaccents_red_delicious01_mtl_2}
        />
        <mesh
          geometry={nodes.Mesh014_2.geometry}
          material={materials.smallaccents_red_delicious01_mtl_3}
        />
        <mesh
          geometry={nodes.Mesh014_3.geometry}
          material={materials.smallaccents_red_delicious01_mtl_4}
        />
      </group>
      <group position={[-0.25, 0.063, 4.277]} rotation={[0.729, 0.025, -0.031]} scale={0.02}>
        <mesh
          geometry={nodes.Mesh037.geometry}
          material={materials.smallaccents_red_delicious01_mtl_1}
        />
        <mesh
          geometry={nodes.Mesh037_1.geometry}
          material={materials.smallaccents_red_delicious01_mtl_2}
        />
        <mesh
          geometry={nodes.Mesh037_2.geometry}
          material={materials.smallaccents_red_delicious01_mtl_3}
        />
        <mesh
          geometry={nodes.Mesh037_3.geometry}
          material={materials.smallaccents_red_delicious01_mtl_4}
        />
      </group>
      <group position={[-0.22, -0.01, 6.968]} rotation={[0, -0.796, 0]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials['Material.001']}
          position={[-0.471, 3.375, -0.136]}
          rotation={[2.399, -0.328, -0.661]}
          scale={0.82}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials['Material.001']}
          position={[-0.369, 3.251, 0.549]}
          rotation={[1.146, -0.792, -2.51]}
          scale={0.726}
        />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={materials['Material.002']}
          position={[-1.05, 3.321, 0.29]}
          rotation={[1.831, -0.847, -1.603]}
          scale={0.537}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials['Material.003']}
          position={[-0.759, 3.126, 0.688]}
          rotation={[0.497, -0.156, 0.194]}
          scale={0.676}
        />
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials['2.002']}
          position={[0.41, 3.216, 0.273]}
          rotation={[Math.PI, 0, 0.8]}
          scale={[0.867, 0.841, 0.841]}
        />
      </group>
      <group position={[2.644, -0.069, 4.388]} rotation={[-0.006, -0.572, -0.003]}>
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials['3']}
          position={[2.248, 4.587, -2.66]}
          rotation={[0, 0, -0.566]}
          scale={3.165}
        />
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials['3']}
          position={[2.248, 4.587, 0.031]}
          rotation={[0, 0, -0.398]}
          scale={3.165}
        />
        <mesh
          geometry={nodes.Cube010.geometry}
          material={materials['Material.001']}
          position={[-0.165, 3.78, -2.14]}
          rotation={[-0.386, 0.08, 0.396]}
          scale={1.101}
        />
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials['Material.001']}
          position={[-0.253, 3.606, 0.232]}
          rotation={[3.069, 1.419, -0.402]}
          scale={1.101}
        />
        <mesh
          geometry={nodes.Cube012.geometry}
          material={materials['Material.002']}
          position={[0.757, 3.82, -2.024]}
          rotation={[-1.463, 0.84, 1.482]}
          scale={1.017}
        />
        <mesh
          geometry={nodes.Cube013.geometry}
          material={materials['Material.001']}
          position={[-0.117, 3.667, 1.257]}
          rotation={[-1.517, -1.001, -1.291]}
          scale={1.191}
        />
        <mesh
          geometry={nodes.Cube014.geometry}
          material={materials['Material.001']}
          position={[0.155, 3.956, 1.987]}
          rotation={[-2.833, -0.026, 2.936]}
          scale={1.289}
        />
        <mesh
          geometry={nodes.Cube015.geometry}
          material={materials['Material.002']}
          position={[-1.066, 3.854, 1.799]}
          rotation={[-1.147, 1.166, 1.223]}
          scale={0.771}
        />
        <mesh
          geometry={nodes.Cube016.geometry}
          material={materials['Material.001']}
          position={[1.455, 3.689, -0.594]}
          rotation={[-0.305, 0.13, 0.143]}
          scale={1.101}
        />
        <mesh
          geometry={nodes.Cube017.geometry}
          material={materials['Material.002']}
          position={[0.536, 3.983, 0.058]}
          rotation={[-1.006, 0.778, 1.397]}
          scale={1.017}
        />
        <mesh
          geometry={nodes.Cube018.geometry}
          material={materials['1']}
          position={[2.248, 4.587, 0.031]}
          rotation={[0, 0, -0.398]}
          scale={3.165}
        />
        <mesh
          geometry={nodes.wheels002.geometry}
          material={materials['6']}
          position={[1.461, 0.434, 0.069]}
          rotation={[0.003, 0.111, -0.048]}
          scale={[3.678, 3.336, 3.336]}
        />
        <mesh
          geometry={nodes.wheels004.geometry}
          material={materials['6']}
          position={[-0.935, 0.403, 2.216]}
          rotation={[0.003, 0.111, -0.048]}
          scale={[3.678, 3.336, 3.336]}
        />
      </group>
      <mesh
        geometry={nodes.Cube024.geometry}
        material={materials['Material.001']}
        position={[-2.627, 0.596, 7.617]}
        rotation={[0, -0.041, 0]}
        scale={0.637}
      />
      <mesh
        geometry={nodes.Cube023.geometry}
        material={materials['Material.001']}
        position={[-1.868, 0.782, 7.013]}
        scale={0.906}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials['Material.002']}
        position={[0.428, 0.462, 2.016]}
        rotation={[0.025, -0.484, 0.131]}
        scale={0.553}
      />
      <mesh
        geometry={nodes.Cube021.geometry}
        material={materials['Material.001']}
        position={[-0.133, 2.053, 5.413]}
        rotation={[0.232, -0.04, 0.006]}
        scale={0.577}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials['Material.002']}
        position={[-0.872, 1.848, 5.077]}
        rotation={[-2.654, 0.568, 2.8]}
        scale={0.456}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials['Material.001']}
        position={[-0.572, 1.739, 4.971]}
        rotation={[-0.715, 0.023, -3.112]}
        scale={0.507}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['Material.001']}
        position={[0.732, 0.655, 2.597]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.787}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials['Material.001']}
        position={[0.669, 0.655, 1.028]}
        scale={0.787}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['Material.001']}
        position={[1.682, 0.554, 1.605]}
        scale={0.676}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials['4']}
        position={[-0.408, -0.008, 5.14]}
        rotation={[0, -1.153, 0]}
        scale={[0.796, 0.581, 0.796]}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials['4']}
        position={[1.129, -0.008, -0.64]}
        rotation={[0, 0.553, 0]}
        scale={[0.987, 0.721, 0.987]}
      />
      <group position={[0.434, 0, 4.331]} rotation={[Math.PI, -1.077, Math.PI]} scale={0.004}>
        <mesh geometry={nodes.Mesh018.geometry} material={materials.steel} />
        <mesh geometry={nodes.Mesh018_1.geometry} material={materials.label} />
        <mesh geometry={nodes.Mesh018_2.geometry} material={materials['Material.008']} />
      </group>
      <group position={[0.293, 0, 4.127]} scale={0.004}>
        <mesh geometry={nodes.Mesh017.geometry} material={materials.steel} />
        <mesh geometry={nodes.Mesh017_1.geometry} material={materials.label} />
      </group>
      <group position={[0.251, 0.117, 4.528]} rotation={[2.182, 0.587, 2.24]} scale={0.004}>
        <mesh geometry={nodes.Mesh018.geometry} material={materials.steel} />
        <mesh geometry={nodes.Mesh018_1.geometry} material={materials.label} />
        <mesh geometry={nodes.Mesh018_2.geometry} material={materials['Material.008']} />
      </group>
      <group position={[0.327, 0, -0.042]} rotation={[0, -0.401, 0]} scale={0.003}>
        <mesh geometry={nodes.Mesh016.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Mesh016_1.geometry} material={materials.cap} />
        <mesh geometry={nodes.Mesh016_2.geometry} material={materials['label.001']} />
      </group>
      <group position={[0.788, 0.097, 0.392]} rotation={[0.468, -0.374, 1.754]} scale={0.003}>
        <mesh geometry={nodes.Mesh001.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Mesh001_1.geometry} material={materials.cap} />
        <mesh geometry={nodes.Mesh001_2.geometry} material={materials['label.001']} />
      </group>
      <group position={[0.159, 0.096, 2.629]} rotation={[-Math.PI / 2, 0, 0.741]} scale={0.002}>
        <mesh geometry={nodes.Mesh003.geometry} material={materials['cap.002']} />
        <mesh geometry={nodes.Mesh003_1.geometry} material={materials['plastic.001']} />
        <mesh geometry={nodes.Mesh003_2.geometry} material={materials['water.001']} />
      </group>
      <group position={[-2.825, 0, 7.055]} rotation={[-Math.PI, 1.439, -Math.PI]} scale={0.002}>
        <mesh geometry={nodes.Mesh019.geometry} material={materials['cap.001']} />
        <mesh geometry={nodes.Mesh019_1.geometry} material={materials.plastic} />
      </group>
      <group position={[0.348, 0.04, 2.846]} rotation={[1.254, 1.306, -1.966]} scale={0.002}>
        <mesh geometry={nodes.Mesh002.geometry} material={materials['cap.001']} />
        <mesh geometry={nodes.Mesh002_1.geometry} material={materials.plastic} />
        <mesh geometry={nodes.Mesh002_2.geometry} material={materials.water} />
      </group>
      <mesh
        geometry={nodes['31_Baking_mix_box_8'].geometry}
        material={materials['PhysicalMaterial.006']}
        position={[-0.272, 0.068, 1.723]}
        rotation={[-1.578, 0.021, -0.352]}
        scale={0.002}
      />
      <mesh
        geometry={nodes['31_Baking_mix_box_7'].geometry}
        material={materials['PhysicalMaterial.006']}
        position={[0.326, 0.168, 3.499]}
        rotation={[-1.81, -0.509, 1.118]}
        scale={0.003}
      />
      <mesh
        geometry={nodes['31_Baking_mix_box_5'].geometry}
        material={materials['PhysicalMaterial.012']}
        position={[0.801, 0.109, 3.701]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={0.004}
      />
      <mesh
        geometry={nodes['31_Baking_mix_box_11001'].geometry}
        material={materials['PhysicalMaterial.011']}
        position={[-0.072, 0, 0.754]}
        rotation={[Math.PI, -0.838, Math.PI]}
        scale={0.003}
      />
      <mesh
        geometry={nodes['31_Baking_mix_box_11'].geometry}
        material={materials['PhysicalMaterial.011']}
        position={[-2.718, 0, 6.664]}
        rotation={[0, -0.955, 0]}
        scale={0.002}
      />
      <group position={[1.505, 0.124, 3.134]} rotation={[-1.574, 0.015, 2.311]} scale={0.003}>
        <mesh geometry={nodes.Mesh008.geometry} material={materials['glass.005']} />
        <mesh geometry={nodes.Mesh008_1.geometry} material={materials['label.008']} />
        <mesh geometry={nodes.Mesh008_2.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Mesh008_3.geometry} material={materials['cap.007']} />
      </group>
      <group position={[-0.567, 0.105, 0.027]} rotation={[1.555, -0.002, 1.98]} scale={0.002}>
        <mesh geometry={nodes.Mesh013.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Mesh013_1.geometry} material={materials['cap.012']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/trash3d.glb')