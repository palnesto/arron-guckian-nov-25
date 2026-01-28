import bg from "../../assets/herobg.png";
import governor from "../../assets/governor.png";
import { CommonButton } from "../common/CommonButton";
import { useModal } from "../../store/modals";
import { useApiQuery } from "../../hooks/useApiQuery";
import { endpoints } from "../../api/endpoints";

export default function Home() {
  const { data } = useApiQuery(endpoints.healthCheck);
  const { setCurrModal } = useModal();
  console.log("data", data);

  return (
    <main className="py-5">
      <div className="hidden lg:flex lg:flex-row">
        {/* Left Content Section */}
        <div className="w-1/3 pl-6 xl:pl-14 lg:py-28">
          {/* <p className="text-xl xl:text-3xl font-bold font-lufga uppercase text-brown mb-6">
            A NEW COURSE FOR THE OCEAN STATE
          </p> */}

          <h1 className="pb-10 font-semibold">
            <span className="block text-[45px] 2xl:text-[80px]  text-nowrap text-brown leading-tight">
              Rhode Island...
            </span>
            <span className="block text-[45px] 2xl:text-[65px] text-nowrap text-blue leading-tight">
              It's time to THINK BIG
            </span>
          </h1>

          <CommonButton
            onClick={() => setCurrModal("join-movement")}
            className="text-2xl font-medium py-10 px-14 mb-2"
          >
            JOIN THE MOVEMENT
          </CommonButton>
          <a
            href="https://app.xpoll.io/campaigns/all-campaigns/696f81a002950ad67fc5cfd9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <CommonButton className="text-2xl font-medium py-10 px-14 uppercase">
              Vote on xpoll
            </CommonButton>
          </a>
        </div>

        {/* Right Image Section - Layered Images */}
        <div className="lg:w-2/3 relative min-h-[750px]">
          {/* Background lighthouse image */}
          <div className="absolute inset-0 pl-72">
            <img
              src={bg}
              alt="Lighthouse background"
              className="w-full h-full"
            />
          </div>

          {/* Foreground man cutout - positioned on left side of lighthouse image */}
          <div className="absolute inset-0 flex items-end pl-52">
            <img
              src={governor}
              alt="Political candidate"
              className="h-full w-auto object-contain object-bottom -ml-14"
              style={{ maxHeight: "100%" }}
            />
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
          <a
            href="https://app.xpoll.io/campaigns/all-campaigns/696f81a002950ad67fc5cfd9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <CommonButton className="text-xl uppercase">
              Vote on xpoll
            </CommonButton>
          </a>
        </div>
      </div>
    </main>
  );
}
