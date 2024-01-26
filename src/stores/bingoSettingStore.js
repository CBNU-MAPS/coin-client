import { create } from 'zustand';

const useBingoSettingStore = create((set) => ({
  bingoName: '',
  setBingoName: (name) => set({ bingoName: name }),
  bingoHeadCount: 2,
  setBingoHeadCount: (count) => set({ bingoHeadCount: count }),
  bingoSize: 3,
  setBingoSize: (size) => set({ bingoSize: size }),
}));

export default useBingoSettingStore;
