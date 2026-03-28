import { create } from "zustand";

type ModalState = {
  currModal: "signup" | "join-movement" | null;
  isImageModalOpen: boolean;
  /** Used with VisitPopup for global scroll lock */
  visitPopupOpen: boolean;
  /** Quarter / Five Pillars donation prompt */
  fivePillarModalOpen: boolean;
  setCurrModal: (v: "signup" | "join-movement" | null) => void;
  closeModal: () => void;

  openImgModal: () => void;
  closeImgModal: () => void;
  setVisitPopupOpen: (v: boolean) => void;
  setFivePillarModalOpen: (v: boolean) => void;
};

export const useModal = create<ModalState>()((set) => ({
  currModal: null,
  isImageModalOpen: false,
  visitPopupOpen: false,
  fivePillarModalOpen: false,
  openImgModal: () => set({ isImageModalOpen: true }),
  closeImgModal: () => set({ isImageModalOpen: false }),
  setCurrModal: (v) => set({ currModal: v }),
  closeModal: () => set({ currModal: null }),
  setVisitPopupOpen: (v) => set({ visitPopupOpen: v }),
  setFivePillarModalOpen: (v) => set({ fivePillarModalOpen: v }),
}));
