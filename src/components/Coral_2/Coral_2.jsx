import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Coral_2 = (props) => {

    const { nodes, materials } = useGLTF('models-3d/coral-2.glb')
    const handleClick = () =>{
      alert ('¡Error! Los corales son vitales para la vida marina y el equilibrio de nuestros ecosistemas. Sacarlos del agua mientras están vivos causa su muerte y destruye hábitats esenciales para muchas especies.')
  }

    return (
        <group {...props} dispose={null} onClick={handleClick}>
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
