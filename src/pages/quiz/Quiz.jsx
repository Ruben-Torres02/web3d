// Quiz.jsx
import React, { useCallback } from 'react';
import './Quiz.css';
import useQuizStore from '../../stores/use-quiz-store';
import Image3D from './Image3D'; // Ajusta la ruta según la ubicación de tu archivo
import useAuthStore from '../../stores/use-auth-store';

const Quiz = () => {
    // const { quiz, incrementQuizProgress } = useQuizStore();
    
    const { logout } = useAuthStore ();

    const handlelogout = useCallback(() => {
        logout();
    },[logout] );

    // const onHandleButtonNext = useCallback(() => {
    //     incrementQuizProgress();
    // }, [incrementQuizProgress]);

    return (
        <div className="quiz-container">
            <h1 className="quiz-header">InnovaVerde</h1>
            <Image3D imageUrl="/earth.png" />
            <button onClick={handlelogout}>Cerrar Sesion</button>
        </div>
    );
};

export default Quiz;