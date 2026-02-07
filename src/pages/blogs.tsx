import { motion } from "framer-motion";
import { CommonButton } from "../components/common/CommonButton";
import { ArrowLeft } from "lucide-react";
import bottom from "../assets/newera.png";
import blog from "@/assets/blog.png";
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function ArticleUIExact() {
  return (
    <div className="min-h-screen px-4 lg:px-20 py-16 space-y-16">
      <motion.article
        initial="hidden"
        animate="show"
        className="space-y-7 lg:space-y-12"
      >
        <div className="max-w-5xl space-y-7">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3"
          >
            <a
              href="/"
              className="bg-[#EEEFF133]  rounded-3xl px-4 py-1 focus:bg-[#EEEFF133] hover:bg-neutral-300 border border-[#EAECF0] shadow-inner backdrop-blur-lg text-black"
            >
              <ArrowLeft className="h-7 w-7" />
            </a>
            {/* <CommonButton showArrow={false} className="rounded-lg">
              Public Policy &amp; Governance
            </CommonButton> */}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-4 text-3xl md:text-4xl font-semibold leading-normal tracking-tight text-neutral-900"
          >
            Rhode Island Works Smarter: A BIG Reset for a State That&apos;s
            Ready to Move Forward
          </motion.h1>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-4 flex items-center gap-2 text-lg text-neutral-600"
          >
            {/* <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="overflow-hidden rounded-full h-7 w-7"
            >
              <motion.img
                src={bottom}
                alt="Hero"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </motion.div> */}
            <div className="flex flex-wrap items-center gap-x-2">
              <span className="text-xl font-medium text-neutral-800">
                Aaron Guckian
              </span>
              <span className="text-neutral-400">•</span>
              <span>February 07, 2026</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="overflow-hidden rounded-xl h-96 md:h-[30rem]"
        >
          <motion.img
            src={blog}
            alt="Hero"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.18 }}
          className=""
        >
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl space-y-2 bg-[#F6F6F7] px-7 py-10 ring-1 ring-black/5 border-l-4 border-l-[#E8E8EA] text-center italic font-serif"
          >
            <p className="text-3xl font-semibold text-neutral-700">
              “Rhode Island needs a reset.”
            </p>
            <p className="text-2xl leading-relaxed text-neutral-700">
              Not a slogan. Not another study. A real, practical reset in how
              government works for workers, taxpayers, small businesses, and the
              broader business community that keeps our state moving.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="text-2xl md:text-3xl text-[#3B3C4A] leading-snug"
        >
          <p>
            That&apos;s why I&apos;m launching Rhode Island Works Smarter, a
            core pillar of what I call the BIG Rhode Island Reset.
          </p>

          <p>
            This plan is about modernizing government from within by empowering
            the people who know the system best, our frontline and union
            workers.
          </p>
        </motion.div>
      </motion.article>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.45, delay: 0.26 }}
        className="space-y-16"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">
            Fixing Government From the Inside Out
          </h2>

          <div className="text-2xl md:text-3xl text-[#3B3C4A] leading-snug">
            <p>
              For too long, Rhode Island has relied on outside consultants to
              diagnose problems that state employees already understand
              firsthand.
            </p>
            <p>Rhode Island Works Smarter flips that model.</p>
            <p>
              Cross-department teams of state employees will be empowered to:
            </p>

            <ul className="list-disc pl-10 space-y-3 py-4">
              <li>Streamline permitting</li>
              <li>Improve service delivery</li>
              <li>Strengthen how Rhode Island manages revenue</li>
            </ul>

            <p>
              When those improvements generate verified savings, those savings
              will be shared.
            </p>
            <p>
              Frontline and union workers will receive negotiated salary,
              benefit, or pension enhancements.
            </p>
            <p>
              Taxpayers, small businesses, and the business community will see
              lower taxes, reduced fees, and stronger statewide funds, including
              expanded healthcare loan-repayment programs.
            </p>
            <p>
              This isn&apos;t about cutting jobs. It&apos;s about fixing
              systems.
            </p>
            <p>
              All jobs will be protected. As workers retire, job descriptions
              will be updated through union negotiation so Rhode Island can move
              into the new economy without fear or disruption.
            </p>
            <p>
              We&apos;ll take a crawl, walk, run approach, with clear benchmarks
              in the first year. Small wins will build into big wins, brick by
              brick.
            </p>
            <p>Our workers are our greatest asset.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">
            Why This Reset Is Urgent
          </h2>

          <div className="text-2xl md:text-3xl text-[#3B3C4A] leading-snug">
            <p>Rhode Island&apos;s budget growth has gone too far.</p>
            <p>
              The state budget increased from $9.3 billion in 2019 to more than
              $14 billion between 2024 and 2026, nearly 50 percent growth in
              five years, even as federal COVID relief dollars are expiring.
            </p>
            <p>
              That kind of growth simply isn&apos;t sustainable for taxpayers or
              small businesses.
            </p>
            <p>
              Every state faced pandemic pressures, but Rhode Island made a
              critical mistake. We built permanent commitments on temporary
              federal money.
            </p>
            <p>
              States like Vermont, Massachusetts, and New Hampshire managed this
              responsibly. We didn&apos;t.
            </p>
            <p>
              We didn&apos;t just spend the relief money. We baked it into the
              base budget. Now taxpayers and small businesses are being asked to
              fund programs that were never meant to last.
            </p>
            <p>That&apos;s not leadership. That&apos;s a warning sign.</p>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.02 }}
          className="overflow-hidden rounded-xl h-80 md:h-[30rem]"
        >
          <img
            src={bottom}
            alt="Rhode Island"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.45, delay: 0.3 }}
        className="mt-14 space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-neutral-900">
            When the System Loses Direction, Everyone Pays
          </h2>

          <div className="text-2xl md:text-3xl text-[#3B3C4A] leading-snug">
            <p>
              A 7 percent tax on parking tells you everything you need to know.
            </p>
            <p>
              The system is broken. Leadership lost direction. Rhode Islanders
              are paying the price.
            </p>
            <p>It&apos;s gone too far.</p>
            <p>
              Rhode Island Works Smarter is about restoring discipline, trust,
              and common sense, while protecting workers and respecting the
              people who fund government in the first place.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-neutral-900">
            A State That&apos;s Open for Business Again
          </h2>

          <div className="text-2xl md:text-3xl text-[#3B3C4A] leading-snug">
            <p>Rhode Island must restore its competitive standing.</p>
            <p>
              We will foster a business-friendly environment that sends a clear
              message to employers, innovators, small businesses, and the entire
              business community: Rhode Island is open for business and ready to
              compete.
            </p>
            <p>When government works smarter, everyone wins.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-neutral-900">
            Building Momentum Statewide
          </h2>

          <div className="text-2xl md:text-3xl text-[#3B3C4A] leading-snug">
            <p>Success creates momentum.</p>
            <p>
              Once people see results at the state level, cities and towns will
              want to participate. We&apos;ll encourage municipalities to adopt
              the same model so communities across Rhode Island, including local
              businesses, can share in the savings and the progress.
            </p>
            <p>
              This is how trust gets rebuilt, through results people can see and
              feel.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-neutral-900">
            A Reset Moment for Rhode Island
          </h2>

          <div className="text-2xl md:text-3xl text-[#3B3C4A] leading-snug">
            <p>This is Rhode Island&apos;s reset moment.</p>
            <p>
              If we modernize now, we can rise together and pivot into the new
              economy with confidence. We&apos;ll focus on what we can do, not
              what we can&apos;t.
            </p>
            <p>
              You can complain about the system, or you can get organized to fix
              it.
            </p>
            <p>We choose to get organized.</p>
            <p>
              I&apos;m going to lead with logic and bring back opportunity, one
              big idea at a time.
            </p>
            <p>We need to think BIG and act BIG.</p>
            <p>Big change. Big momentum. Big opportunity.</p>
            <p>
              Rhode Island Works Smarter, as part of the BIG Rhode Island Reset,
              is about lowering costs, improving services, rebuilding trust,
              restoring affordability, and making Rhode Island a place where
              workers, taxpayers, small businesses, and the business community
              can thrive again.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
