
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'


const TrashBag = (props) => {
    const { nodes, materials } = useGLTF('models-3d/trashbag.glb')
    const [visible , setVisible] = useState (true);

    const handleClick = () => {
      setVisible (false);
    }
    return (
        <>
        {visible &&(
        <group {...props} dispose={null} onClick={handleClick}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trash_bag.geometry}
          material={materials['trash bag']}
          position={[-0.462, 0.654, -0.097]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trash_bag001.geometry}
          material={materials['trash bag']}
          position={[0.66, 0.492, 0.029]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
      )}
      </>
    )

}
export default TrashBag;
useGLTF.preload('models-3d/trashbag.glb')
