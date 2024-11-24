
import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Scorpio = (props) => {
    const { nodes, materials } = useGLTF('models-3d/scorpio.glb')
    const rbScorpioRef = useRef();
    const handleBall = useCallback(() => {
        rbScorpioRef.current.applyImpulse({ x: 0, y: 20, z: -2 }, true);
        incrementStars()
    }, []);

    return (

        <RigidBody ref={rbScorpioRef} gravityScale={0.15} colliders="trimesh" >

            <group {...props} dispose={null} >
                <mesh
                    onClick={handleBall}
                    castShadow
                    receiveShadow
                    geometry={nodes.Scorpio.geometry}
                    material={materials['Scorpio.Mat']}
                    rotation={[Math.PI / 2, 0, 5]}
                />
            </group>

        </RigidBody>

    )
}

export default Scorpio;
useGLTF.preload('models-3d/scorpio.glb')