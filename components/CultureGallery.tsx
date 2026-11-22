
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cultures = [
  {
    number: "01",
    title: "Places & Landscapes",
    subtitle: "Discover the soul of every destination",
    image: "/images/discover-backwaters.png",
    layout: "wide",
  },
  {
    number: "02",
    title: "Traditional Arts",
    subtitle: "Where creativity becomes heritage",
    image: "/images/traditional-arts.png",
    layout: "normal",
  },
  {
    number: "03",
    title: "People & Craft",
    subtitle: "Meet the hands behind the traditions",
    image: "/images/meet-artisans.png",
    layout: "normal",
  },
  {
    number: "04",
    title: "Heritage Stays",
    subtitle: "Experience the beauty of living heritage",
    image: "/images/heritage-stays.png",
    layout: "normal",
  },
  {
    number: "05",
    title: "Festivals & Rituals",
    subtitle: "Feel the energy of living traditions",
    image: "/images/festivals.png",
    layout: "normal",
  },
  {
    number: "06",
    title: "Food & Traditions",
    subtitle: "Discover culture through every flavour",
    image: "/images/food-culture.png",
    layout: "banner",
  },
];

export default function CultureGallery() {
  return (
    <section className="overflow-hidden bg-[#eee3c9] px-5 py-20 text-[#10271f] sm:px-8 sm:py-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#bd4c2b]">
              Explore the extraordinary
            </p>

            <h2 className="font-editorial text-5xl leading-tight sm:text-6xl lg:text-7xl">
              India's culture.
              <br />
              <span className="italic text-[#bd4c2b]">
                Infinite stories.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#10271f]/65">
            From ancient traditions to everyday life, discover the
            cultural experiences that make every place unforgettable.
          </p>
        </div>

        {/* Responsive editorial gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

          {cultures.map((item) => (
            <Link
              href="/explore"
              key={item.number}
              className={`group relative isolate block overflow-hidden bg-[#10271f]
                ${
                  item.layout === "wide"
                    ? "sm:col-span-2 lg:col-span-2"
                    : ""
                }
                ${
                  item.layout === "banner"
                    ? "sm:col-span-2 lg:col-span-3"
                    : ""
                }
                ${
                  item.layout === "banner"
                    ? "h-[300px] sm:h-[360px] lg:h-[420px]"
                    : "h-[340px] sm:h-[360px] lg:h-[390px] xl:h-[430px]"
                }
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07150e]/95 via-[#07150e]/20 to-transparent transition-colors duration-500 group-hover:from-[#07150e]/90" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-9">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-[#d6b77a]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={21}
                    className="text-[#f4efe4] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="font-editorial text-3xl text-[#f4efe4] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs tracking-wide text-[#eee3c9]/75">
                  {item.subtitle}
                </p>
              </div>
            </Link>
          ))}

        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/explore"
            className="inline-flex items-center gap-3 border-b border-[#bd4c2b] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#bd4c2b] transition-all hover:gap-5"
          >
            Explore all cultures
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
