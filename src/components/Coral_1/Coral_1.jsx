
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Coral_1 = (props) => {

    const { nodes, materials } = useGLTF('models-3d/coral-1.glb')
    const handleClick = () =>{
        alert ('¡Error! Los corales son vitales para la vida marina y el equilibrio de nuestros ecosistemas. Sacarlos del agua mientras están vivos causa su muerte y destruye hábitats esenciales para muchas especies.')
    }

    return (
        <group {...props} dispose={null} onClick={handleClick}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes['coral-1'].geometry}
                material={materials.Material}
                position={[-203.334, -103.461, -60.154]}
                rotation={[-2.86, 1.415, 2.973]}
            />
        </group>

    )
}

export default Coral_1;
useGLTF.preload('models-3d/coral-1.glb')