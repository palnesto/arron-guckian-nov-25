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
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left: photo */}
        <figure className="w-full lg:w-1/2 pr-2 lg:pr-0">
          <img
            src={photoSrc}
            alt={photoAlt}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Right: copy */}
        <div className="w-full lg:flex-1 px-2 lg:pl-2">
          <h2 className="text-3xl md:text-3xl font-semibold leading-snu g text-blue">
            A new era of
            <br className="md:hidden block" /> accountable, innovative, and
            local leadership
            <br />
            <span className="font-extrabold">Rhode Island stands</span>
          </h2>

          {/* Paragraph with blue strip */}
          <div className="mt-5 flex items-start gap-4">
            <span className="block h-24 md:h-28 w-1 rounded bg-blue-900 shrink-0" />
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
              <span className="italic">
                Aaron Guckian brings proven leadership in Government, Finance,
                Education, Non-profit and Healthcare; a deep respect for our
                state's heritage; and a forward-looking vision.
              </span>{" "}
              He's running to make Rhode Island leaner, stronger, and more
              business friendly—across all of our towns and neighborhoods.
            </p>
          </div>

          <div className="mt-6 w-32">
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
