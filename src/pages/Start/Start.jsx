import { Canvas } from "@react-three/fiber"
import Button from "../../components/Button/Button"
import ButtonLogOut from "../../components/ButtonLogOut/ButtonLogOut"
import "./Start.css"
import { Trash } from "../../components/Trash/Trash"
import { useNavigate } from "react-router-dom"
const Start = () =>{

  const navigate = useNavigate()

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
              <Button text={"Escasez"} onClick={()=> navigate("/shortage")}/>
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