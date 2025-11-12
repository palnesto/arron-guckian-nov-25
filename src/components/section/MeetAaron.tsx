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
// import m23 from "../../assets/marquee/m23.jpeg";
// import m24 from "../../assets/marquee/m2";
// import m25 from "../../assets/marquee/m25.jpeg";

export default function MeetAaron({ images = defaultImages }) {
  // split images into 4 fairly even columns
  const cols = [[], [], [], []];
  images.forEach((src, i) => cols[i % 4].push(src));

  return (
    <section className="px-5 bg-[#F2F4F7]">
      <div className="grid lg:grid-cols-12 gap-8 items-start font-medium">
        {/* LEFT: copy */}
        <div className="lg:col-span-4 py-12 md:py-16">
          <h2 className="text-5xl 2xl:text-7xl leading-tight">
            <span className="text-blue">Meet </span>
            <span className="text-brown">Aaron..</span>
          </h2>
          <p className="mt-2 text-[#344054] text-lg 2xl:text-3xl">
            Lifelong Rhode Islander, East Greenwich roots
          </p>

          <ul className="mt-6 space-y-4 text-lg md:text-2xl 2xl:text-3xl">
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
          </ul>
        </div>

        <div className="lg:col-span-8 relative">
          {/* fade masks */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent hidden lg:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent hidden lg:block" />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {/* col 1 (up) */}
            <MarqueeColumn images={cols[0]} direction="up" />
            {/* col 2 (down) */}
            <MarqueeColumn images={cols[1]} direction="down" />
            {/* col 3 (up) */}
            <MarqueeColumn images={cols[2]} direction="up" />
            {/* col 4 (down) */}
            <MarqueeColumn images={cols[3]} direction="down" />
          </div>
        </div>
      </div>
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
