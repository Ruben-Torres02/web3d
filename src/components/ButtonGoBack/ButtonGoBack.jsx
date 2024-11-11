import { useNavigate } from "react-router-dom"
import "./ButtonGoBack.css"



const ButtonGoBack = ()=>{
    
    const navigate = useNavigate ()
    const handleClickBack = () => {
        navigate("/start")
    }
    return (
        <button className="buttonGoBack" onClick={handleClickBack}>
            <img src="/icon-logout.svg"/>
        </button>
    )
}

export default ButtonGoBack