import { useCallback, useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import flag from "../../assets/flag.png"
import m22 from "../../assets/marquee/m22.jpeg";
import m21 from "../../assets/marquee/m26.jpg";
import m20 from "../../assets/marquee/m3.png";
import m19 from "../../assets/marquee/m1.jpeg";
import m18 from "../../assets/marquee/m8.jpg";
import m17 from "../../assets/marquee/m27.jpeg";
import m16 from "../../assets/marquee/m2.png";

const GALLERY: { src: string; fileName: string; alt: string }[] = [
  { src: m22, fileName: "m22.jpeg", alt: "Campaign event — Attorney General office" },
  { src: m21, fileName: "m21.jpeg", alt: "Campaign photo" },
  { src: m20, fileName: "m20.jpeg", alt: "Campaign photo" },
  { src: m19, fileName: "m19.jpg", alt: "Campaign photo" },
  { src: m18, fileName: "m18.jpg", alt: "Campaign photo" },
  { src: m17, fileName: "m17.jpg", alt: "Campaign photo" },
  { src: m16, fileName: "m16.jpg", alt: "Campaign photo" },
];

const DONATE_URL =
  "https://secure.winred.com/friends-of-aaron-guckian-0394772f/donate";

const BePart = () => {
  return (
    <section className="mx-4 lg:mx-0 mb-4 relative flex min-h-[280px] font-lufga items-center justify-center overflow-hidden rounded-2xl lg:rounded-none lg:min-h-[300px]"> 
      <img
        src={flag}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-bottom rotate-180"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[#6B0D17E0]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-8xl flex-col items-center gap-4 px-6 py-12 text-center md:gap-5 md:py-16">
        <h2 className="font-lufga font-bold text-white text-4xl lg:text-6xl xl:text-7xl">
        Ready to make a Difference?
        </h2>
        <p className="max-w-5xl text-base text-white/80 md:text-2xl xl:text-3xl">
        Your contribution - any amount - puts us one step closer to the change Rhode Island needs.
        </p>
        <a
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase text-brown transition-opacity hover:opacity-90 md:text-base"
        >
          DONATE NOW
        </a>
      </div> 
  </section>
  );
};


async function downloadImage(url: string, fileName: string) {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);
  } catch {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

function GalleryCell({
  src,
  fileName,
  alt,
  featured,
  onOpen,
}: {
  src: string;
  fileName: string;
  alt: string;
  featured: boolean;
  onOpen: () => void;
}) {
  const onDownload = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      void downloadImage(src, fileName);
    },
    [src, fileName]
  );

  return (
    <div
      className={`group relative overflow-hidden rounded-xl md:rounded-[10px] ${
        featured
          ? "col-span-2 row-span-2 min-h-[240px] h-full"
          : "col-span-1 row-span-1"
      } `}
    >
      <div
        role="button"
        tabIndex={0}
        className={`relative h-full min-h-0 w-full cursor-pointer bg-neutral-100 outline-none ring-brown focus-visible:ring-2 ${
          featured ? "min-h-[220px] lg:min-h-0" : "aspect-square"
        } `}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>

      <button
        type="button"
        onClick={onDownload}
        className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white opacity-0 shadow-md backdrop-blur-sm transition hover:bg-black/60 group-hover:opacity-100 md:bottom-4 md:right-4 xl:h-11 xl:w-28 border-l-[0.2px] border-t-[0.2px] border-white"
        aria-label={`Download ${fileName}`}
      >
        <Download className="h-5 w-5" strokeWidth={2} />
      </button>
    </div>
  );
}

export default function GroundGallery() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  return (
    <>
     <section className="my-14 px-4 lg:px-14">
      <h2 className="mb-8 text-center font-lufga text-3xl font-bold text-[#701018] md:mb-10 md:text-4xl">
        On the Ground Across Rhode Island
      </h2>

      <div className="mx-auto grid max-w-[1400px] grid-cols-2 auto-rows-[minmax(130px,22vw)] gap-3 md:gap-4 lg:grid-cols-4 lg:auto-rows-[minmax(150px,14vw)] lg:gap-5">
        {GALLERY.map((item, i) => (
          <GalleryCell
            key={item.fileName}
            src={item.src}
            fileName={item.fileName}
            alt={item.alt}
            featured={i === 0}
            onOpen={() =>
              setLightbox({ src: item.src, alt: item.alt })
            }
          />
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-[101] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(null);
            }}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
    <BePart />
    </>
  );
}