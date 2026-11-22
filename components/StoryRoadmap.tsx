
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const chapters = [
  {
    number: "01",
    label: "THE BEGINNING",
    title: "Every journey begins with a story.",
    description:
      "Discover the idea behind YOCHA — a journey to celebrate India's cultural diversity and bring its stories closer to the world.",
    image: "/images/roadmap-beginning.png",
    alt: "Indian cultural heritage",
  },
  {
    number: "02",
    label: "DISCOVER INDIA",
    title: "Explore the beauty of every region.",
    description:
      "From Kerala's backwaters to the mountains of the Himalayas, discover the places, traditions and identities that make India unique.",
    image: "/images/roadmap-discover-india.png",
    alt: "Indian cultural landscape",
  },
  {
    number: "03",
    label: "MEET THE PEOPLE",
    title: "Behind every tradition, there are people.",
    description:
      "Meet artists, artisans, storytellers and local communities who keep cultural traditions alive through generations.",
    image: "/images/roadmap-meet-people.png",
    alt: "Traditional Indian artisan",
  },
  {
    number: "04",
    label: "LIVE THE CULTURE",
    title: "Don't just see it. Experience it.",
    description:
      "Experience local festivals, traditional art forms, food, music and meaningful cultural encounters.",
    image: "/images/roadmap-live-culture.png",
    alt: "Indian cultural celebration",
  },
  {
    number: "05",
    label: "PRESERVE THE STORIES",
    title: "Keep heritage alive for tomorrow.",
    description:
      "Document cultural knowledge, celebrate local identities and help preserve traditions for future generations.",
    image: "/images/roadmap-preserve-stories.png",
    alt: "Indian heritage architecture",
  },
  {
    number: "06",
    label: "YOUR JOURNEY BEGINS",
    title: "Become part of the story.",
    description:
      "Join YOCHA and become part of a growing community that discovers, celebrates and shares India's cultural heritage.",
    image: "/images/roadmap-journey-begins.png",
    alt: "Traveller discovering Indian heritage",
  },
];

export default function StoryRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".roadmap-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("roadmap-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0b1c14] px-5 py-24 md:px-10 md:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#bd4c2b]/5 blur-[120px]" />

      {/* Heading */}
      <div className="roadmap-reveal relative z-10 mx-auto mb-20 max-w-3xl text-center md:mb-32">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#df642f]">
          THE YOCHA JOURNEY
        </p>

        <h2 className="font-editorial text-4xl leading-tight md:text-6xl lg:text-7xl">
          A journey through
          <span className="block italic text-[#d6b77a]">
            culture and stories.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#eee3c9]/65 md:text-base">
          Every destination has a story. Every tradition has a meaning.
          Follow the journey of discovering India's living cultural heritage.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-6xl">

        {/* Desktop center line */}
        <div className="absolute bottom-20 left-1/2 top-10 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d6b77a]/50 to-transparent md:block" />

        <div className="space-y-20 md:space-y-28">
          {chapters.map((chapter, index) => {
            const imageOnLeft = index % 2 === 1;

            return (
              <div
                key={chapter.number}
                className="roadmap-reveal relative grid items-center gap-7 md:grid-cols-[1fr_70px_1fr] md:gap-0"
              >
                {/* Image */}
                <div
                  className={`${
                    imageOnLeft
                      ? "md:col-start-1 md:row-start-1"
                      : "md:col-start-3 md:row-start-1"
                  }`}
                >
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#10271f]">
                    <img
                      src={chapter.image}
                      alt={chapter.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07150e]/65 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <span className="text-xs font-semibold tracking-[0.25em] text-white">
                        CHAPTER {chapter.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center number */}
                <div className="hidden items-center justify-center md:col-start-2 md:row-start-1 md:flex">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b77a]/60 bg-[#0b1c14]">
                    <span className="text-xs text-[#d6b77a]">
                      {chapter.number}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`${
                    imageOnLeft
                      ? "md:col-start-3 md:row-start-1"
                      : "md:col-start-1 md:row-start-1"
                  }`}
                >
                  <div className="rounded-2xl border border-white/10 bg-[#10271f]/70 p-7 transition duration-300 hover:border-[#d6b77a]/40 md:p-9">
                    <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-[#df642f]">
                      {chapter.label}
                    </p>

                    <h3 className="font-editorial text-3xl leading-tight text-[#f4efe4] md:text-4xl">
                      {chapter.title}
                    </h3>

                    <p className="mt-5 text-sm leading-8 text-[#eee3c9]/65 md:text-base">
                      {chapter.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <span className="h-px w-10 bg-[#d6b77a]/70" />
                      <span className="text-xs tracking-widest text-[#d6b77a]">
                        YOCHA JOURNEY
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Final CTA */}
      <div className="roadmap-reveal relative z-10 mx-auto mt-28 max-w-3xl text-center md:mt-40">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d6b77a]">
          THE STORY CONTINUES
        </p>

        <h3 className="font-editorial text-4xl leading-tight md:text-6xl">
          Your own cultural
          <span className="block italic text-[#df642f]">
            heritage adventure.
          </span>
        </h3>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#eee3c9]/65">
          Begin with Kerala. Discover India. Become part of the story.
        </p>

        <Link
          href="/explore"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#bd4c2b] px-8 py-4 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-[#df642f]"
        >
          Explore Kerala
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
