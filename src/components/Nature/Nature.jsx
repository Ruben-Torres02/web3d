import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Nature = (props) => {

    const { nodes, materials } = useGLTF('models-3d/nature.glb')
    return (
        <group {...props} dispose={null} rotation={[0, Math.PI, 0]}>
            <group position={[7.837, 2.506, 0]}>
                <mesh castShadow receiveShadow geometry={nodes.Roof_1.geometry} material={materials.Roof} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Roof_2.geometry}
                    material={materials.Chimney}
                />
                <mesh castShadow receiveShadow geometry={nodes.Roof_3.geometry} material={materials.Door} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Roof_4.geometry}
                    material={materials.White}
                />
                <mesh castShadow receiveShadow geometry={nodes.Roof_5.geometry} material={materials.Wall} />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wooden_box.geometry}
                material={materials.Box}
                position={[3.972, 2.506, 0]}
                rotation={[0, 0.5, 0]}
                scale={1.224}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table.geometry}
                material={materials.Box}
                position={[6.252, 2.506, -3.199]}
            />
            <group position={[6.26, 3.468, -3.261]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lantern_1.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lantern_2.geometry}
                    material={materials.Box}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lantern_3.geometry}
                    material={materials['Lantern glass']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lantern_4.geometry}
                    material={materials.Grey}
                />
            </group>
            <group position={[7.837, 2.506, 0]} scale={[1, 1, 0.817]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Floor_&_stairs_1'].geometry}
                    material={materials.Roof}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Floor_&_stairs_2'].geometry}
                    material={materials.Wall}
                />
            </group>
            <group position={[0.806, 0, -4.567]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light_1.geometry}
                    material={materials.Box}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light_2.geometry}
                    material={materials['Lantern glass']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light_3.geometry}
                    material={materials.Grey}
                />
            </group>
            <group position={[8.737, 0, -8.404]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Small_tree_1.geometry}
                    material={materials['Conifer tree']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Small_tree_2.geometry}
                    material={materials.Bush}
                />
            </group>
            <group position={[-8.947, -0.572, -4.98]} scale={0.575}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bridge_1.geometry}
                    material={materials.Box}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bridge_2.geometry}
                    material={materials.Grey}
                />
            </group>
            <group position={[-14.086, 0.426, -2.851]} rotation={[0, -0.395, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light001_1.geometry}
                    material={materials.Box}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light001_2.geometry}
                    material={materials['Lantern glass']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Street_light001_3.geometry}
                    material={materials.Grey}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.River.geometry}
                material={materials.River}
                position={[-8.941, -0.087, -1.851]}
                rotation={[0, 0, -Math.PI]}
                scale={[-3.912, -1.706, -10.465]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Stepping_stone.geometry}
                material={materials.Stone}
                position={[0.397, 0.199, -6.371]}
                rotation={[-Math.PI, 1.525, -Math.PI]}
                scale={[0.533, 0.246, 0.564]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bush.geometry}
                material={materials.Bush}
                position={[12.532, 0.2, -7.999]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Bush001.geometry}
                material={materials.Bush}
                position={[10.79, 0.135, -8.209]}
                rotation={[0, 1.186, 0]}
            />
            <mesh castShadow receiveShadow geometry={nodes.Ground_1.geometry} material={materials.Box} />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ground_2.geometry}
                material={materials.Ground}
            />
        </group>
    )



}

export default Nature;

useGLTF.preload('models-3d/nature.glb')