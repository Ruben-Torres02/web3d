import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import useQuizStore from '../../stores/use-quiz-store'

const Cylinder = (props) => {
  const { nodes, materials } = useGLTF('models-3d/cylinder.glb')
  const [visible, setVisible] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false);
  const incrementQuizProgress = useQuizStore(state => state.incrementQuizProgress);

  const handleClick = () => {
    if (hasInteracted) return;
    setHasInteracted;
    incrementQuizProgress();
    alert('¡Excelente! La descarga de materiales peligrosos en el agua pone en riesgo toda la vida acuática y la salud humana. ¡No permitas que productos tóxicos contaminen nuestras fuentes de agua!')
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