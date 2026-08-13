import bg from "../../assets/get.png";
import flag from "../../assets/flag.png";
import { useModal } from "../../store/modals";

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

export default function Get({
  bgSrc = bg,
  title = "THINK BIG",
  donateHref = "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate",
}) {
  const { setCurrModal } = useModal();

  return (
    <>
      <section className="my-14 space-y-12">
        <section className="px-4 lg:px-0">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl lg:rounded-none lg:min-h-[360px] 2xl:min-h-[400px]">
            <img
              src={flag}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-bottom rotate-180"
              aria-hidden
            />
            <div className="absolute inset-0 bg-[#6B0D17E0]" aria-hidden />
            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center md:gap-5 md:py-16">
              <h2 className="font-lufga font-bold text-white text-6xl xl:text-7xl">
                Ready to make a Difference?
              </h2>
              <p className="max-w-4xl text-base text-white/80 md:text-2xl xl:text-4xl">
                Your contribution - any amount - puts us one step closer to the
                change Rhode Island needs.
              </p>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase text-brown transition-opacity hover:opacity-90 md:text-base"
              >
                DONATE NOW
              </a>
            </div>
          </div>
        </section>
        <section className="h-[420px] md:h-[280px] lg:h-[450px] relative overflow-hidden rounded-[13px] mx-4 lg:mx-7">
          <img
            src={bgSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-evenly py-8 md:py-10 px-4 lg:px-14">
            <h2 className="text-center text-white font-semibold leading-tight text-4xl md:text-6xl lg:text-[85px]">
              {title}
            </h2>

            <div className="mt-6 flex flex-col gap-16 text-center md:flex-row justify-center w-full text-2xl lg:text-4xl text-[#5e0b0b]">
              <button
                onClick={() => setCurrModal("signup")}
                className="rounded-full bg-white px-6 py-3 lg:py-5 lg:px-7 shadow-sm hover:shadow"
              >
                SIGN UP NOW
              </button>

              <button
                onClick={() => setCurrModal("join-movement")}
                className="rounded-full bg-white px-6 py-3 lg:py-5 lg:px-7 shadow-sm hover:shadow"
              >
                JOIN THE MOVEMENT
              </button>

              <a
                href={donateHref}
                target="_blank"
                className="rounded-full text-center bg-white px-6 py-3 lg:py-5 lg:px-7 shadow-sm hover:shadow"
              >
                DONATE
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
