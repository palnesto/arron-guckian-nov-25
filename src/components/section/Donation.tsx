import support from "../../assets/support.png";
interface DonationButtonProps {
  amount: string;
  onClick?: () => void;
}

function DonationButton({ amount, onClick }: DonationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-white/40 backdrop-blur-3xl bg-opacity-30 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
    >
      {amount}
    </button>
  );
}

export function Support() {
  const donationAmounts = ["$10", "$25", "$50", "$100", "Other"];

  const handleDonation = (amount: string) => {
    console.log(`Donation clicked: ${amount}`);
  };

  return (
    <section className="relative w-full my-40 md:my-12 px-4">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative h-24 md:h-52 overflow-hidden -z-10">
          <img
            src={support}
            alt="Rhode"
            className="w-full h-full md:object-cover md:object-top"
          />
        </div>

        <div className="bg-brown px-6 py-8 md:px-12 md:py-10 rounded-t-2xl -mt-6 z-10">
          <div className="hidden md:flex md:gap-4 md:justify-center">
            {donationAmounts.map((amount) => (
              <DonationButton
                key={amount}
                amount={amount}
                onClick={() => handleDonation(amount)}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 md:hidden">
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
  );
}
