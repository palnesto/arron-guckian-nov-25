import bg from "../../assets/herobg.png";
import governor from "../../assets/governor.png";
import { CommonButton } from "../common/CommonButton";
import { useModal } from "../../store/modals";

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

export default function Home() {
  const { setCurrModal } = useModal();

  return (
    <main className="pb-5 mt-20">
      <div className="hidden lg:flex lg:min-h-[min(92vh,880px)] w-full lg:flex-row">
        {/* Left — solid white + headline + CTAs */}
        <div className="relative z-10 flex w-[44%] min-w-0 flex-col justify-center bg-white pl-6 pr-4 lg:w-[45%] xl:pl-14 xl:pr-8 lg:py-40 xl:py-24 font-lufga pb-8 font-bold uppercase leading-[1.05] xl:pb-10">
          <h1 className="text-[#701018] text-4xl lg:text-4xl 2xl:text-7xl"> 
              Rhode  Island... 
              </h1>
            <h2 className="my-3 text-blue text-2xl lg:text-4xl 2xl:text-6xl">
              It&apos;s time to  
              Think big
            </h2>
          

          <section className="flex items-center gap-4">
            <CommonButton
              onClick={() => setCurrModal("join-movement")}
              className="px-4 py-6 font-semibold xl:px-10 xl:py-7 xl:text-xl"
            >
              JOIN THE MOVEMENT
            </CommonButton>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CommonButton
                showArrow={false}
                className="border border-brown !bg-white !text-[#701018] px-4 py-6 font-semibold uppercase hover:!bg-white/95 xl:px-10 xl:py-7 xl:text-xl"
              >
                DONATE NOW
              </CommonButton>
            </a>
          </section>
        </div>

        {/* Right — lighthouse, blend gradient, governor, card */}
        <div className="relative flex-1 overflow-hidden h-[400px] lg:min-h-[min(88vh,820px)]">
          <img
            src={bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />

          {/* White → transparent so the photo meets the left column smoothly */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(52%,380px)] bg-gradient-to-r from-white via-white/90 to-transparent xl:w-[min(48%,440px)]"
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 z-[2] flex items-end justify-center">
            <img
              src={governor}
              alt="Aaron Guckian"
              className="h-[min(90%,min(78vh,720px))] w-auto max-w-[min(100%,520px)] object-contain object-bottom"
            />
          </div>

          <div className="absolute bottom-6 left-4 right-4 z-[3] mx-auto max-w-lg xl:bottom-10 xl:left-auto xl:right-10 xl:mx-0 xl:max-w-md">
            <div className="rounded-2xl bg-[#701018] px-6 py-6 text-center shadow-xl xl:px-8 xl:py-7">
              <p className="font-lufga text-base font-medium leading-snug text-white xl:text-lg">
                Rhode Island deserves leadership that works smarter, not harder.
              </p>
              <CommonButton
                onClick={() => setCurrModal("join-movement")}
                showArrow
                className="mt-5 w-full !bg-white !text-[#701018] hover:!bg-white/95 xl:mt-6"
              >
                JOIN THE MOVEMENT
              </CommonButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen text-center">
        <div className="px-6 pt-8 pb-5">
          <h1>
            <span className="block text-[40px] md:text-[60px] font-bold text-brown leading-tight">
              Rhode Island...
            </span>
            <span className="block text-[40px] md:text-[60px] font-bold text-blue leading-tight">
              It's time to THINK BIG
            </span>
          </h1>
        </div>

        <div className="relative flex-1 min-h-[300px] overflow-hidden">
          <div className="absolute inset-0 pl-3">
            <img
              src={bg}
              alt="Lighthouse background"
              className="w-full h-full"
            />
          </div>

          <div className="absolute inset-0 flex items-end justify-start -ml-5">
            <img
              src={governor}
              alt="Political candidate"
              className="h-full w-auto object-bottom"
            />
          </div>
        </div>

        <div className="px-6 pt-8 space-y-2">
          <CommonButton
            onClick={() => setCurrModal("join-movement")}
            className="text-xl mb-2"
          >
            JOIN THE MOVEMENT
          </CommonButton>
          {/* <a
            href="https://app.xpoll.io/campaigns/all-campaigns/696f81a002950ad67fc5cfd9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <CommonButton className="text-xl uppercase">
              Vote on xpoll
            </CommonButton>
          </a> */}
        </div>
      </div>
    </main>
  );
}
