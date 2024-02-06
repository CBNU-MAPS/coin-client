import { create } from 'zustand';

const useUserAvatarStore = create((set) => ({
  userAvatar: Array(10).fill(false),
  setUserAvatar: (list) => set({ userAvatar: list }),
}));

export default useUserAvatarStore;
