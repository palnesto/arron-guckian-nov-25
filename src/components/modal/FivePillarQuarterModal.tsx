import { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Inbox, X } from "lucide-react";

import popupBg from "../../assets/popup.png";
import { CommonButton } from "../common/CommonButton";
import { useModal } from "../../store/modals";

export const FIVE_PILLAR_QUARTER_STORAGE_KEY =
  "five-pillar-quarter-modal-dismissed";

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

export default function FivePillarQuarterModal() {
  const open = useModal((s) => s.fivePillarModalOpen);
  const setFivePillarModalOpen = useModal((s) => s.setFivePillarModalOpen);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(FIVE_PILLAR_QUARTER_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setFivePillarModalOpen(false);
  }, [setFivePillarModalOpen]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="five-pillar-quarter"
          role="presentation"
          className="fixed inset-0 z-[205] flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={dismiss}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="five-pillar-quarter-title"
            className="relative w-full max-w-[420px] overflow-hidden rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={popupBg}
              alt=""
              className="absolute inset-0 z-10 h-full w-full object-contain object-left"
              aria-hidden
            />
            <div className="absolute inset-0 z-[1] bg-[#042158]" aria-hidden />

            <div className="relative z-20 px-8 pb-10 pt-12 text-center sm:px-10 sm:pb-12 sm:pt-14">
              <button
                type="button"
                onClick={dismiss}
                className="absolute right-4 top-4 rounded-full p-1.5 text-white/90 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>

              <div className="mb-5 flex justify-center">
                <div className="rounded-xl bg-sky-300/25 p-3 shadow-inner ring-1 ring-sky-200/30">
                  <Inbox
                    className="h-10 w-10 text-sky-200"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
              </div>

              <p className="mb-4 font-lufga text-[11px] font-medium uppercase tracking-[0.3em] text-sky-200/80 sm:text-xs">
                End of quarter
              </p>

              <h2
                id="five-pillar-quarter-title"
                className="font-lufga text-[1.65rem] font-bold leading-tight text-white sm:text-2xl"
              >
                Help Us Close the Quarter Strong
              </h2>

              <p className="mx-auto mt-5 max-w-[320px] font-lufga text-sm font-medium leading-relaxed text-sky-100/85 sm:text-base">
                Every contribution brings us closer to the next step in this
                campaign.
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
                    DONATE TODAY
                  </a>
                </CommonButton>
              </div>

              <button
                type="button"
                onClick={dismiss}
                className="mt-6 font-lufga text-sm text-sky-200/80 transition hover:text-white"
              >
                Maybe next time
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
