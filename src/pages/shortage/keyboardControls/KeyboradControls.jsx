import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function KeyboardControls() {
    const { camera } = useThree();
    const moveSpeed = 0.5; // Ajusta la velocidad de movimiento

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            switch (key) {
                case "w": // Adelante
                    camera.position.z -= moveSpeed;
                    break;
                case "s": // Atrás
                    camera.position.z += moveSpeed;
                    break;
                case "a": // Izquierda
                    camera.position.x -= moveSpeed;
                    break;
                case "d": // Derecha
                    camera.position.x += moveSpeed;
                    break;
                case "ArrowUp": // Arriba
                    camera.position.y += moveSpeed;
                    break;
                case "ArrowDown": // Abajo
                    camera.position.y -= moveSpeed;
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [camera]);

    return null; // No renderiza nada
}

export default KeyboardControls;
