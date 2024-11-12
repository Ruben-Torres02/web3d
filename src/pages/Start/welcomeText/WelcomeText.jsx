import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom"; 
import "./WelcomeText.css";
import Button from "../../../components/Button/Button";

const WelcomeText = () => {
    const navigate = useNavigate(); 


    const handleRedirect = (path) => {
        navigate(path);
    };

    return (
        <>

            <Html
                occlude
                wrapperClass="title"
                center
                distanceFactor={15}
                transform
                position={[0, 235, 0]}
            >
                <h1>Agua</h1>
            </Html>

            <Html
                occlude
                wrapperClass="intro"
                center
                distanceFactor={85}
                transform
                position={[0, 210, 0]}
            >
                <p>
                    El agua, un recurso natural imprescindible para la vida, se enfrenta a amenazas vitales.
                    La calidad de ríos, lagos y océanos empeora con la contaminación; la creciente escasez de
                    agua potable provocada por la sobreexplotación, el cambio climático y la acidificación de
                    los océanos son desafíos ambientales urgentes para la salud humana y de los ecosistemas
                    acuáticos. Es necesario tomar acción para proteger este recurso natural y asegurar su
                    disponibilidad para las generaciones futuras.
                </p>
            </Html>

            {/* Botón de navegación */}
            <Html position={[0, 180, 0]}
                className="buttons-container"
                transform
                distanceFactor={100}>
                    <Button text = {"contaminacion"} onClick={() => handleRedirect("/pollution")}/>
                    <Button text = {"escasez"} onClick={() => handleRedirect("/shortage")}/>
                    <Button text = {"acidificacion"} onClick={() => handleRedirect("/acidificacion")} />   
                    <Button text = {"Test"} onClick={() => handleRedirect("/acidificacion")} />   
            </Html>           
        </>
    );
};

export default WelcomeText;
