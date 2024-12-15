import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Coral_2 = (props) => {

    const { nodes, materials } = useGLTF('models-3d/coral-2.glb')

    return (
        <group {...props} dispose={null}>
        <mesh
          geometry={nodes['coral-2'].geometry}
          material={materials.Material}
          position={[-33.838, -21.588, -7.443]}
          rotation={[-2.86, 1.415, 2.973]}
          scale={0.168}
        />
      </group>
    )
}

export default Coral_2;
useGLTF.preload('models-3d/coral-2.glb')
