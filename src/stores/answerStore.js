import { create } from 'zustand';

const useAnswerStore = create((set) => ({
  answer: [],
  setAnswers: (answers) => set({ answers }),
}));

export default useAnswerStore;
