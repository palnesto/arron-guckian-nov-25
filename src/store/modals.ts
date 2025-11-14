import { create } from "zustand";

type ModalState = {
  currModal: "signup" | "join-movement" | null;
  setCurrModal: (v: "signup" | "join-movement" | null) => void;
  closeModal: () => void;
};

export const useModal = create<ModalState>()((set) => ({
  currModal: null,
  setCurrModal: (v) => set({ currModal: v }),
  closeModal: () => set({ currModal: null }),
}));
