import { create } from "zustand";

const useQuizStore = create((set) => ({
    quiz: {
        correctAnswer: 0,
        incorrectAnswer: 0,
        percentageQuizCompleted: 0,
    },
    setQuiz: (quizUpdates) =>
        set((state) => ({
            quiz: { ...state.quiz, ...quizUpdates },
        })
        ),
    clearQuiz: () =>
        set({
            quiz: {
                correctAnswer: 0,
                incorrectAnswer: 0,
                percentageQuizCompleted: 0,
            },
        }),

    incrementQuizProgress: () => {
        set((state) => {
            const newPercentage = Math.min(state.quiz.percentageQuizCompleted + 20, 100)
            return {
                quiz: {
                    ...state.quiz,
                    percentageQuizCompleted: newPercentage,
                },
            };
        });
    },

}));

export default useQuizStore;