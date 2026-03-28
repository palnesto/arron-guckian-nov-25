import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";

import popupBg from "../../assets/popup.png";
import { CommonButton } from "../common/CommonButton";
import { useModal } from "../../store/modals";

const STORAGE_KEY = "visit-donate-popup-dismissed";

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

export default function VisitPopup() {
  const [open, setOpen] = useState(false);
  const setVisitPopupOpen = useModal((s) => s.setVisitPopupOpen);

  useEffect(() => {
    setVisitPopupOpen(open);
  }, [open, setVisitPopupOpen]);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* ignore */
    }

    const id = window.setTimeout(() => setOpen(true), 2000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="visit-popup"
          role="presentation"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={dismiss}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="visit-popup-title"
            className="relative w-full max-w-[420px] overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popupBg}
              alt=""
              className="absolute inset-0 h-full w-full object-contain object-left z-10"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[#042158]"
              aria-hidden
            />

            <div className="relative z-20 px-8 pb-10 pt-12 text-center sm:px-10 sm:pb-12 sm:pt-14">
              <button
                type="button"
                onClick={dismiss}
                className="absolute right-4 top-4 rounded-full p-1.5 text-white/90 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>

              <div className="mb-4 flex justify-center">
                <Star
                  className="h-9 w-9 fill-amber-400 text-amber-500 drop-shadow-md"
                  strokeWidth={0}
                  aria-hidden
                />
              </div>

              <p className="mb-5 font-lufga text-[11px] font-medium uppercase tracking-[0.35em] text-sky-200/75 sm:text-xs">
                Rhode Island 2026
              </p>

              <h2
                id="visit-popup-title"
                className="font-lufga text-[2rem] font-bold leading-tight text-white sm:text-[2.25rem]"
              >
                <span className="block">Think Big</span>
                <span className="block">Make Change.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-[320px] font-lufga text-sm font-medium leading-relaxed text-sky-100/85 sm:text-base">
                Your support fuels a smarter, stronger Rhode Island.
              </p>

              <div className="mt-8 flex justify-center">
                <CommonButton
                  asChild
                  showArrow
                  className="min-h-[52px] w-full max-w-[280px] px-6 py-4 text-sm font-semibold uppercase sm:text-base"
                >
                  <a
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                  >
                    DONATE NOW
                  </a>
                </CommonButton>
              </div>

              <button
                type="button"
                onClick={dismiss}
                className="mt-6 font-lufga text-sm text-sky-200/80 transition hover:text-white"
              >
                No thanks, Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
