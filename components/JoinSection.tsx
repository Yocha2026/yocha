
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Camera,
  Palette,
  Users,
} from "lucide-react";

const communities = [
  {
    icon: Compass,
    title: "Explore",
    description: "Discover places, traditions and meaningful cultural experiences.",
  },
  {
    icon: Camera,
    title: "Share stories",
    description: "Capture and share the cultures, people and places you discover.",
  },
  {
    icon: Palette,
    title: "Create",
    description: "Showcase your art, craft, performances and traditional knowledge.",
  },
  {
    icon: Users,
    title: "Connect",
    description: "Become part of a community that celebrates cultural heritage.",
  },
];

export default function JoinSection() {
  return (
    <section className="relative overflow-hidden bg-[#eee3c9] px-5 py-24 text-[#10271f] sm:px-8 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Main invitation */}
        <div className="relative overflow-hidden bg-[#10271f] px-6 py-20 text-center text-[#f4efe4] sm:px-12 sm:py-28 lg:px-20">

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d6b77a]/15" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#d6b77a]/15" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-[#d6b77a]/15" />

          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#d6b77a]">
              Your story. Our journey.
            </p>

            <h2 className="font-editorial text-5xl leading-tight sm:text-6xl lg:text-8xl">
              The journey is
              <span className="block italic text-[#df642f]">
                better together.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#eee3c9]/65 sm:text-base">
              Culture connects us in ways words cannot explain.
              Come explore, create, share and celebrate the stories
              that make India extraordinary.
            </p>

            <Link
              href="/join"
              className="mt-10 inline-flex items-center gap-3 bg-[#bd4c2b] px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#df642f]"
            >
              Become part of YOCHA
              <ArrowUpRight size={18} />
            </Link>

            <p className="mt-6 text-[10px] tracking-[0.15em] text-[#eee3c9]/40">
              EXPERIENCE INDIA. PRESERVE ITS HERITAGE.
            </p>
          </div>
        </div>

        {/* Ways to participate */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {communities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="border-t border-[#10271f]/25 pt-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-sm italic text-[#bd4c2b]">
                    0{index + 1}
                  </span>

                  <Icon size={23} strokeWidth={1.4} />
                </div>

                <h3 className="mt-7 font-editorial text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-[#10271f]/65">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
