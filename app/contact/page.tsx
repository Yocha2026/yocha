
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Handshake,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [preparedMessage, setPreparedMessage] = useState("");
  const [status, setStatus] = useState("");

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `
YOCHA WEBSITE ENQUIRY

Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}
    `.trim();

    setPreparedMessage(message);

    try {
      await navigator.clipboard.writeText(message);
      setStatus(
        "Your enquiry has been prepared and copied. You can now paste it into your email or preferred messaging app."
      );
    } catch {
      setStatus(
        "Your enquiry is ready below. Copy the message and send it through your preferred contact channel."
      );
    }
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setStatus("Enquiry copied successfully.");
    } catch {
      setStatus(
        "Automatic copying is unavailable. Please select and copy the message below."
      );
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1c14] text-[#f4efe4]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <img
          src="/images/yocha-mission.jpg"
          alt="Traditional Kerala heritage landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#07150e]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07150e]/90 via-[#07150e]/55 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b77a]">
            LET'S START A CONVERSATION
          </p>

          <h1 className="max-w-5xl font-editorial text-5xl leading-[1.12] md:text-8xl">
            Every meaningful
            <span className="block italic text-[#df642f]">
              journey begins
            </span>
            with a conversation.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#eee3c9]/75 md:text-lg">
            Have a cultural story to share? Want to collaborate?
            Or simply want to be part of something meaningful?
            We'd love to hear from you.
          </p>

          <Link
            href="#contact-form"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#bd4c2b] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#df642f]"
          >
            Get in touch
            <ArrowDown size={17} />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d6b77a]/50 to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              CONNECT WITH YOCHA
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Let's bring
              <span className="block italic text-[#d6b77a]">
                stories together.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#eee3c9]/70">
            YOCHA is a cultural heritage platform built around
            discovering, documenting and celebrating the living
            traditions of India. We believe every community,
            artist and cultural experience has a story worth
            sharing.
            <br />
            <br />
            Whether you represent a cultural organisation, practise
            a traditional art, manage a heritage destination or
            simply love your local culture, there is a place for
            your voice here.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact-form"
        className="bg-[#10271f] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              01 — SEND US A MESSAGE
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Tell us
              <span className="block italic text-[#d6b77a]">
                what's on your mind.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-[#eee3c9]/65">
              Share your idea, ask a question, suggest a destination
              or tell us about a cultural tradition that deserves
              more recognition.
            </p>

            <div className="mt-14 space-y-8">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6b77a]/30 text-[#d6b77a]">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h3 className="font-editorial text-xl">
                    General enquiries
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#eee3c9]/60">
                    Questions, suggestions and feedback about YOCHA.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6b77a]/30 text-[#d6b77a]">
                  <Handshake size={21} />
                </div>

                <div>
                  <h3 className="font-editorial text-xl">
                    Partnerships
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#eee3c9]/60">
                    Collaborations with organisations, tourism
                    partners and cultural institutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6b77a]/30 text-[#d6b77a]">
                  <Users size={21} />
                </div>

                <div>
                  <h3 className="font-editorial text-xl">
                    Community & culture
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#eee3c9]/60">
                    Artists, artisans, storytellers and local
                    communities are welcome to connect.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-white/10 bg-[#0b1c14] p-6 md:p-10">
            <div className="mb-9">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d6b77a]">
                YOUR MESSAGE
              </p>

              <h3 className="mt-4 font-editorial text-3xl">
                Start here.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-[#eee3c9]/80"
                >
                  Your name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b77a]/70"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-[#eee3c9]/80"
                >
                  Email address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b77a]/70"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-[#eee3c9]/80"
                >
                  What would you like to discuss? *
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-[#10271f] px-4 py-4 text-sm text-white outline-none transition focus:border-[#d6b77a]/70"
                >
                  <option>General Enquiry</option>
                  <option>Partnership & Collaboration</option>
                  <option>Artist or Artisan Registration</option>
                  <option>Cultural Organisation</option>
                  <option>Tourism & Heritage Experience</option>
                  <option>Share a Cultural Story</option>
                  <option>Suggest a Destination</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-[#eee3c9]/80"
                >
                  Your message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your idea..."
                  className="w-full resize-y rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/30 focus:border-[#d6b77a]/70"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#bd4c2b] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#df642f]"
              >
                Prepare my enquiry
                <Send size={17} />
              </button>

              <p className="text-center text-xs leading-6 text-[#eee3c9]/40">
                Your enquiry is prepared on this device. It is not
                automatically transmitted or stored by YOCHA.
              </p>
            </form>

            {/* PREPARED MESSAGE */}
            {preparedMessage && (
              <div className="mt-8 rounded-xl border border-[#d6b77a]/30 bg-[#10271f] p-5">
                <div className="flex items-center gap-2 text-[#d6b77a]">
                  <CheckCircle2 size={19} />
                  <p className="text-sm font-medium">
                    Enquiry prepared
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-[#eee3c9]/70">
                  {status}
                </p>

                <textarea
                  readOnly
                  value={preparedMessage}
                  rows={8}
                  aria-label="Prepared enquiry message"
                  className="mt-5 w-full rounded-lg border border-white/10 bg-black/20 p-4 text-xs leading-6 text-[#eee3c9]/80 outline-none"
                />

                <button
                  type="button"
                  onClick={copyMessage}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#d6b77a]/40 px-5 py-3 text-sm text-[#d6b77a] transition hover:bg-[#d6b77a] hover:text-[#10271f]"
                >
                  <Copy size={15} />
                  Copy enquiry again
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COLLABORATION SECTION */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#df642f]">
              02 — LET'S WORK TOGETHER
            </p>

            <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
              Culture grows
              <span className="block italic text-[#d6b77a]">
                when we connect.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#eee3c9]/65">
              YOCHA welcomes people and organisations who want to
              contribute to the discovery, documentation and
              preservation of India's living heritage.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sparkles,
                title: "Artists & Artisans",
                description:
                  "Share your skills, traditional art forms, craftsmanship and creative journey.",
              },
              {
                icon: Handshake,
                title: "Cultural Organisations",
                description:
                  "Connect with us to explore meaningful heritage and cultural collaborations.",
              },
              {
                icon: MapPin,
                title: "Local Communities",
                description:
                  "Help bring visibility to your local stories, traditions and heritage places.",
              },
              {
                icon: Users,
                title: "Tourism Partners",
                description:
                  "Explore possibilities around responsible cultural tourism and authentic experiences.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-[#10271f] p-7 transition hover:-translate-y-1 hover:border-[#d6b77a]/40"
                >
                  <Icon
                    size={27}
                    className="mb-9 text-[#d6b77a]"
                  />

                  <h3 className="font-editorial text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#eee3c9]/60">
                    {item.description}
                  </p>

                  <Link
                    href="#contact-form"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-[#df642f] hover:text-[#d6b77a]"
                  >
                    Get in touch
                    <ArrowUpRight size={15} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING MESSAGE */}
      <section className="relative overflow-hidden bg-[#eee3c9] px-6 py-24 text-center text-[#10271f] md:py-32">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#bd4c2b]/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#bd4c2b]/10" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#bd4c2b]">
            YOUR STORY MATTERS
          </p>

          <h2 className="font-editorial text-4xl leading-tight md:text-7xl">
            Let's preserve
            <span className="block italic text-[#bd4c2b]">
              what makes us unique.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#10271f]/70">
            India's cultural heritage belongs to the people who
            live it, practise it and pass it on. Let's give those
            stories the visibility they deserve.
          </p>

          <Link
            href="/explore"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#10271f] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#bd4c2b] "
          >
            Explore India's Heritage
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
