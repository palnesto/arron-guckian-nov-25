import bg from "../../assets/herobg.png";
import governor from "../../assets/governor.png";
import { CommonButton } from "../common/CommonButton";
import { useModal } from "../../store/modals";

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

function QuoteCard({ onJoin }: { onJoin: () => void }) {
  return (
    <div className="w-full rounded-2xl bg-[#701018] px-6 py-6 text-center shadow-xl xl:px-8 xl:py-7">
      <p className="font-lufga text-base font-medium leading-snug text-white xl:text-lg">
        Rhode Island deserves leadership that works smarter, not harder.
      </p>
      <CommonButton
        onClick={onJoin}
        showArrow
        className="mt-5 w-full !bg-white !text-[#701018] hover:!bg-white/95 xl:mt-6"
      >
        JOIN THE MOVEMENT
      </CommonButton>
    </div>
  );
}

export default function Home() {
  const { setCurrModal } = useModal();
  const openJoin = () => setCurrModal("join-movement");

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
              onClick={openJoin}
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

        {/* Right — lighthouse, blend, governor above centered card (card overlaps lower torso) */}
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden lg:min-h-[min(88vh,820px)]">
          <img
            src={bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(52%,380px)] bg-gradient-to-r from-white via-white/90 to-transparent xl:w-[min(48%,440px)]"
            aria-hidden
          />

          <div className="relative z-[2] flex min-h-[min(88vh,680px)] flex-1 flex-col items-center justify-end px-4 pb-8 lg:pb-10">
            <div className="flex w-full max-w-lg flex-col items-center xl:max-w-md">
              <img
                src={governor}
                alt="Aaron Guckian"
                className="relative z-[2] h-auto w-auto max-h-[min(38vh,320px)] max-w-[min(100%,440px)] object-contain object-bottom lg:max-h-[min(40vh,360px)] xl:max-h-[min(42vh,380px)]"
              />
              <div className="relative z-[3] -mt-10 w-full sm:-mt-12 lg:-mt-14">
                <QuoteCard onJoin={openJoin} />
              </div>
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
              It&apos;s time to THINK BIG
            </span>
          </h1>
        </div>

        <div className="relative flex min-h-[380px] flex-col overflow-hidden md:min-h-[420px]">
          <img
            src={bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />

          <div className="relative z-[1] flex flex-1 flex-col items-center px-4 pb-6 pt-8">
            <img
              src={governor}
              alt="Aaron Guckian"
              className="relative z-[2] max-h-[220px] w-auto shrink-0 object-contain object-bottom sm:max-h-[260px] md:max-h-[280px]"
            />
            <div className="relative z-[3] mt-4 w-full max-w-none">
              <QuoteCard onJoin={openJoin} />
            </div>
          </div>
        </div>

        <div className="space-y-2 px-6 pt-8">
          <CommonButton
            onClick={openJoin}
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
