
import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  BookOpen,
  Globe2,
} from "lucide-react";

const missions = [
  {
    number: "01",
    icon: Heart,
    title: "Celebrate",
    description:
      "Celebrate India's diverse traditions, art forms, communities and cultural identities.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Preserve",
    description:
      "Give traditional knowledge, stories and heritage a place in the digital world.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Connect",
    description:
      "Bring travellers, local communities, artists and culture enthusiasts closer together.",
  },
];

export default function MissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b1c14] px-5 py-24 text-[#f4efe4] sm:px-8 sm:py-32 lg:px-16">

      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d6b77a]">
              <span className="h-px w-9 bg-[#bd4c2b]" />
              Why YOCHA exists
            </p>

            <h2 className="font-editorial text-5xl leading-[1.12] sm:text-6xl lg:text-7xl">
              Culture deserves
              <br />
              more than
              <span className="block italic text-[#df642f]">
                to be remembered.
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:ml-auto">
            <p className="text-sm leading-8 text-[#eee3c9]/65 sm:text-base">
              India's cultural heritage lives in its people, traditions,
              languages, art, food and everyday stories. YOCHA exists
              to make these stories easier to discover, experience,
              document and share.
            </p>

            <p className="mt-5 font-editorial text-xl italic text-[#d6b77a]">
              Because every culture has a story worth sharing.
            </p>
          </div>
        </div>

        {/* Main visual */}
        <div className="relative mt-16 h-[360px] overflow-hidden sm:mt-20 sm:h-[480px] lg:h-[580px]">
          <img
            src="/images/yocha-mission.png"
            alt="A visual celebration of India's diverse cultural heritage"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07150e]/90 via-[#07150e]/10 to-transparent" />

          <div className="absolute bottom-7 left-6 max-w-2xl sm:bottom-12 sm:left-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d6b77a]">
              Our belief
            </p>

            <h3 className="mt-4 font-editorial text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Heritage is not just our past.
              <span className="block italic text-[#df642f]">
                It is our living identity.
              </span>
            </h3>
          </div>
        </div>

        {/* Mission pillars */}
        <div className="mt-16 grid gap-10 border-t border-[#eee3c9]/20 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {missions.map((mission) => {
            const Icon = mission.icon;

            return (
              <div key={mission.number} className="group">
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-sm italic text-[#d6b77a]">
                    {mission.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className="text-[#bd4c2b] transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-7 font-editorial text-3xl sm:text-4xl">
                  {mission.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#eee3c9]/60">
                  {mission.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col justify-between gap-7 border-t border-[#eee3c9]/20 pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-editorial text-3xl italic sm:text-4xl">
              Be part of something meaningful.
            </p>
            <p className="mt-2 text-sm text-[#eee3c9]/55">
              Help celebrate and share India's living heritage.
            </p>
          </div>

          <Link
            href="/join"
            className="inline-flex items-center gap-3 self-start bg-[#bd4c2b] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] transition hover:bg-[#df642f] sm:self-auto"
          >
            Join YOCHA
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
