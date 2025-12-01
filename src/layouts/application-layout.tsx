// import { ReactNode } from "react";
// import { MaxWidthContainer } from "../components/max-width-container";
// import { Footer } from "../components/common/Footer";
// import { Navbar } from "../components/common/Navbar";
// import SignUpNowModal from "../components/modal/SignUpNowModal";
// import { useModal } from "../store/modals";
// import JoinMovementModal from "../components/modal/JoinMovementModal";

// export function ApplicationLayout({ children }: { children: ReactNode }) {
//   const { currModal, closeModal } = useModal();
//   return (
//     <main className="min-h-screen flex flex-col">
//       {currModal === "signup" && (
//         <SignUpNowModal isOpen={true} onClose={closeModal} />
//       )}
//       {currModal === "join-movement" && (
//         <JoinMovementModal isOpen={true} onClose={closeModal} />
//       )}
//       <MaxWidthContainer>
//         <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
//           <Navbar />
//         </header>
//         {children}
//         <Footer />
//       </MaxWidthContainer>
//     </main>
//   );
// }
// src/layouts/ApplicationLayout.tsx
import { ReactNode } from "react";
import { MaxWidthContainer } from "../components/max-width-container";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import SignUpNowModal from "../components/modal/SignUpNowModal";
import JoinMovementModal from "../components/modal/JoinMovementModal";
import { useModal } from "../store/modals";
import successImage from "../assets/success.png"; // 👈 moved here

export function ApplicationLayout({ children }: { children: ReactNode }) {
  const { currModal, closeModal, isImageModalOpen, closeImgModal } = useModal();

  return (
    <main className="min-h-screen flex flex-col">
      {/* Form modals */}
      {currModal === "signup" && (
        <SignUpNowModal isOpen={true} onClose={closeModal} />
      )}
      {currModal === "join-movement" && (
        <JoinMovementModal isOpen={true} onClose={closeModal} />
      )}

      {isImageModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
          <img
            src={successImage}
            alt="Thank you for joining"
            className="max-w-[90vw] max-h-[90vh] cursor-pointer rounded-xl shadow-2xl"
            onClick={closeImgModal}
          />
        </div>
      )}

      <MaxWidthContainer>
        <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <Navbar />
        </header>
        {children}
        <Footer />
      </MaxWidthContainer>
    </main>
  );
}
