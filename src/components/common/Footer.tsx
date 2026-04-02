import { Facebook } from "lucide-react";
import logo from "../../assets/logow.png";
export function Footer() {
  return (
    <footer className="bg-brown text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center text-center gap-8 py-12 text-lg font-lufga font-medium">
        {/* Logo */}
        <figure>
          <img
            src={logo}
            alt="Aaron Guckian for Governor"
            className="h-32 w-auto"
          />
        </figure>

        {/* Contact Info */}
        <div className="space-y-2">
          {/* <p>(401)952-5764</p> */}
          <a href="mailto:info@aaronforri.com" className="block">
            info@aaronforri.com
          </a>
          <p>POBox 308</p>
          <p>East Greenwich, Rhode Island 02818</p>
        </div>

        {/* Press/Media Contact */}
        <div className="space-y-2">
          <p className="text-2xl font-bold">PRESS/MEDIA Contact</p>

          {/* <p>(941) 935-6108</p> */}
          <a href="mailto:press@aaronforri.com" className="block">
            press@aaronforri.com
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/share/1F9GRLggZz/?mibextid=wwXIfr"
            target="_blank"
            className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-8 w-8" />
          </a>
          <a
            href="https://x.com/GuckianRI"
            target="_blank"
            className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* <a
            href="#"
            className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-8 w-8" />
          </a> */}
        </div>

        {/* Footer Text */}
        <section className="space-y-4 bg-white px-6 py-8 text-xl">
          <p className="text-brown">
            Paid for and approved by the friends of Aaron Guckian.
          </p>
          <p className="text-brown/50">All content on this website is authorized by the campaign.</p>
        </section>
        <section className="flex flex-col gap-2 text-white/60">
          <a href="/privacy-policy" className="cursor-pointer hover:text-white transition-colors hover:scale-100">Privacy Policy</a>
          <a href="/terms-of-use" className="cursor-pointer hover:text-white transition-colors hover:scale-100">Terms of use</a>
        </section>
        <p>Copyright © 2026</p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col items-center gap-10 p-10 text-4xl font-lufga font-medium">
        <figure className="w-96">
          <img src={logo} alt="Aaron" className="w-full h-full" />
        </figure>
        <div className="flex justify-around w-full place-items-end mb-12">
          <div className="space-y-2 text-left">
            {/* <p>(401)952-5764</p> */}
            <a href="mailto:info@aaronforri.com" className="block">
              info@aaronforri.com
            </a>
            <p>POBox 308</p>
            <p>East Greenwich, Rhode Island 02818</p>
          </div>

          <div className="space-y-2 text-right">
            <p className=" font-bold">PRESS/MEDIA Contact</p>

            {/* <p>(941) 935-6108</p> */}
            <a href="mailto:press@aaronforri.com" className="block">
              press@aaronforri.com
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/share/1F9GRLggZz/?mibextid=wwXIfr"
            target="_blank"
            className="h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-10 h-10" />
          </a>
          <a
            href="https://x.com/GuckianRI"
            target="_blank"
            className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* <a
            href="#"
            className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10" />
          </a> */}
        </div>

        {/* Footer Text */}
        <section className="flex flex-col items-center space-y-4 bg-white px-6 py-8 rounded-xl w-full max-w-2xl 2xl:max-w-3xl">
          <p className="text-brown text-xl 2xl:text-2xl">
            Paid for and approved by the friends of Aaron Guckian.
          </p>
          <p className="text-brown/50 text-base 2xl:text-xl">All content on this website is authorized by the campaign.</p>
        </section>
        <section className="flex justify-between items-center text-base 2xl:text-lg w-full max-w-2xl 2xl:max-w-3xl">
          <p>Copyright © 2026</p>
          <section className="flex gap-4 text-white/60">
            <a href="/privacy-policy" className="cursor-pointer hover:text-white transition-transform hover:scale-105 duration-1000">Privacy Policy</a>
            <a href="/terms-of-use" className="cursor-pointer hover:text-white transition-transform hover:scale-105 duration-1000">Terms of use</a>
          </section>
        </section>
      </div>
    </footer>
  );
}
