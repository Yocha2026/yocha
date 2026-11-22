
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",
];

const categories = [
  {
    number: "01",
    title: "Traditional Arts",
    description: "Discover Kerala's classical and folk art traditions.",
    image: "/images/traditional-arts.png",
  },
  {
    number: "02",
    title: "Festivals & Rituals",
    description: "Explore celebrations, customs and cultural gatherings.",
    image: "/images/festivals.png",
  },
  {
    number: "03",
    title: "Food & Traditions",
    description: "Experience Kerala through its food and local traditions.",
    image: "/images/food-culture.png",
  },
  {
    number: "04",
    title: "Heritage & Architecture",
    description: "Discover historic homes, monuments and architecture.",
    image: "/images/heritage-stays.png",
  },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1c14] text-[#f4efe4]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end">
        <img
          src="/images/discover-backwaters.png"
          alt="Kerala backwaters"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07150e]/90 via-[#07150e]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c14] via-transparent to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-12">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b77a]">
            YOUR KERALA DISCOVERY BEGINS HERE
          </p>

          <h1 className="font-editorial max-w-4xl text-5xl leading-tight md:text-7xl lg:text-8xl">
            Discover
            <span className="block italic text-[#df642f]">
              Kerala.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#eee3c9]/80 md:text-lg">
            A land of timeless traditions, vibrant art forms,
            breathtaking landscapes and stories waiting to be discovered.
          </p>

          <Link
            href="#districts"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#bd4c2b] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#df642f]"
          >
            Explore 14 districts
            <span>↓</span>
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              GOD'S OWN COUNTRY
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              One state.
              <span className="block italic text-[#d6b77a]">
                Countless stories.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#eee3c9]/70">
            From the northern traditions of Malabar to the southern
            heritage of Travancore, Kerala carries a rich diversity
            of art, architecture, language, food and community life.
            Explore each region through its unique cultural identity.
          </p>
        </div>
      </section>

      {/* DISTRICTS */}
      <section
        id="districts"
        className="bg-[#10271f] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              EXPLORE BY REGION
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Fourteen districts.
              <span className="block italic text-[#d6b77a]">
                Fourteen identities.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[#eee3c9]/65">
              Choose a district to begin discovering its heritage,
              cultural traditions, destinations and people.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {districts.map((district, index) => (
              <Link
                key={district}
                href={`/explore/kerala/${district.toLowerCase().replaceAll(" ", "-")}`}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#0b1c14] p-6 transition duration-300 hover:border-[#d6b77a]/50 hover:bg-[#18382b]"
              >
                <div>
                  <span className="mb-3 block text-xs tracking-widest text-[#d6b77a]">
                    DISTRICT {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-editorial text-xl text-[#f4efe4]">
                    {district}
                  </h3>
                </div>

                <span className="text-xl text-[#df642f] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURAL CATEGORIES */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              DISCOVER KERALA'S CULTURE
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Explore beyond
              <span className="block italic text-[#d6b77a]">
                the destinations.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#10271f]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7 md:p-9">
                  <p className="mb-4 text-xs tracking-[0.25em] text-[#d6b77a]">
                    {category.number}
                  </p>

                  <h3 className="font-editorial text-3xl">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#eee3c9]/65">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-white/10 px-6 py-28 text-center md:py-36">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d6b77a]">
          YOUR JOURNEY STARTS HERE
        </p>

        <h2 className="font-editorial mx-auto max-w-4xl text-5xl leading-tight md:text-7xl">
          Every district
          <span className="block italic text-[#df642f]">
            has a story.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl leading-8 text-[#eee3c9]/70">
          Discover the traditions, people and heritage that make
          Kerala extraordinary.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#d6b77a]/50 px-8 py-4 text-sm transition hover:bg-[#d6b77a] hover:text-[#10271f]"
        >
          Connect with YOCHA
          <span>↗</span>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
