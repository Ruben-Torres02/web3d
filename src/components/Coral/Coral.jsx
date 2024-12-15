import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Coral =(props) => {
    const { nodes } = useGLTF('models-3d/coral.glb')
    const [visible , setVisible] = useState (true);
    const handleClick = () => {
        setVisible (false);
      }
    return (
        <>
        {visible && (
        <group {...props} dispose={null} onClick={handleClick}>
        <mesh
          geometry={nodes.coral.geometry}
          material={nodes.coral.material}
          position={[-83.049, 9.74, 1.164]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.137}
        />
      </group>
      )}
      </>

    )
}

export default Coral;
useGLTF.preload('models-3d/coral.glb')