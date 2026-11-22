
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    number: "01",
    title: "Cultural Tourism",
    description:
      "Explore destinations through their traditions, festivals, stories and local cultural experiences.",
  },
  {
    number: "02",
    title: "Traditional Arts & Heritage",
    description:
      "Discover classical arts, folk performances, traditional crafts and India's living heritage.",
  },
  {
    number: "03",
    title: "Heritage Stays",
    description:
      "Experience traditional architecture, heritage homes and places connected to local culture.",
  },
  {
    number: "04",
    title: "Cultural Education",
    description:
      "Learn about India's cultural diversity through storytelling, knowledge and educational resources.",
  },
  {
    number: "05",
    title: "Community Empowerment",
    description:
      "Create opportunities for artists, artisans and local communities to share their knowledge and work.",
  },
  {
    number: "06",
    title: "Digital Cultural Platform",
    description:
      "Connect cultural information, heritage stories and discoveries through one digital platform.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1c14] text-[#f4efe4]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/yocha-mission-about.png')",
          }}
        />

        <div className="absolute inset-0 bg-[#07150e]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c14] via-transparent to-[#0b1c14]/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-12">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b77a]">
            DISCOVER THE STORY BEHIND YOCHA
          </p>

          <h1 className="font-editorial max-w-5xl text-5xl leading-[1.1] md:text-7xl lg:text-8xl">
            Every culture
            <span className="block italic text-[#df642f]">
              has a story.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#eee3c9]/85 md:text-lg">
            We believe that the beauty of a place lies not only in
            its landscapes, but in its people, traditions, stories
            and living heritage.
          </p>

          <Link
            href="#our-story"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#d6b77a]/60 px-7 py-4 text-sm transition hover:bg-[#d6b77a] hover:text-[#10271f]"
          >
            Discover our story
            <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="px-6 py-24 md:px-12 md:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              01 — OUR STORY
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              More than destinations.
              <span className="block italic text-[#d6b77a]">
                A world of stories.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#eee3c9]/75">
            <p>
              India is a land of extraordinary cultural diversity.
              Every region carries its own identity through language,
              art, music, architecture, food, festivals and traditions.
            </p>

            <p>
              Many of these cultural stories are preserved by local
              communities and passed from one generation to another.
              Yet countless stories remain unexplored by the wider world.
            </p>

            <p>
              YOCHA was envisioned as a platform to bring these stories
              closer to people — making cultural discovery meaningful,
              accessible and connected.
            </p>

            <p>
              Our journey begins in Kerala, with a vision to gradually
              explore and connect cultural heritage across India.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE IMAGE */}
      <section className="px-4 md:px-10">
        <div className="relative mx-auto h-[400px] max-w-[1500px] overflow-hidden rounded-2xl md:h-[650px]">
          <img
            src="/images/heritage-about.png"
            alt="Traditional Indian arts and cultural heritage"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07150e]/90 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-7 max-w-3xl md:bottom-16 md:left-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d6b77a]">
              WHAT WE BELIEVE
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Heritage lives through people,
              not just places.
            </h2>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#10271f] p-8 md:p-12">
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              OUR MISSION
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-5xl">
              Discover. Celebrate.
              <span className="block italic text-[#d6b77a]">
                Preserve.
              </span>
            </h2>

            <p className="mt-8 leading-8 text-[#eee3c9]/75">
              Our mission is to discover, document, preserve and
              promote India's living cultural heritage by connecting
              people with traditions, local communities, artists,
              artisans and meaningful cultural experiences.
            </p>
          </div>

          <div className="rounded-2xl bg-[#eee3c9] p-8 text-[#10271f] md:p-12">
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#bd4c2b]">
              OUR VISION
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-5xl">
              A connected world
              <span className="block italic text-[#bd4c2b]">
                through culture.
              </span>
            </h2>

            <p className="mt-8 leading-8 text-[#10271f]/75">
              We envision a world where cultural diversity is
              celebrated, local traditions are valued, and every
              community has an opportunity to share its heritage
              with future generations.
            </p>
          </div>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section className="bg-[#10271f] px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              02 — WHAT WE DO
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Six dimensions.
              <span className="block italic text-[#d6b77a]">
                One cultural vision.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[#eee3c9]/70">
              YOCHA brings together different aspects of cultural
              heritage to create a connected cultural discovery platform.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group bg-[#10271f] p-8 transition duration-300 hover:bg-[#19382b] md:p-10"
              >
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-sm text-[#d6b77a]">
                    {pillar.number}
                  </span>

                  <span className="text-2xl text-[#df642f] transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="font-editorial text-2xl">
                  {pillar.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#eee3c9]/65">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KERALA FIRST */}
      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-2xl md:h-[580px]">
            <img
              src="/images/discover-backwaters-about.png"
              alt="Kerala backwaters and traditional houseboat"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07150e]/60 to-transparent" />

            <div className="absolute bottom-7 left-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white">
                OUR FIRST CHAPTER
              </p>
              <h3 className="font-editorial mt-3 text-4xl">
                Kerala, India.
              </h3>
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              03 — WHERE WE BEGIN
            </p>

            <h2 className="font-editorial text-5xl leading-tight md:text-7xl">
              First Kerala.
              <span className="block italic text-[#d6b77a]">
                Then India.
              </span>
            </h2>

            <p className="mt-8 leading-8 text-[#eee3c9]/75">
              From the Theyyam traditions of North Kerala to the
              backwaters of Alappuzha, from Kathakali performances
              to traditional crafts, Kerala offers countless stories
              waiting to be discovered.
            </p>

            <p className="mt-5 leading-8 text-[#eee3c9]/75">
              We begin by exploring Kerala's fourteen districts.
              Step by step, the journey will expand across India's
              states and Union Territories.
            </p>

            <Link
              href="/explore"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#bd4c2b] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#df642f]"
            >
              Explore Kerala
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 px-6 py-28 text-center md:py-36">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#d6b77a]">
          YOUR OWN CULTURAL HERITAGE ADVENTURE
        </p>

        <h2 className="font-editorial mx-auto max-w-4xl text-5xl leading-tight md:text-7xl">
          Experience India.
          <span className="block italic text-[#df642f]">
            Preserve its heritage.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl leading-8 text-[#eee3c9]/70">
          Every culture has something to share.
          Every story deserves to be remembered.
        </p>

        <Link
          href="/explore"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#d6b77a]/50 px-8 py-4 text-sm transition hover:bg-[#d6b77a] hover:text-[#10271f]"
        >
          Start exploring
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
