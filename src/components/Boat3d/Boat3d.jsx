import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Boat3d(props) {
  const { nodes, materials } = useGLTF('/models-3d/boat.glb');
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface202.geometry}
          material={materials.white}
          position={[14.691, 3.104, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[88.954, 38.485, 25.168]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface207.geometry}
          material={materials.metal}
          position={[17.09, -1.547, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[10.305, 8.946, 10.305]}
        />
        <group position={[14.691, 3.104, -5.053]} rotation={[Math.PI / 2, 0, 0]} scale={10.305}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh017.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_1.geometry}
            material={materials.ship_color}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface221.geometry}
          material={materials.metal}
          position={[-27.423, -53.558, 14.795]}
          rotation={[-0.043, -0.18, -1.153]}
          scale={[10.305, 8.946, 7.15]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface222.geometry}
          material={materials.metal}
          position={[-33.686, -52.228, 20.827]}
          rotation={[-0.046, -0.185, -1.2]}
          scale={[10.305, 8.946, 10.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface223.geometry}
          material={materials.metal}
          position={[-33.686, -52.315, 26.395]}
          rotation={[-0.043, -0.185, -1.2]}
          scale={[10.305, 8.946, 10.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface224.geometry}
          material={materials.metal}
          position={[-27.423, -53.558, 20.949]}
          rotation={[-0.043, -0.18, -1.153]}
          scale={[10.305, 8.946, 7.15]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface206.geometry}
          material={materials.cardbord}
          position={[14.691, 3.104, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10.305}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface205.geometry}
          material={materials.metal}
          position={[23.424, 3.104, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[10.305, 9.65, 10.305]}
        />
        <group position={[33.827, 26.289, -23.906]} rotation={[1.54, 0.1, 0.296]} scale={7.526}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh098.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh098_1.geometry}
            material={materials.red}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder500.geometry}
          material={materials.cardbord}
          position={[-21.419, 61.519, -12.329]}
          rotation={[1.54, 0.1, 0.296]}
          scale={[1.234, 1.125, 1.125]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder502.geometry}
          material={materials.cardbord}
          position={[-21.444, 61.596, -11.998]}
          rotation={[1.815, 0.177, 0.258]}
          scale={[1.126, 1.027, 1.027]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder503.geometry}
          material={materials.cardbord}
          position={[7.592, 35.579, 8.333]}
          rotation={[0.926, 1.347, -0.725]}
          scale={[1.138, 1.543, 1.543]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder504.geometry}
          material={materials.cardbord}
          position={[7.63, 35.744, 8.231]}
          rotation={[0.196, 1.339, 0.049]}
          scale={[1.138, 1.543, 1.543]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder507.geometry}
          material={materials.cardbord}
          position={[37.571, 26.187, -23.33]}
          rotation={[-0.774, -0.126, -1.349]}
          scale={[2.715, 3.682, 4.66]}
        />
        <group position={[-5.332, 4.542, 11.67]} rotation={[1.54, 0.1, 0.296]} scale={7.526}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh113.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh113_1.geometry}
            material={materials.bright_blue}
          />
        </group>
        <group position={[14.691, -0.028, -5.053]} rotation={[Math.PI / 2, 0, 0]} scale={10.305}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh140.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh140_1.geometry}
            material={materials.yellow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh140_2.geometry}
            material={materials.windows}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface204.geometry}
          material={materials.cardbord}
          position={[42.194, -7.512, -5.353]}
          rotation={[Math.PI / 2, -0.065, 0]}
          scale={[16.604, 10.766, 11.47]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube114.geometry}
          material={materials.metal}
          position={[14.691, -0.028, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10.305}
        />
        <group position={[14.691, 3.104, -5.053]} rotation={[Math.PI / 2, 0, 0]} scale={10.305}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh594.geometry}
            material={materials.cardbord}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh594_1.geometry}
            material={materials.tire}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh594_2.geometry}
            material={materials.black}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder439.geometry}
          material={materials.metal}
          position={[14.691, 3.104, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10.305}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder440.geometry}
          material={materials.metal}
          position={[14.691, 3.104, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10.305}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder441.geometry}
          material={materials.metal}
          position={[14.691, 3.104, -25.117]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10.305}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder442.geometry}
          material={materials.metal}
          position={[14.691, 3.104, -25.117]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10.305}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube115.geometry}
          material={materials.metal}
          position={[14.691, -0.028, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10.305}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder447.geometry}
          material={materials.metal}
          position={[-30.458, 18.92, -6.686]}
          rotation={[-2.231, 1.449, -0.597]}
          scale={[0.947, 0.545, 0.955]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder457.geometry}
          material={materials.ship_color}
          position={[-25.798, 43.42, -10.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.801, 1.801, 1.66]}
        />
        <group position={[14.691, 3.104, -5.053]} rotation={[Math.PI / 2, 0, 0]} scale={10.305}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh631.geometry}
            material={materials.metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh631_1.geometry}
            material={materials.dirt}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder462.geometry}
          material={materials.lambert1}
          position={[38.516, 25.625, -20.334]}
          rotation={[2.861, 0, 0]}
          scale={[0.361, 0.361, 2.446]}
        />
        <group position={[55.318, 19.491, -20.598]} rotation={[Math.PI / 2, 0.105, 0]} scale={2.816}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh638.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh638_1.geometry}
            material={materials.cardbord}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh638_2.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh638_3.geometry}
            material={materials.light_red}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder479.geometry}
          material={materials.metal}
          position={[-25.798, 39.921, -10.85]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.386, 1.386, 4.343]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder490.geometry}
          material={materials.cardbord}
          position={[-20.542, 60.747, -11.684]}
          rotation={[-1.851, -0.361, -2.51]}
          scale={[0.139, 0.139, 0.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder493.geometry}
          material={materials.metal}
          position={[-54.55, 14.574, -15.876]}
          rotation={[Math.PI / 2, -0.036, 0]}
          scale={[0.466, 0.466, 3.723]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder494.geometry}
          material={materials.metal}
          position={[-54.671, 14.574, 5.802]}
          rotation={[Math.PI / 2, -0.036, 0]}
          scale={[0.466, 0.466, 3.723]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder495.geometry}
          material={materials.metal}
          position={[-45.42, 14.574, -22.854]}
          rotation={[Math.PI / 2, -0.036, 0]}
          scale={[0.466, 0.466, 3.723]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder496.geometry}
          material={materials.metal}
          position={[-58.464, 14.574, 0.005]}
          rotation={[Math.PI / 2, -0.036, 0]}
          scale={[0.466, 0.466, 3.723]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder497.geometry}
          material={materials.metal}
          position={[-58.464, 14.574, -10.178]}
          rotation={[Math.PI / 2, -0.036, 0]}
          scale={[0.466, 0.466, 3.723]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube123.geometry}
          material={materials.metal}
          position={[6.974, 23.415, -9.774]}
          rotation={[Math.PI / 2, -0.123, -Math.PI / 2]}
          scale={[9.225, 0.981, 9.901]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder499.geometry}
          material={materials.metal}
          position={[-20.695, 60.889, -12.881]}
          rotation={[2.979, 0, 0]}
          scale={[0.441, 0.441, 10.297]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube124.geometry}
          material={materials.metal}
          position={[52.934, 0.214, 10.071]}
          rotation={[2.895, -0.188, -0.071]}
          scale={[2.384, 8.799, 1.492]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder506.geometry}
          material={materials.metal}
          position={[-45.42, 14.574, 12.638]}
          rotation={[Math.PI / 2, -0.036, 0]}
          scale={[0.466, 0.466, 3.723]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder511.geometry}
          material={materials.metal}
          position={[10.181, 36.382, 2.811]}
          rotation={[1.633, -0.026, -0.01]}
          scale={[1.323, 0.922, 1.491]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder513.geometry}
          material={materials.metal}
          position={[-20.695, 45.538, -12.881]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.943, 0.943, 17.78]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube126.geometry}
          material={materials.ship_color}
          position={[-12.265, 33.083, -5.053]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[43.789, 27.78, 5.825]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder514.geometry}
          material={materials.lambert1}
          position={[47.029, 23.152, -29.058]}
          rotation={[1.012, -1.415, -0.005]}
          scale={[6.751, 6.751, 8.775]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder524.geometry}
          material={materials.metal}
          position={[-62.206, 10.814, -5.422]}
          rotation={[0.001, -0.036, 0]}
          scale={[0.466, 0.466, 3.099]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder525.geometry}
          material={materials.metal}
          position={[-60.246, 12.302, -5.422]}
          rotation={[0.001, -0.036, 0]}
          scale={[0.466, 0.466, 3.099]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder526.geometry}
          material={materials.metal}
          position={[-62.866, 8.317, -5.422]}
          rotation={[0.001, -0.003, 0]}
          scale={[0.466, 0.466, 3.099]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder527.geometry}
          material={materials.metal}
          position={[-63.491, 5.665, -5.422]}
          rotation={[0.001, -0.003, 0]}
          scale={[0.466, 0.466, 3.099]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder528.geometry}
          material={materials.metal}
          position={[-64.201, 2.602, -5.422]}
          rotation={[0.001, -0.003, 0]}
          scale={[0.466, 0.466, 3.099]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCylinder529.geometry}
          material={materials.metal}
          position={[-65.17, -1.187, -5.422]}
          rotation={[0.001, -0.003, 0]}
          scale={[0.466, 0.466, 3.099]}
        />
        <group position={[62.707, 17.477, -37.316]} rotation={[1.476, -0.468, 0.68]} scale={4.643}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh718.geometry}
            material={materials.cardbord}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh718_1.geometry}
            material={materials.red}
          />
        </group>
        <group position={[14.691, 3.104, -5.118]} rotation={[Math.PI / 2, 0, 0]} scale={10.305}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh721.geometry}
            material={materials.cardbord}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh721_1.geometry}
            material={materials.red}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/models-3d/boat.glb')
