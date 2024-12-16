import { create } from "zustand";

const useQuizTime = create((set) => ({
    quizPoints: 0,
    setQuizPoints: () =>
        set((state) => ({ quizPoints: state.quizPoints + 1 })),
    quizTime: 0,
    setQuizTime: (QuizTime) => set({ QuizTime }),
    quizStarted: false,
    setQuizStarted: (started) => set({ quizStarted: started }),
    quizTimeReset: () => set({ QuizTime: 0 }),
    quizPointsReset: () => set({ quizPoints: 0 }),
    quizFinished: false,
    setQuizFinished: (finished) => set({ quizFinished: finished }),
}));

export default useQuizTime;