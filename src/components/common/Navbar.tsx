import { Facebook, Instagram } from "lucide-react";
import { CommonButton } from "./CommonButton";
import logo from "../../assets/logo.png";
import { useState } from "react";
import SignUpNowModal from "../modal/SignUpNowModal";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const donateHref =
    "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

  return (
    <>
      <nav className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 md:p-7 lg:px-0 flex items-center justify-between h-32 lg:h-56">
          <div className="flex-shrink-0 h-28 lg:h-48">
            <img
              src={logo}
              alt="Aaron Guckian for Governor"
              className="h-full w-full"
            />
          </div>

          {/* Right Section - Buttons and Social Media */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <a
              href={donateHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 md:w-52 md:py-7 md:text-xl"
            >
              <CommonButton
                showArrow={false}
                className="w-32 md:w-52 md:py-7 md:text-xl"
              >
                DONATE NOW
              </CommonButton>
            </a>

            <CommonButton
              showArrow={false}
              onClick={() => setOpen(true)}
              className="w-28 md:w-40 md:py-7 md:text-xl"
            >
              SIGN UP
            </CommonButton>

            {/* Social Media Icons - Desktop Only */}
            <div className="hidden lg:flex items-center gap-3 ml-2">
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-brown/5 border border-brown/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-7 h-7 text-brown" />
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-brown/5 border border-brown/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-7 h-7 text-brown"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-14 h-14 rounded-full bg-brown/5 border border-brown/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7 text-brown" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <SignUpNowModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
