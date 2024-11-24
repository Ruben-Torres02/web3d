import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react"

const Catus = (props) => {
    const catusRef = useRef();
    const { nodes, materials, animations } = useGLTF('models-3d/catus7.glb')
    const { actions } = useAnimations(animations, catusRef)
    console.log(actions)

    useEffect (() => {
        actions ["Idle"].play();
        return () => actions ["Idle"].stop();
    }, [actions]);


    return (
        <RigidBody name="Catus" type="fixed" colliders="cuboid" >
            <group ref={catusRef} {...props} dispose={null}>
                <group name="Scene">
                    <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
                        <skinnedMesh
                            name="body_mesh"
                            geometry={nodes.body_mesh.geometry}
                            material={materials['Cactus.001']}
                            skeleton={nodes.body_mesh.skeleton}
                            castShadow
                        />
                        <primitive object={nodes.CATRigHub001} />
                    </group>
                </group>
            </group>
        </RigidBody>
    )
}
export default Catus
useGLTF.preload('models-3d/catus7.glb')