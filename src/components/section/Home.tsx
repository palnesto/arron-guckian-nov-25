import bg from "../../assets/herobg.png";
import governor from "../../assets/governor.png";
import { CommonButton } from "../common/CommonButton";

export default function Home() {
  return (
    <main className="py-7">
      <div className="hidden lg:flex lg:flex-row gap-32">
        {/* Left Content Section */}
        <div className="w-1/3 pl-6 xl:pl-12 lg:py-16">
          <p className="text-xl font-bold tracking-wider uppercase text-brown mb-6">
            A NEW COURSE FOR THE OCEAN STATE
          </p>

          <h1 className="mb-8">
            <span className="block text-5xl xl:text-6xl font-bold text-brown leading-tight mb-2">
              Rhode Island
            </span>
            <span className="block text-5xl xl:text-6xl font-bold text-blue leading-tight">
              Rises Together
            </span>
          </h1>

          <CommonButton> JOIN THE MOVEMENT </CommonButton>

          <p className="text-brown text-2xl leading-relaxed max-w-md font-semibold pt-4">
            Modern leadership. Local focus. Real results for every Rhode
            Islander.
          </p>
        </div>

        {/* Right Image Section - Layered Images */}
        <div className="lg:w-2/3 relative min-h-[700px]">
          {/* Background lighthouse image */}
          <div className="absolute inset-0">
            <img
              src={bg}
              alt="Lighthouse background"
              className="w-full h-full"
            />
          </div>

          {/* Foreground man cutout - positioned on left side of lighthouse image */}
          <div className="absolute inset-0 flex items-end">
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
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Top Content Section */}
        <div className="px-6 pt-8 pb-6">
          <p className="text-[10px] font-medium tracking-wider uppercase text-gray-600 mb-4">
            A NEW COURSE FOR THE OCEAN STATE
          </p>

          <h1 className="mb-0">
            <span className="block text-4xl font-bold text-brown leading-tight mb-1">
              Rhode Island
            </span>
            <span className="block text-4xl font-bold text-blue leading-tight">
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
          <div className="absolute inset-0 flex items-end justify-start -pl-10">
            <img
              src={governor}
              alt="Political candidate"
              className="h-full w-auto object-contain object-bottom"
              style={{ maxHeight: "100%" }}
            />
          </div>
        </div>

        {/* Bottom Content Section */}
        <div className="px-6 py-8">
          <p className="text-brown text-sm leading-relaxed mb-6">
            Modern leadership. Local focus. Real results for every Rhode
            Islander.
          </p>

          <CommonButton> JOIN THE MOVEMENT </CommonButton>
        </div>
      </div>
    </main>
  );
}
