import support from "../../assets/support.png";
import msupport from "../../assets/msupport.png";
import flag from "../../assets/flag.png"
interface DonationButtonProps {
  amount: string;
  onClick?: () => void;
}

function DonationButton({ amount, onClick }: DonationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-white/40 backdrop-blur-3xl bg-opacity-30 text-white font-semibold px-8 py-5 rounded-2xl transition-colors w-full"
    >
      {amount}
    </button>
  );
}

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

export function Support() {
  const donationAmounts = ["$10", "$25", "$50", "$100", "Other"];

  const handleDonation = (amount: string) => {
    if (typeof window !== "undefined") {
      window.open(DONATE_URL, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <section>
      <section className="my-12 px-4 xl:px-0">
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl xl:rounded-none lg:min-h-[360px] 2xl:min-h-[400px]">
          <img
            src={flag}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-bottom rotate-180"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-blue/95"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-center md:gap-5 md:py-16">
            <h2 className="font-lufga font-bold text-white text-4xl lg:text-6xl xl:text-7xl">
              Rhode Island Can Do Better
            </h2>
            <p className="max-w-2xl text-base text-white/80 md:text-2xl xl:text-4xl">
              We&apos;re building a campaign powered by people, not politics
            </p>
            <a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-brown px-8 py-3.5 text-sm font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-90 md:text-base"
            >
              Contribute today
            </a>
          </div>
        </div>
      </section>
      <section className="relative w-full my-12 px-4">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full">
          <div className="lg:hidden relative h-40 md:h-52 overflow-hidden -z-10">
            <img
              src={msupport}
              alt="Rhode"
              className="w-full h-full md:object-fill"
            />
          </div>
          <div className="hidden lg:block relative h-40 md:h-52 overflow-hidden -z-10">
            <img
              src={support}
              alt="Rhode"
              className="w-full h-full object-cover md:object-cover md:object-top"
            />
          </div>
          <div className="bg-brown px-6 py-8 md:px-12 md:py-10 rounded-t-2xl -mt-16 md:-mt-6 z-10">
            <div className="hidden md:flex md:gap-4 md:justify-center text-4xl">
              {donationAmounts.map((amount) => (
                <DonationButton
                  key={amount}
                  amount={amount}
                  onClick={() => handleDonation(amount)}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 md:hidden text-xl">
              <DonationButton
                amount="$10"
                onClick={() => handleDonation("$10")}
              />
              <DonationButton
                amount="$25"
                onClick={() => handleDonation("$25")}
              />
              <DonationButton
                amount="$50"
                onClick={() => handleDonation("$50")}
              />
              <DonationButton
                amount="$100"
                onClick={() => handleDonation("$100")}
              />
              <div className="col-span-2 flex justify-center">
                <DonationButton
                  amount="Other"
                  onClick={() => handleDonation("Other")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
