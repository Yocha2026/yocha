
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const footerLinks = {
  discover: [
    { label: "Explore India", href: "/explore" },
    { label: "Cultural Experiences", href: "/events" },
    { label: "Traditional Arts", href: "/explore" },
    { label: "Heritage Stays", href: "/explore" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Our Mission", href: "/about" },
    { label: "Community", href: "/join" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#081710] text-[#f4efe4]">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-20 sm:px-10 lg:px-16">

        {/* Main footer content */}
        <div className="grid gap-14 border-b border-[#eee3c9]/15 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/yocha-logo.png"
                alt="YOCHA Logo"
                width={180}
                height={75}
                className="h-auto w-36 object-contain"
              />
            </Link>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#eee3c9]/55">
              Discover India's living cultures, celebrate its people
              and preserve the stories that connect generations.
            </p>

            <p className="mt-6 font-editorial text-xl italic text-[#d6b77a]">
              Experience India. Preserve Its Heritage.
            </p>
          </div>

          {/* Discover links */}
          <div>
            <h3 className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d6b77a]">
              Discover
            </h3>

            <ul className="space-y-4">
              {footerLinks.discover.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eee3c9]/60 transition hover:text-[#df642f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d6b77a]">
              YOCHA
            </h3>

            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eee3c9]/60 transition hover:text-[#df642f]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and social media */}
          <div>
            <h3 className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d6b77a]">
              Stay Connected
            </h3>

            <p className="mb-6 text-sm leading-7 text-[#eee3c9]/55">
              Follow our journey as we discover and celebrate India's
              cultural heritage.
            </p>

            <a
              href="mailto:hello@yocha.in"
              className="flex items-center gap-3 text-sm text-[#eee3c9]/75 transition hover:text-[#df642f]"
            >
              <Mail size={17} />
              hello@yocha.in
            </a>

            <div className="mt-5 flex items-center gap-3 text-sm text-[#eee3c9]/55">
              <MapPin size={17} />
              India
            </div>

            {/* Social media icons */}
            <div className="mt-8 flex gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-[#eee3c9]/20 transition hover:border-[#df642f] hover:bg-[#bd4c2b]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-[#eee3c9]/20 transition hover:border-[#df642f] hover:bg-[#bd4c2b]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="currentColor"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center border border-[#eee3c9]/20 transition hover:border-[#df642f] hover:bg-[#bd4c2b]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[17px] w-[17px]"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Brand statement */}
        <div className="py-16 text-center">
          <p className="font-editorial text-4xl leading-tight text-[#eee3c9]/90 sm:text-6xl lg:text-7xl">
            Every culture has a story.
          </p>

          <p className="mt-4 font-editorial text-3xl italic text-[#bd4c2b] sm:text-5xl">
            Let's keep it alive.
          </p>

          <Link
            href="/join"
            className="mt-9 inline-flex items-center gap-3 border-b border-[#d6b77a] pb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d6b77a] transition hover:gap-5 hover:text-[#df642f]"
          >
            Be part of the journey
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col justify-between gap-5 border-t border-[#eee3c9]/15 pt-7 text-[10px] tracking-wide text-[#eee3c9]/40 sm:flex-row sm:items-center">

          <p>© 2026 YOCHA. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-[#d6b77a]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#d6b77a]"
            >
              Terms & Conditions
            </Link>
          </div>

          <p>Made with purpose. Rooted in culture.</p>
        </div>

      </div>
    </footer>
  );
}
