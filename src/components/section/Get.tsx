// import bg from "../../assets/get.png";
// export default function Get({
//   bgSrc = bg,
//   title = "Get involved in the sea of change...",
//   signUpHref = "/signup",
//   joinHref = "/join",
//   donateHref = "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate",
// }) {
//   return (
//     <section className="my-10 px-4 lg:px-10">
//       <div className="h-[420px] md:h-[280px] lg:h-[400px] relative overflow-hidden rounded-[30px]">
//         <img src={bgSrc} alt="" className="absolute inset-0 h-full w-full" />
//         {/* overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#5e0b0b]/95 via-[#5e0b0b]/80 to-black/50" /> */}

//         {/* content */}
//         <div className="relative z-10 flex h-full flex-col items-center justify-evenly px-4 py-8 md:py-10">
//           <h2 className="text-center text-white font-semibold leading-tight text-2xl md:text-4xl lg:text-7xl">
//             {title}
//           </h2>

//           <div className="mt-6 flex flex-col gap-4 md:flex-row justify-around w-full">
//             <a
//               href={signUpHref}
//               className="inline-flex items-center justify-center rounded-full bg-white  px-6 py-3 lg:py-4 lg:px-7 lg:text-xl font-semibold text-[#5e0b0b] shadow-sm hover:shadow lg:w-fit"
//             >
//               SIGN UP NOW
//             </a>
//             <a
//               href={joinHref}
//               className="inline-flex items-center justify-center rounded-full bg-white  px-6 py-3 lg:py-4 lg:px-7 lg:text-xl font-semibold text-[#5e0b0b] shadow-sm hover:shadow lg:w-fit"
//             >
//               JOIN THE MOVEMENT
//             </a>
//             <a
//               href={donateHref}
//               target="_blank"
//               className="inline-flex items-center justify-center rounded-full bg-white  px-6 py-3 lg:py-4 lg:px-7 lg:text-xl font-semibold text-[#5e0b0b] shadow-sm hover:shadow lg:w-fit"
//             >
//               DONATE
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import bg from "../../assets/get.png";
import SignUpNowModal from "../modal/SignUpNowModal";
import JoinMovementModal from "../modal/JoinMovementModal";

export default function Get({
  bgSrc = bg,
  title = "Get involved in the sea of change...",
  donateHref = "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate",
}) {
  const [openSignup, setOpenSignup] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);

  return (
    <>
      <section className="my-10 px-4 lg:px-10">
        <div className="h-[420px] md:h-[280px] lg:h-[400px] relative overflow-hidden rounded-[30px]">
          <img
            src={bgSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-evenly px-4 py-8 md:py-10">
            <h2 className="text-center text-white font-semibold leading-tight text-2xl md:text-4xl lg:text-7xl">
              {title}
            </h2>

            <div className="mt-6 flex flex-col gap-4 md:flex-row justify-around w-full">
              <button
                onClick={() => setOpenSignup(true)}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 lg:py-4 lg:px-7 lg:text-xl font-semibold text-[#5e0b0b] shadow-sm hover:shadow lg:w-fit"
              >
                SIGN UP NOW
              </button>

              <button
                onClick={() => setOpenJoin(true)}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 lg:py-4 lg:px-7 lg:text-xl font-semibold text-[#5e0b0b] shadow-sm hover:shadow lg:w-fit"
              >
                JOIN THE MOVEMENT
              </button>

              <a
                href={donateHref}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 lg:py-4 lg:px-7 lg:text-xl font-semibold text-[#5e0b0b] shadow-sm hover:shadow lg:w-fit"
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </section>

      <SignUpNowModal
        isOpen={openSignup}
        onClose={() => setOpenSignup(false)}
      />
      <JoinMovementModal isOpen={openJoin} onClose={() => setOpenJoin(false)} />
    </>
  );
}
