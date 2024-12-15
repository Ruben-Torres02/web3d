import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

const Cylinder = (props) => {
    const { nodes, materials } = useGLTF('models-3d/cylinder.glb')
    const [visible, setVisible] = useState (true)

    const handleClick = () => {
      setVisible(false);
    }

    return (
      <>
      {visible && (
        <group {...props} dispose={null} onClick={handleClick}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.002']}
          position={[-0.045, 0.37, 0.448]}
          rotation={[0.076, 0.238, -1.19]}
        />
      </group>
      )}
      </>
    )
    

}

export default Cylinder;
useGLTF.preload('models-3d/cylinder.glb')