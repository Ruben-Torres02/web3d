import { Canvas } from "@react-three/fiber"
import Button from "../../components/Button/Button"
import ButtonLogOut from "../../components/ButtonLogOut/ButtonLogOut"
import "./Start.css"
import { Trash } from "../../components/Trash/Trash"
const Start = () =>{
    return (
        <>
        <ButtonLogOut />
        <div className="container">
          <div className="container-options">
            <div className="container-options-option">
              <Canvas>
                <ambientLight />
                <directionalLight position={[10, 10, 10]} intensity={5} />
                <Trash/>
              </Canvas>
              <Button text={"Contaminacion"}/>
            </div>
            <div className="container-options-option">
              <Button text={"Escasez"}/>
            </div>
            <div className="container-options-option">
              <Button text={"Acidificacion"}/>
            </div>
            <div className="container-options-option">
              <Button text={"Test"}/>
            </div>
          </div>
        </div>
      </> 
    )

}

export default Start