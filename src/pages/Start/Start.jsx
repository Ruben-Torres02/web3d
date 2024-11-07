import { Canvas } from "@react-three/fiber"
import Button from "../../components/Button/Button"
import ButtonLogOut from "../../components/ButtonLogOut/ButtonLogOut"
import "./Start.css"
import { Trash } from "../../components/Trash/Trash"
import { Link } from "react-router-dom"
const Start = () =>{
    return (
        <>
        <ButtonLogOut />
        <div className="container">
          <div className="container-options">
            <div className="container-options-option">
              <Link to={"/pollution"}>
                <Button text={"Contaminacion"}/>
              </Link>
            </div>

            <div className="container-options-option">
              <Link to={"/shortage"}>
              <Button text={"Escasez"}/>
              </Link>
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