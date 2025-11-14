// import { MaxWidthContainer } from "../components/max-width-container";

// interface ApplicationLayoutProps {
//   children: React.ReactNode;
// }
// export function ApplicationFooter({ children }: ApplicationLayoutProps) {
//   return (
//     <div className="min-h-screen">
//       <MaxWidthContainer>{children}</MaxWidthContainer>
//     </div>
//   );
// }
import { ReactNode } from "react";
import { MaxWidthContainer } from "../components/max-width-container";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import SignUpNowModal from "../components/modal/SignUpNowModal";
import { useModal } from "../store/modals";
import JoinMovementModal from "../components/modal/JoinMovementModal";

export function ApplicationLayout({ children }: { children: ReactNode }) {
  const { currModal, closeModal } = useModal();
  return (
    <main className="min-h-screen flex flex-col">
      {currModal === "signup" && (
        <SignUpNowModal isOpen={true} onClose={closeModal} />
      )}
      {currModal === "join-movement" && (
        <JoinMovementModal isOpen={true} onClose={closeModal} />
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
