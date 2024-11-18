
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';


export function Lapras3D(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models-3d/lapras3d.glb");
  const { actions } = useAnimations(animations, group)
  const [sub, get] = useKeyboardControls()

  useEffect(() => {
    // Reproduce la animación "Idle" por defecto
    actions["Idle"]?.fadeIn(0.5).play();

    // Suscribirse a cambios del teclado
    const unsubscribe = sub(({ jump }) => {
      if (jump) {
        // Activar la animación "Jump" cuando se presione Enter
        actions["Idle"]?.fadeOut(0.5); // Opcional: desactiva "Idle"
        actions["Jump"]?.reset().fadeIn(0.5).play(); // Activa "Jump"
        setTimeout(() => {
          actions["Jump"]?.fadeOut(0.5);
          actions["Idle"]?.fadeIn(0.5).play(); // Regresa a "Idle"
        }, 1000); // Duración estimada de la animación
      }
    });

    actions["Idle"]?.fadeIn(0.5).play();

    return () => {
      unsubscribe(); // Limpia la suscripción
      actions["Idle"]?.stop();
      actions["Jump"]?.stop();
    };
  }, [actions, sub]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <group name="vsn_mesh_6_BodyATattu01">
            <skinnedMesh
              name="mesh_6_BodyATattu01"
              geometry={nodes.mesh_6_BodyATattu01.geometry}
              material={materials.BodyATattu00_mat}
              skeleton={nodes.mesh_6_BodyATattu01.skeleton}
            />
            <RigidBody type='fixed'>
            <skinnedMesh
              name="mesh_6_BodyATattu01_1"
              geometry={nodes.mesh_6_BodyATattu01_1.geometry}
              material={materials.Eye_mat}
              skeleton={nodes.mesh_6_BodyATattu01_1.skeleton}
              />
            <skinnedMesh
              name="mesh_6_BodyATattu01_2"
              geometry={nodes.mesh_6_BodyATattu01_2.geometry}
              material={materials.BodyB_mat}
              skeleton={nodes.mesh_6_BodyATattu01_2.skeleton}
              />
            <skinnedMesh
              name="mesh_6_BodyATattu01_3"
              geometry={nodes.mesh_6_BodyATattu01_3.geometry}
              material={materials.BodyBVco_mat}
              skeleton={nodes.mesh_6_BodyATattu01_3.skeleton}
              />
          </RigidBody>
        
          </group>
          <primitive object={nodes.pm0131_00} />
          <primitive object={nodes.neutral_bone} />
      </group>
      <mesh
        name="Icosphere001"
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={nodes.Icosphere001.material}
      />
    </group>
  )
}

useGLTF.preload("/models-3d/lapras3d.glb");
