import "./Shortage.css";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../components/desertt/Desertt";
import { Html, OrbitControls } from "@react-three/drei";
import Lights from "./Lights";

function Shortage() {
  return (
    <Canvas shadows camera={{ position: [0, 1, 5], fov: 75 }}>
      <OrbitControls makeDefault maxDistance={10} />
      <Lights />
      <Model position={[0, 0, 0]} />

      <Html
        wrapperClass="title-shortage"
        center
        distanceFactor={7}
        transform
        position={[0, 2.5, 0]}
      >

        <h1> ESCASEZ DE AGUA. </h1>
        
      </Html>

      <Html
        wrapperClass="intro-shortage"
        center
        distanceFactor={6}
        transform
        position={[0, 1.5, 0]}
      >

        <p>La escasez de agua es un problema global que afecta a millones de personas. 
           Por un lado, el crecimiento poblacional y la urbanización incrementan la demanda de este recurso vital. 
           Por otro lado, el cambio climático altera los patrones de precipitación, provocando sequías y limitando el acceso al agua potable. 
           Por lo tanto, es fundamental adoptar políticas sostenibles y promover un uso responsable del agua. </p>
          
      </Html>  


    </Canvas>
  );
}

export default Shortage;
