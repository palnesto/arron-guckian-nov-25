import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import fb from "../../assets/fb.png";
import { CommonButton } from "./CommonButton";
import logo from "../../assets/logo.png";
import { useModal } from "../../store/modals";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const { setCurrModal } = useModal();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const donateHref =
    "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

  const store =
    "https://secure.winred.com/friends-of-aaron-guckian-0394772f/storefront/";

  const [socialsOpen, setSocialsOpen] = useState(false);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!socialsOpen) return;
    const handle = (e: MouseEvent) => {
      if (
        socialsRef.current &&
        !socialsRef.current.contains(e.target as Node)
      ) {
        setSocialsOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [socialsOpen]);

  const navLinkClass =
    "text-brown uppercase text-xs md:text-lg 2xl:text-lg font-semibold tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap";

  return (
    <nav className="top-0 z-50 left-0 right-0 shadow-sm w-full bg-white relative">
      <div className="px-4 md:px-7 flex items-center justify-between h-32 xl:h-40">
        <a href="/" className="h-28 xl:h-32 2xl:h-40">
          <img
            src={logo}
            alt="Aaron Guckian for Governor"
            className="h-full w-full"
          />
        </a>

        <div className="hidden xl:flex flex-1 items-center justify-end gap-6 2xl:gap-10 min-w-0">
          <nav className="flex items-center gap-4 xl:gap-7 min-w-0">
            <Link
              to="/blogs"
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              AARON’S WORK SMARTER PLAN
            </Link>

            <button
              type="button"
              onClick={() => setCurrModal("join-movement")}
              className={navLinkClass}
            >
              JOIN THE MOVEMENT
            </button>

            <a
              href={store}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              STORE
            </a>
          </nav>

          <CommonButton
            asChild
            showArrow={false}
            className="shrink-0 px-6 py-6 text-xs uppercase xl:text-xl 2xl:text-2xl"
          >
            <a
              href={donateHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              DONATE NOW
            </a>
          </CommonButton>
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
            <CommonButton
              showArrow={false}
              onClick={() => {
                setOpen(false);
                navigate("/blogs");
              }}
              className="w-full py-3 font-semibold uppercase text-xs md:text-sm"
            >
              AARON’S WORK SMARTER PLAN
            </CommonButton>
            <a
              href={donateHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <CommonButton
                showArrow={false}
                className="w-full py-3 font-semibold text-xs md:text-sm"
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
              className="w-full py-3 font-semibold text-xs md:text-sm"
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
                className="w-full py-3 font-semibold text-xs md:text-sm"
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
