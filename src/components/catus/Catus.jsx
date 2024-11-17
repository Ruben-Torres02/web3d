import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react"

const Catus = (props) => {
    const catusRef = useRef();
    const { nodes, materials, animations } = useGLTF('models-3d/catus.glb')
    const { actions } = useAnimations(animations, catusRef)
    console.log(actions)


    return (
        <RigidBody name="Catus" type="fixed">
            <group {...props} dispose={null} rotation={[-Math.PI /-2, 0, 0]}>
                <group name="Catus">
                    <skinnedMesh
                        geometry={nodes.body_mesh.geometry}
                        material={materials.Cactus}
                        skeleton={nodes.body_mesh.skeleton}
                        castShadow
                    />
                    <primitive object={nodes.CATRigHub001} />
                </group>
            </group>
        </RigidBody>
    )
}
export default Catus
useGLTF.preload('models-3d/catus.glb')