import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import fb from "../../assets/fb.png";
import { CommonButton } from "./CommonButton";
import logo from "../../assets/logo.png";
import { useModal } from "../../store/modals";

export function Navbar() {
  const { setCurrModal } = useModal();
  const [open, setOpen] = useState(false);

  const donateHref =
    "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

  const store =
    "https://secure.winred.com/friends-of-aaron-guckian-0394772f/storefront/";

  return (
    <nav className="top-0 z-50 left-0 right-0 shadow-sm w-full bg-white relative">
      <div className="px-4 md:px-7 flex items-center justify-between h-32 xl:h-56">
        <div className="h-28 xl:h-32 2xl:h-40">
          <img
            src={logo}
            alt="Aaron Guckian for Governor"
            className="h-full w-full"
          />
        </div>

        <div className="hidden xl:flex flex-col xl:flex-row items-center gap-2 xl:gap-3">
          <a
            href="https://medium.com/@aaron_85789/rhode-island-works-smarter-a-big-reset-for-a-state-thats-ready-to-move-forward-6b368a83b6ce"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <CommonButton
              showArrow={false}
              className="w-full px-3 xl:px-4 py-5 xl:py-7 text-sm 2xl:text-lg uppercase"
            >
              Aaron's Smarter Plan
            </CommonButton>
          </a>
          <a
            href="https://app.xpoll.io/campaigns/all-campaigns/696f81a002950ad67fc5cfd9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <CommonButton
              showArrow={false}
              className="w-full px-3 xl:px-4 py-5 xl:py-7 text-sm 2xl:text-lg"
            >
              VOTE ON XPOLL
            </CommonButton>
          </a>
          <a
            href={donateHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <CommonButton
              showArrow={false}
              className="w-full px-3 xl:px-4 py-5 xl:py-7 text-sm 2xl:text-lg"
            >
              DONATE NOW
            </CommonButton>
          </a>

          <CommonButton
            showArrow={false}
            onClick={() => setCurrModal("join-movement")}
            className="w-full px-3 xl:px-4 py-5 xl:py-7 text-sm 2xl:text-lg"
          >
            JOIN THE MOVEMENT
          </CommonButton>

          <a
            href={store}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <CommonButton
              showArrow={false}
              className="w-full px-3 xl:px-4 py-5 xl:py-7 text-sm 2xl:text-lg"
            >
              STORE
            </CommonButton>
          </a>

          {/* Social Media Icons - Desktop Only */}
          <div className="hidden xl:flex items-center gap-5 ml-2">
            <a
              href="https://www.facebook.com/share/1F9GRLggZz/?mibextid=wwXIfr"
              target="_blank"
              className="w-16 h-16 xl:w-16 xl:h-16 rounded-full bg-brown/5 border border-brown/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Facebook"
            >
              <img src={fb} className="xl:w-16 xl:h-16" />
            </a>
            <a
              href="https://x.com/GuckianRI"
              target="_blank"
              className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-brown/5 border border-brown/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-8 h-8 text-brown"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger (Right side) */}
        <button
          className="xl:hidden w-12 h-12 rounded-full shadow-2xl border border-brown/20 flex items-center justify-center"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              className="w-6 h-6 text-brown"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18" strokeLinecap="round" />
              <path d="M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-brown"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16" strokeLinecap="round" />
              <path d="M4 12h16" strokeLinecap="round" />
              <path d="M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* SHEET-STYLE MOBILE MENU (floating, right aligned) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -8, x: 20 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="xl:hidden absolute right-4 top-full max-w-xs w-[260px] rounded-3xl border border-brown/30 bg-white shadow-2xl px-3 py-4 flex flex-col gap-3"
          >
            <a
              href="https://medium.com/@aaron_85789/rhode-island-works-smarter-a-big-reset-for-a-state-thats-ready-to-move-forward-6b368a83b6ce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <CommonButton
                showArrow={false}
                className="w-full py-3 font-semibold uppercase"
              >
                Aaron's Smarter Plan
              </CommonButton>
            </a>
            <a
              href="https://app.xpoll.io/campaigns/all-campaigns/696f81a002950ad67fc5cfd9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <CommonButton
                showArrow={false}
                className="w-full py-3 font-semibold"
              >
                VOTE ON XPOLL
              </CommonButton>
            </a>

            <a
              href={donateHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <CommonButton
                showArrow={false}
                className="w-full py-3 font-semibold"
              >
                DONATE NOW
              </CommonButton>
            </a>

            <CommonButton
              showArrow={false}
              onClick={() => {
                setCurrModal("join-movement");
                setOpen(false);
              }}
              className="w-full py-3 text-base font-semibold"
            >
              JOIN THE MOVEMENT
            </CommonButton>

            <a
              href={store}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <CommonButton
                showArrow={false}
                className="w-full py-3 text-base font-semibold"
              >
                STORE
              </CommonButton>
            </a>
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://www.facebook.com/share/1F9GRLggZz/?mibextid=wwXIfr"
                target="_blank"
                className="w-16 h-16 rounded-full bg-brown/5 border border-brown/20 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Facebook"
              >
                <img src={fb} />
              </a>
              <a
                href="https://x.com/GuckianRI"
                target="_blank"
                className="w-16 h-16 rounded-full bg-brown/5 border border-brown/20 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-10 h-10 text-brown"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
