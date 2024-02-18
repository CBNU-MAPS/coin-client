import { create } from 'zustand';

const useAnswerStore = create((set) => ({
  answers: [],
  setAnswers: (answers) => set({ answers }),
}));

export default useAnswerStore;
