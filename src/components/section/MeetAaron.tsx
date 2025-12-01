import m1 from "../../assets/marquee/m1.jpeg";
import m2 from "../../assets/marquee/m2.png";
import m3 from "../../assets/marquee/m3.png";
import m4 from "../../assets/marquee/m4.jpeg";
import m5 from "../../assets/marquee/m5.png";
import m6 from "../../assets/marquee/m6.png";
// import m7 from "../../assets/marquee/m17.jpg";
// import m8 from "../../assets/marquee/m8.jpeg";
// import m9 from "../../assets/marquee/m9.jpeg";
import m10 from "../../assets/marquee/m10.png";
import m11 from "../../assets/marquee/m11.jpg";
import m12 from "../../assets/marquee/m12.jpg";
import m13 from "../../assets/marquee/m13.jpg";
import m14 from "../../assets/marquee/m14.jpg";
import m15 from "../../assets/marquee/m15.jpg";
import m16 from "../../assets/marquee/m16.jpg";
import m17 from "../../assets/marquee/m17.jpg";
import m18 from "../../assets/marquee/m18.jpg";
import m19 from "../../assets/marquee/m19.jpg";
import m20 from "../../assets/marquee/m20.jpeg";
import m21 from "../../assets/marquee/m21.jpeg";
import m22 from "../../assets/marquee/m22.jpeg";
import { CommonButton } from "../common/CommonButton";
import governor from "../../assets/aaron.png";
import { useState } from "react";
// import m23 from "../../assets/marquee/m23.jpeg";
// import m24 from "../../assets/marquee/m2";
// import m25 from "../../assets/marquee/m25.jpeg";

export default function MeetAaron({ images = defaultImages }) {
  const [openPopup, setOpenPopup] = useState<null | "about" | "why">(null);
  const popupContent = {
    about: (
      <>
        <h2 className="text-3xl font-bold mb-4">Meet Aaron</h2>

        <p className=" ">
          Aaron Guckian is a lifelong Rhode Islander with deep roots in the
          Ocean State. Raised in East Greenwich by parents who were high-school
          sweethearts at Hope High School — a Local 51 union plumber and a
          respiratory therapist — he grew up in a family defined by hard work,
          service, and community. He and his wife, Debbie, a retired college
          professor and La Salle Academy graduate, are raising three daughters:
          Lauren, a college student, and Emma and Nuala, who attend East
          Greenwich High School.
        </p>
        <p>
          Aaron’s career spans public service, teaching, nonprofit leadership,
          and banking. He began his career as a public school music teacher in
          North Kingstown before serving two terms as Special Assistant to
          Governor Donald L. Carcieri. He later worked in banking as a branch
          sales manager, business banker, and vice president, helping small
          businesses and local families navigate a changing economy. Aaron then
          joined the Rhode Island Foundation as a Development Officer,
          supporting statewide initiatives and community partnerships. Most
          recently, he served as Executive Director of the Rhode Island Dental
          Association, becoming a leading advocate for oral health access and
          innovation and helping drive major improvements in children’s dental
          care and Medicaid reimbursement.
        </p>
        <p>
          Aaron was the Republican nominee for Lieutenant Governor in the 2022
          statewide election. He received his bachelor’s degree from Connecticut
          College, a M.A. from Rhode Island College, and an M.B.A. from Johnson
          & Wales University. A lifelong resident of East Greenwich, he is
          running for Governor to ensure Rhode Island works smarter, supports
          working families and small businesses, and gives every child the
          chance to build a future right here at home.
        </p>
      </>
    ),
    why: (
      <>
        <h2 className="text-3xl font-bold mb-4">Why I'm Running</h2>
        <p className="text-lg leading-relaxed">
          Rhode Island is my home. I’m running for Governor because our state
          has too many taxes, too many fees, and not enough opportunity for
          families who are working harder than ever. Rhode Islanders don’t ask
          for much — just a fair shot, a government that makes life easier
          instead of harder, and a future where their kids can afford to stay
          here. I believe Rhode Island can work smarter, grow stronger, and
          finally give people real opportunity to build their lives right here
          in the place we all call home.
        </p>
      </>
    ),
  };

  // split images into 4 fairly even columns
  const cols = [[], [], [], []];
  images.forEach((src, i) => cols[i % 4].push(src));

  return (
    <section className="px-4 bg-[#F2F4F7]">
      <div className="grid lg:grid-cols-12 gap-8 items-start font-medium">
        {/* LEFT: copy */}
        <div className="lg:col-span-4 py-12 md:py-16 space-y-7 text-center lg:text-left">
          <h2 className="text-5xl 2xl:text-7xl">
            <span className="text-blue">Meet </span>
            <span className="text-brown">Aaron..</span>
          </h2>
          <p className="text-2xl">
            Aaron Guckian is a lifelong Rhode Islander, educator, public
            servant, and community leader with deep roots in East Greenwich.
            With experience in government, banking, nonprofits, and statewide
            advocacy, he’s running for Governor to make Rhode Island more
            affordable, efficient, and full of opportunity for working families.
          </p>
          <CommonButton
            className="py-7 md:py-9 text-2xl"
            onClick={() => setOpenPopup("about")}
          >
            ABOUT AARON
          </CommonButton>

          <CommonButton
            className="py-7 md:py-9 text-2xl bg-blue hover:bg-blue/80"
            onClick={() => setOpenPopup("why")}
          >
            WHY I'M RUNNING
          </CommonButton>

          {/* <p className="mt-2 text-[#344054] text-lg 2xl:text-3xl">
            Lifelong Rhode Islander, East Greenwich roots
          </p> */}

          {/* <ul className="mt-6 space-y-4 text-lg md:text-2xl 2xl:text-3xl">
            {[
              "Nationally seasoned bass-baritone performer",
              "MBA, Johnson & Wales (2017)",
              "Service leader at Rhode Island Foundation",
              "Dad of three; family-first focus",
              "Former executive director of the RI dental association",
              "Former NCAA athlete",
            ].map((t) => (
              <li key={t} className="flex items- gap-3">
                <span className="mt-2 inline-flex h-5 w-5 2xl:h-7 2xl:w-7 shrink-0 items-center justify-center rounded-md bg-brown">
                  <svg
                    viewBox="0 0 20 20"
                    fill="white"
                    className="h-3.5 w-3.5 2xl:h-5 2xl:w-5"
                  >
                    <path d="M7.5 13.1 4.9 10.5l-1.4 1.4 4 4 9-9-1.4-1.4-7.6 7.6Z" />
                  </svg>
                </span>
                <span className=" ">{t}</span>
              </li>
            ))}
          </ul> */}
        </div>

        <div className="lg:col-span-8 relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent hidden lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent hidden lg:block" />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <MarqueeColumn images={cols[0]} direction="up" />

            <MarqueeColumn images={cols[1]} direction="down" />

            <MarqueeColumn images={cols[2]} direction="up" />

            <MarqueeColumn images={cols[3]} direction="down" />
          </div>
        </div>
      </div>

      {openPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl max-w-4xl w-full relative shadow-xl overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 rounded-full bg-brown text-white w-8 h-8 flex items-center justify-center"
              onClick={() => setOpenPopup(null)}
            >
              X
            </button>

            <div className="flex flex-col md:flex-row max-h-[80vh] overflow-y-auto md:overflow-hidden">
              {/* LEFT: image (fixed on desktop) */}
              <figure className="w-full md:w-1/2 shrink-0 flex items-end justify-between">
                <img
                  src={governor}
                  alt="Aaron Guckian"
                  className="w-full h-auto max-h-[50vh] md:max-h-[70vh] object-contain"
                />
              </figure>

              {/* RIGHT: text */}
              <section className="w-full md:w-1/2 p-6 space-y-3 md:overflow-y-auto">
                {popupContent[openPopup]}
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/** Single column that loops images vertically by duplicating the stack */
function MarqueeColumn({ images, direction = "up", speed = 10 }) {
  // duplicate images to make a seamless loop
  const stack = [...images, ...images];
  return (
    <div className="relative overflow-hidden h-[520px] md:h-[640px]">
      <div
        className={direction === "up" ? "marquee-up" : "marquee-down"}
        style={{ "--dur": `${speed}s` }}
      >
        <div className="flex flex-col gap-4">
          {stack.map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt=""
              className="w-full rounded-xl object-cover h-40 md:h-48"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const defaultImages = [
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  // m7,
  // m8,
  // m9,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
  m18,
  m19,
  m20,
  m21,
  m22,
  // m23,
  // m24,
  // m25,
];
