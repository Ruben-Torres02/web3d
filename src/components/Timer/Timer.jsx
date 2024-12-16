import React, { useEffect, useState } from 'react';
import './Timer.css';
import useQuizTime from '../../stores/use-time-store';
import { time } from 'three/tsl';

export default function Timer() {
    const [timer, setTimer] = useState(0);
    const {
        quizPoints,
        quizTime,
        setQuizTime,
        quizStarted,
        setQuizStarted,
        setQuizFinished,
    } = useQuizTime();

    useEffect(() => {
        let interval;

        // Iniciar el temporizador solo si el quiz ha comenzado
        if (quizStarted) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }

        // Detener el temporizador al alcanzar los 15 puntos
        if (quizPoints >= 15) {
            clearInterval(interval);
            setQuizStarted(false);
            setQuizTime(timer); // Guardar el tiempo final
            console.log(timer, "timer")
            console.log(quizTime)
            setQuizFinished(true);
        }

        // Limpiar el intervalo cuando el componente se desmonte o cambie el estado
        return () => clearInterval(interval);
    }, [quizStarted, quizPoints]);

    return (
        <div className="timer-container">
            <div className="timer">
                <span>Tiempo</span>
                <span>{timer}s</span>
            </div>
            <div className="points">
                <span>{quizPoints}/15</span>
            </div>
        </div>
    );
}
