import pillar from "../../assets/pillar.png";
import p from "../../assets/p.png";
const PILLARS = [
  {
    badge: p,
    title: "Making Our State Affordable Again",
    body: "Aaron will take immediate action to lower the cost of living, expanding housing options, reducing barriers to construction, lowering utility expenses, and working to rein in healthcare costs. “Families shouldn’t have to choose between paying rent and buying groceries.” ",
  },
  {
    badge: p,
    title: "Rebuilding Education and Preparing the Workforce of the Future",
    body: "The campaign will prioritize investments in public schools, teacher support, and career-ready pathways, including vocational training, technical programs, and partnerships with local employers. “Our students deserve a world-class education—and our employers deserve a workforce ready to compete.” ",
  },
  {
    badge: p,
    title: "Fixing Rhode Island’s Broken Healthcare System",
    body: "Aaron will take on one of the state’s most urgent crises: the lack of primary care physicians, dentists, and essential healthcare providers. His plan includes expanding training pipelines, offering incentives to attract and retain providers, cutting red tape, and ensuring Rhode Islanders can access quality care without long waits or high costs. “It shouldn’t take months to see a doctor or dentist. Healthcare must be accessible, affordable, and reliable.”",
  },
  {
    badge: p,
    title: "Lowering Taxes and Fees for Working Families",
    body: "The plan includes targeted tax relief, reducing hidden fees, and cutting wasteful government spending. “We will put money back where it belongs—in the pockets of hardworking families.”",
  },
  {
    badge: p,
    title: "Holding State Government Accountable",
    body: "Aaron pledged to restore transparency, eliminate mismanagement, and ensure every tax dollar is spent responsibly. “Government must work for the people—not the other way around.”",
  },
];

export function FivePillars() {
  return (
    <section className="bg-white text-black py-12">
      <div className="mx-auto max-w-full grid gap-10 lg:gap-32 lg:grid-cols-[1.1fr,2fr] px-4 xl:px-10 2xl:px-32 ">
        {/* LEFT: Pillar + big 5 */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-3xl md:text-[40px] 2xl:text-[45px] text-[#0D0D0D] font-extrabold">
            The Five Pillars
          </h2>
          <p className="lg:hidden text-xl md:text-2xl text-center font-bold text-[#B60000]">
            Our roadmap is clear. Here’s how we’ll get there.
          </p>

          <img
            src={pillar}
            alt="Pillar illustration"
            className="h-[400px] lg:h-[800px] xl:h-[1100px] object-cover"
          />
        </div>

        {/* RIGHT: Roadmap list */}
        <div className="space-y-6">
          <p className=" hidden lg:block text-lg 2xl:text-xl font-bold text-[#B60000] uppercase tracking-wide">
            Our roadmap is clear. Here’s how we’ll get there.
          </p>

          <div className="relative">
            {/* vertical line behind circles */}

            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="relative flex gap-4 pb-10 last:pb-0 z-20 "
              >
                {/* circle badge */}
                <div className="relative w-[4rem] h-14 font-bold text-white z-50">
                  <img
                    src={pillar.badge}
                    alt={`Pillar ${index + 1}`}
                    className="absolute left-0 lg:-left-2 top-0 w-14 h-14"
                  />
                  <p className="absolute top-0 left-1 lg:left-0 text-lg md:text-2xl">
                    {index + 1}
                  </p>
                </div>
                {/* text */}
                <div className="w-[90%] relative">
                  {index !== PILLARS.length - 1 && (
                    <div className="absolute -left-11 md:-left-[3.3rem] lg:-left-[3.7rem] top-14 -bottom-10 border-l-2  border-[#B60000]" />
                  )}
                  <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold pb-1">
                    {pillar.title}
                  </h3>
                  <p className="md:text-lg 2xl:text-xl max-w-xl font-lufg">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="text-center font-lufga text-2xl md:text-3xl pt-32 max-w-7xl mx-auto px-1">
        <b>
          “Together, we can build a future where people can afford to live,
          work, and raise a family,”
        </b>
        <br />
        Guckian said.
        <br />
        <b>
          “A future where our economy is booming, schools thrive, our
          communities are safe, and our government finally delivers results.”
        </b>
      </section>
    </section>
  );
}
