import bg from "../../assets/get.png";
import { useModal } from "../../store/modals";

export default function Get({
  bgSrc = bg,
  title = "Get involved in the sea of change...",
  donateHref = "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate",
}) {
  const { setCurrModal } = useModal();

  return (
    <>
      <section className="my-14 px-4">
        <div className="h-[420px] md:h-[280px] lg:h-[450px] relative overflow-hidden rounded-[60px]">
          <img
            src={bgSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-evenly py-8 md:py-10 lg:px-14">
            <h2 className="text-center text-white font-semibold leading-tight text-2xl md:text-4xl lg:text-[85px]">
              {title}
            </h2>

            <div className="mt-6 flex flex-col gap-4 md:flex-row justify-between w-full text-2xl lg:text-4xl text-[#5e0b0b]">
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
        </div>
      </section>
    </>
  );
}
