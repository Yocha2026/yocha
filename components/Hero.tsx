
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[95svh] items-center overflow-hidden bg-[#0b1c14] pt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/yocha-home-hero.png"
          alt="Traditional Indian cultural performance"
          className="h-full w-full object-cover object-[65%_center]"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07150e] via-[#07150e]/80 to-[#07150e]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07150e] via-transparent to-[#07150e]/30" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#df642f]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#d6b77a] sm:text-xs">
              India's Living Cultural Heritage
            </p>
          </div>

          <h1 className="font-editorial text-5xl leading-[1.08] tracking-tight text-[#f4efe4] sm:text-7xl lg:text-8xl">
            Every culture
            <br />
            has a{" "}
            <span className="italic text-[#df642f]">story.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#eee3c9]/80 sm:text-lg">
            Discover the traditions, people, art and experiences that
            make India extraordinary. Every journey begins with a story.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center gap-3 bg-[#bd4c2b] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#df642f]"
            >
              Explore India
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 border border-[#eee3c9]/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4efe4] transition hover:border-[#d6b77a] hover:text-[#d6b77a]"
            >
              Discover YOCHA
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <p className="mt-12 text-xs tracking-wide text-[#eee3c9]/60">
            Starting in Kerala. Connecting cultures across India.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[#eee3c9]/60 sm:flex">
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll to discover
        </span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
