
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const people = [
  {
    number: "01",
    category: "ARTISTS & STORYTELLERS",
    title: "Every art form has a voice.",
    description:
      "Meet the musicians and storytellers who keep India's cultural expressions alive through music, performance and oral traditions.",
    image: "/images/people-storyteller.png",
    imageAlt: "Indian folk musician and storyteller",
    region: "Across India",
  },
  {
    number: "02",
    category: "TRADITIONAL PERFORMERS",
    title: "Keepers of living traditions.",
    description:
      "Discover performers who bring India's classical and folk art forms to life through movement, music and expression.",
    image: "/images/people-performer.png",
    imageAlt: "Traditional Indian dance performer",
    region: "Performing arts",
  },
  {
    number: "03",
    category: "CULTURAL COMMUNITIES",
    title: "Heritage lives through people.",
    description:
      "Discover the communities that continue to celebrate, practise and share their traditions with future generations.",
    image: "/images/people-community.png",
    imageAlt: "Indian woman in traditional folk attire",
    region: "Local communities",
  },
  {
    number: "04",
    category: "MASTER ARTISANS",
    title: "Made by hand. Passed through generations.",
    description:
      "Meet skilled craftspeople preserving traditional knowledge through woodwork, pottery, textiles and handmade art.",
    image: "/images/people-artisan.png",
    imageAlt: "Indian master artisan carving a wooden sculpture",
    region: "Traditional crafts",
  },
];

export default function PeopleSection() {
  return (
    <section className="overflow-hidden bg-[#eee3c9] px-5 py-24 text-[#10271f] sm:px-8 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Introduction */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#bd4c2b]">
              <span className="h-px w-9 bg-[#bd4c2b]" />
              The people behind the culture
            </p>

            <h2 className="font-editorial text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Every tradition
              <br />
              has a{" "}
              <span className="italic text-[#bd4c2b]">
                human story.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#10271f]/70 lg:ml-auto">
            Behind every performance, craft and tradition are people
            who carry generations of knowledge. YOCHA celebrates their
            stories and brings their work closer to the world.
          </p>
        </div>

        {/* Portrait cards */}
        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-5">
          {people.map((person) => (
            <article key={person.number} className="group min-w-0">

              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#10271f]">
                <img
                  src={person.image}
                  alt={person.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07150e]/65 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.2em] text-[#d6b77a]">
                  {person.number}
                </span>

                <span className="absolute bottom-5 left-5 text-[9px] font-semibold tracking-[0.22em] text-[#f4efe4]">
                  {person.region.toUpperCase()}
                </span>
              </div>

              {/* Card content */}
              <div className="border-b border-[#10271f]/20 pb-7 pt-6">
                <p className="text-[9px] font-semibold tracking-[0.2em] text-[#bd4c2b]">
                  {person.category}
                </p>

                <h3 className="mt-4 font-editorial text-2xl leading-tight sm:text-3xl">
                  {person.title}
                </h3>

                <p className="mt-4 text-xs leading-7 text-[#10271f]/65">
                  {person.description}
                </p>

                <Link
                  href="/join"
                  className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#bd4c2b] transition-all hover:gap-4"
                >
                  Discover stories
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 flex flex-col justify-between gap-7 border-t border-[#10271f]/20 pt-9 sm:flex-row sm:items-center">
          <div>
            <p className="font-editorial text-3xl italic sm:text-4xl">
              Culture is not just what we see.
            </p>
            <p className="mt-2 text-sm text-[#10271f]/60">
              It is the people who keep it alive.
            </p>
          </div>

          <Link
            href="/join"
            className="inline-flex items-center gap-3 self-start bg-[#bd4c2b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.17em] text-white transition hover:bg-[#df642f] sm:self-auto"
          >
            Join the journey
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
