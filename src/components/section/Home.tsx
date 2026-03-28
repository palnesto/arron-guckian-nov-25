import bg from "../../assets/herobg.png";
import governor from "../../assets/governor.png";
import { cn } from "../../lib/utils";
import { CommonButton } from "../common/CommonButton";
import { useModal } from "../../store/modals";

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

function QuoteCard({
  mobile,
}: {
  /** Stacked layout only (hidden from md up); skips desktop xl tweaks */
  mobile?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl bg-[#701018] px-6 py-6 text-center shadow-xl",
        !mobile && "xl:px-8 xl:py-7"
      )}
    >
      <p
        className={cn(
          "font-lufga text-lg font-medium leading-snug text-white",
          !mobile && "xl:text-4xl"
        )}
      >
        Rhode Island deserves leadership that works smarter.
      </p>
      <a
        href={DONATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-5 block !bg-white !text-[#701018] hover:!bg-white/95 rounded-full px-4 py-3 font-semibold uppercase",
          !mobile && "xl:mt-6"
        )}
      >
        DONATE NOW
      </a>
    </div>
  );
}

export default function Home() {
  const { setCurrModal } = useModal();
  const openJoin = () => setCurrModal("join-movement");

  return (
    <main className="pb-5 lg:mt-20">
      <div className="hidden h-[500px] lg:h-[min(92vh,880px)] w-full md:flex md:flex-row">
        {/* Left — solid white + headline + CTAs */}
        <div className="relative z-10 flex min-w-0 flex-col justify-center bg-white pb-8 pl-6 pr-4 font-lufga font-bold uppercase leading-[1.05] w-[45%] py-40 xl:w-[50%] xl:px-14 xl:py-24">
          <h1 className="text-4xl text-[#701018] lg:text-6xl 2xl:text-8xl">
            Rhode Island...
          </h1>
          <h2 className="mt-3 mb-6 text-4xl text-blue lg:text-6xl 2xl:text-8xl">
            It&apos;s time to Think big
          </h2>

          <CommonButton
            onClick={openJoin}
            className="px-4 py-6 font-semibold xl:px-10 xl:py-7 xl:text-xl w-fit"
          >
            JOIN THE MOVEMENT
          </CommonButton>
        </div>

        {/* Right — lighthouse, blend, governor above centered card (card overlaps lower torso) */}
        <div className="relative flex flex-1 flex-col overflow-hidden min-h-[200px] lg:min-h-[min(88vh,820px)]">
          <img
            src={bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[min(52%,380px)] bg-gradient-to-r from-white via-white/70 to-transparent xl:w-[min(32%,300px)]"
            aria-hidden
          />

          <div className="relative z-[2] flex h-[600px] lg:h-[min(88vh,680px)] flex-1 flex-col items-center justify-end px-4 pb-8 md:pb-10">
            <div className="flex w-full max-w-lg flex-col items-center xl:max-w-xl">
              <img
                src={governor}
                alt="Aaron Guckian"
                className="relative z-[2] h-auto w-auto max-h-[min(42vh,380px)] max-w-[min(100%,520px)] object-contain object-bottom lg:max-h-[min(48vh,460px)] xl:max-h-[min(52vh,520px)] 2xl:max-h-[min(56vh,580px)]"
              />
              <div className="relative z-[3] -mt-10 w-full sm:-mt-12 xl:-mt-16">
                <QuoteCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stacked layout: visible only below md */}
      <div className="flex min-h-screen flex-col text-center md:hidden">
        <div className="px-6 pb-5 pt-8">
          <h1>
            <span className="block text-[40px] font-bold leading-tight text-brown">
              Rhode Island...
            </span>
            <span className="block text-[40px] font-bold leading-tight text-blue sm:text-[52px]">
              It&apos;s time to THINK BIG
            </span>
          </h1>
        </div>

        <div className="relative flex min-h-[380px] flex-col overflow-hidden sm:min-h-[400px]">
          <img
            src={bg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />

          <div className="relative z-[1] flex flex-1 flex-col items-center pt-20">
            <img
              src={governor}
              alt="Aaron Guckian"
              className="relative z-[2] max-h-[220px] w-auto shrink-0 object-contain object-bottom sm:max-h-[280px]"
            />
            <div className="relative z-[3] -mt-4 w-full max-w-none">
              <QuoteCard mobile />
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
