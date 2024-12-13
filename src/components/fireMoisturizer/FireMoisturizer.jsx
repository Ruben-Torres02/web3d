

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const FireMoisturizer = (props) => {
    const { nodes, materials } = useGLTF('models-3d/fireMoisturizer.glb')

    
    return (
        <group {...props} dispose={null} rotation={[Math.PI /20 ,5 ,0]} >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FireMoisturizer.geometry}
          material={materials.aiStandardSurface17}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
    )

}

export default FireMoisturizer ;

useGLTF.preload('models-3d/fireMoisturizer.glb')
