import { create } from 'zustand';

const useUserInfoStore = create((set) => ({
  userName: '',
  setUserName: (name) => set({ userName: name }),
  avatar: 10,
  setAvatar: (ava) => set({ avatar: ava }),
}));

export default useUserInfoStore;
