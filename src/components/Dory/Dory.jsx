
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'


const Dory = (props) => {
    const { nodes, materials } = useGLTF('models-3d/Dory.glb')
    const [visible , setVisible] = useState (true);
    const handleClick = () => {
        setVisible (false);
      }
    return (
        <>
        {visible && (
        <group {...props} dispose={null} onClick={handleClick}>
        <group rotation={[0.343, -0.37, 1.642]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dory_DoryMesh001.geometry}
            material={materials['DoryBlue.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dory_DoryMesh001_1.geometry}
            material={materials['DoryYellow.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Dory_DoryMesh001_2.geometry}
            material={materials['DoryBlack.001']}
          />
        </group>
        </group>
        )}
        </>
    )
}

export default Dory;

useGLTF.preload('models-3d/Dory.glb')