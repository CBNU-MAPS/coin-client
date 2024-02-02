import { create } from 'zustand';

const useQuestionStore = create((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
}));

export default useQuestionStore;
