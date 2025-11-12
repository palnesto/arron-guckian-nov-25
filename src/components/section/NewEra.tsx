// src/components/sections/NewEra.tsx
export function NewEra({
  photoSrc,
  photoAlt = "Providence skyline",
  signatureSrc = "/images/signature.png",
  signatureAlt = "Signature",
  className = "",
}) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left: photo */}
        <figure className="w-full lg:w-1/2 pr-2 lg:pr-0">
          <img
            src={photoSrc}
            alt={photoAlt}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Right: copy */}
        <div className="w-full lg:flex-1 px-2 lg:pl-2 pt-3">
          <h2 className="text-3xl md:text-3xl xl:text-[40px] font-semibold text-blue">
            <span>A new era of</span>
            <br className="md:hidden block" />{" "}
            <span> accountable, innovative, and</span>
            <span> local leadership</span>
            <br />
            <span>Rhode Island stands</span>
          </h2>

          {/* Paragraph with blue strip */}
          <div className="mt-5 lg:mt-10 flex items-start gap-4 border-l-4 border-blue">
            <p className="text-sm md:text-lg lg:text-2xl leading-relaxed pl-7 italic">
              Aaron Guckian brings proven leadership in Government, Finance,
              Education, Non-profit and Healthcare; a deep respect for our
              state's heritage; and a forward-looking vision. He's running to
              make Rhode Island leaner, stronger, and more business friendly
              across all of our towns and neighborhoods.
            </p>
          </div>

          <div className="mt-6 lg:mt-12 w-32 xl:w-40">
            <img
              src={signatureSrc}
              alt={signatureAlt}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
