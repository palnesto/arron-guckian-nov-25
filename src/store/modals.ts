import { create } from "zustand";

type ModalState = {
  currModal: "signup" | "join-movement" | null;
  isImageModalOpen: boolean;
  setCurrModal: (v: "signup" | "join-movement" | null) => void;
  closeModal: () => void;

  openImgModal: () => void;
  closeImgModal: () => void;
};

export const useModal = create<ModalState>()((set) => ({
  currModal: null,
  isImageModalOpen: false,
  openImgModal: () => set({ isImageModalOpen: true }),
  closeImgModal: () => set({ isImageModalOpen: false }),
  setCurrModal: (v) => set({ currModal: v }),
  closeModal: () => set({ currModal: null }),
}));
