
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

const experiences = [
  {
    number: "01",
    category: "CULTURAL EXPERIENCES",
    title: "Feel the living traditions.",
    description:
      "Discover traditional performances, rituals and cultural celebrations through meaningful experiences.",
    image: "/images/experience-traditional-arts.png",
    location: "Kerala & beyond",
  },
  {
    number: "02",
    category: "ART & CRAFT",
    title: "Learn from the masters.",
    description:
      "Meet local artisans, explore traditional crafts and experience the creativity behind India's heritage.",
    image: "/images/experience-art-craft.png",
    location: "Meet local communities",
  },
  {
    number: "03",
    category: "HERITAGE STAYS",
    title: "Stay closer to culture.",
    description:
      "Discover traditional homes, heritage architecture and stays rooted in local ways of life.",
    image: "/images/experience-heritage-stays.png",
    location: "Experience local living",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="overflow-hidden bg-[#10271f] px-5 py-24 text-[#f4efe4] sm:px-8 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d6b77a]">
              <span className="h-px w-9 bg-[#bd4c2b]" />
              Beyond ordinary travel
            </p>

            <h2 className="font-editorial text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Don't just visit.
              <br />
              <span className="italic text-[#df642f]">
                Experience culture.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-8 text-[#eee3c9]/65 lg:ml-auto">
            The most meaningful journeys happen when you connect
            with the people, traditions and stories of a place.
            Discover a different way to experience India with YOCHA.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="group flex flex-col border border-[#eee3c9]/15 bg-[#0b1c14]"
            >
              <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
                <img
                  src={experience.image}
                  alt={experience.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07150e]/65 to-transparent" />

                <span className="absolute left-6 top-6 text-xs tracking-[0.25em] text-[#d6b77a]">
                  {experience.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-[9px] font-semibold tracking-[0.3em] text-[#d6b77a]">
                  {experience.category}
                </p>

                <h3 className="mt-5 font-editorial text-3xl leading-tight">
                  {experience.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#eee3c9]/60">
                  {experience.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[#eee3c9]/15 pt-5">
                  <span className="text-[10px] tracking-wide text-[#eee3c9]/50">
                    {experience.location}
                  </span>

                  <Link
                    href="/events"
                    aria-label={`Explore ${experience.category}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6b77a]/50 text-[#d6b77a] transition hover:bg-[#bd4c2b] hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-7 border-t border-[#eee3c9]/20 pt-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b77a]/40 text-[#d6b77a]">
              <Compass size={22} />
            </div>

            <div>
              <p className="font-editorial text-2xl">
                Your next story awaits.
              </p>
              <p className="mt-1 text-xs text-[#eee3c9]/50">
                Discover the experiences of India.
              </p>
            </div>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-3 bg-[#bd4c2b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#df642f]"
          >
            Discover experiences
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
