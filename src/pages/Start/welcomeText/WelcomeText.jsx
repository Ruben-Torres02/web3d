import { Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./WelcomeText.css";

const WelcomeText = () => {
    const navigate = useNavigate(); // Inicializa la función de navegación

    // Función para redirigir a la página
    const handleRedirect = (path) => {
        navigate(path); // Redirige a la ruta indicada
    };

    return (
        <>
            {/* Título */}
            <Html
                occlude
                wrapperClass="title"
                center
                distanceFactor={15}
                transform
                position={[0, 235, 0]}
            >
                <h1>Agua.</h1>
            </Html>

            {/* Descripción */}
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
            <Html
                position={[0, 180, 0]}
                wrapperClass="button-pullution"
                transform
                distanceFactor={100}
            >
                <button 
                    type="button" 
                    onClick={() => handleRedirect("/pollution")}
                >
                    Contaminacion
                </button>
            </Html>
            <Html
                position={[0, 160, 0]}
                wrapperClass="button-shortage"
                transform
                distanceFactor={100}
            >
                <button 
                    type="button" 
                    onClick={() => handleRedirect("/shortage")}
                >
                    Escasez
                </button>
            </Html>
            <Html
                position={[0, 140, 0]}
                wrapperClass="button-acidificacion"
                transform
                distanceFactor={100}
            >
                <button 
                    type="button" 
                    onClick={() => handleRedirect("/acidificacion")}
                >
                    Acidificacion
                </button>
            </Html>

            
        </>
    );
};

export default WelcomeText;
