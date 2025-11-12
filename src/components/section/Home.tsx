import bg from "../../assets/herobg.png";
import governor from "../../assets/governor.png";
import { CommonButton } from "../common/CommonButton";

export default function Home() {
  return (
    <main className="py-5">
      <div className="hidden lg:flex lg:flex-row">
        {/* Left Content Section */}
        <div className="w-1/3 pl-6 xl:pl-14 lg:py-16">
          <p className="text-xl xl:text-3xl font-bold font-lufga uppercase text-brown mb-6">
            A NEW COURSE FOR THE OCEAN STATE
          </p>

          <h1 className="pb-10 text-5xl xl:text-[68px] font-semibold">
            <span className="block text-brown tracking-wider leading-tight">
              Rhode Island
            </span>
            <span className="block text-blue leading-tight">
              Rises Together
            </span>
          </h1>

          <CommonButton className="text-2xl font-medium py-10 px-14">
            JOIN THE MOVEMENT
          </CommonButton>

          <p className="text-brown text-4xl font-lufga pt-12">
            Modern leadership. Local focus. Real results for every Rhode
            Islander.
          </p>
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
        {/* Top Content Section */}
        <div className="px-6 pt-8 pb-5">
          <p className="font-bold font-lufga uppercase text-brown mb-4">
            A NEW COURSE FOR THE OCEAN STATE
          </p>

          <h1>
            <span className="block text-[47px] font-bold text-brown leading-tight">
              Rhode Island
            </span>
            <span className="block text-[47px] font-bold text-blue leading-tight">
              Rises Together
            </span>
          </h1>
        </div>

        {/* Middle Layered Images Section */}
        <div className="relative flex-1 min-h-[300px] overflow-hidden">
          {/* Background lighthouse image */}
          <div className="absolute inset-0 pl-3">
            <img
              src={bg}
              alt="Lighthouse background"
              className="w-full h-full"
            />
          </div>

          {/* Foreground man cutout */}
          <div className="absolute inset-0 flex items-end justify-start -ml-5">
            <img
              src={governor}
              alt="Political candidate"
              className="h-full w-auto object-bottom"
            />
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="px-6 py-8">
          <p className="text-brown text-xl leading-relaxed mb-6">
            Modern leadership. Local focus. Real results for every Rhode
            Islander.
          </p>

          <CommonButton className="text-xl"> JOIN THE MOVEMENT </CommonButton>
        </div>
      </div>
    </main>
  );
}
