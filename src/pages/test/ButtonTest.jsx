import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Html } from "@react-three/drei";

const ButtonTest = () => {
    const navigate = useNavigate();

    const handleRedirect = (path) => {
        navigate(path);
    };

    return (
        <Html
            position={[5, 6.2, 0]}
            className='button-test'
            transfrom
        >
            <Button text={"Siguiente"} onClick={() => handleRedirect("/shortage-Test")} />


        </Html>

    )


}

export default ButtonTest;