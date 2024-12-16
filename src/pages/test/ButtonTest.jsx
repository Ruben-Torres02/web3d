import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Html } from "@react-three/drei";

const ButtonTest = () => {
    const navigate = useNavigate();

    const handleRedirect = (path) => {
        navigate(path);
    };

    return (
        <Button text={"Siguiente"} onClick={() => handleRedirect("/shortage-Test")} />

    )


}

export default ButtonTest;