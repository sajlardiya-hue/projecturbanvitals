import { useState } from "react";
import { Link } from "react-router-dom";

// Toggle these to show/hide sections without deleting their content
const SHOW_STATS = true;
const SHOW_FOCUS_AREAS = true;
const SHOW_TESTIMONIALS = false; // hidden for now
const SHOW_FAQ = true;

const FOCUS_AREAS = [
  {
    icon: "◈",
    title: "Community Health Screenings",
    desc: "Placeholder — describe a program that brings free or low-cost health screenings to neighborhoods that need them most.",
    color: "from-emerald-500/20 to-transparent",
  },
  {
    icon: "⬡",
    title: "Neighborhood Safety",
    desc: "Placeholder — describe an initiative focused on making streets, parks, and public spaces safer for residents.",
    color: "from-lime-500/20 to-transparent",
  },
  {
    icon: "◎",
    title: "Volunteer Network",
    desc: "Placeholder — describe how volunteers get involved and what kinds of shifts or projects they support.",
    color: "from-teal-500/20 to-transparent",
  },
  {
    icon: "⬢",
    title: "Youth & Family Wellness",
    desc: "Placeholder — describe programming aimed at kids and families in the community.",
    color: "from-green-500/20 to-transparent",
  },
  {
    icon: "◉",
    title: "Environmental Health",
    desc: "Placeholder — describe efforts around clean air, water, green space, or other environmental factors.",
    color: "from-emerald-400/20 to-transparent",
  },
  {
    icon: "⬟",
    title: "Emergency Preparedness",
    desc: "Placeholder — describe resources or training that help communities respond to emergencies.",
    color: "from-lime-400/20 to-transparent",
  },
];

const STATS = [
  { value: "15", label: "Volunteers" },
  { value: "2", label: "Schools" },
  { value: "3", label: "Parks served" },
];

const TESTIMONIALS = [
  {
    name: "Placeholder Name",
    role: "Volunteer",
    avatar: "PN",
    quote: "Placeholder quote — swap in a real story from a volunteer, donor, or community member about their experience with Project UrbanVitals.",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Placeholder Name",
    role: "Community Member",
    avatar: "PN",
    quote: "Placeholder quote — swap in a real story about the impact of a specific program or event.",
    color: "from-green-700 to-emerald-800",
  },
  {
    name: "Placeholder Name",
    role: "Donor",
    avatar: "PN",
    quote: "Placeholder quote — swap in a real story from a benefactor about why they support the mission.",
    color: "from-teal-600 to-green-800",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How can I get involved as a volunteer?", a: "Placeholder answer — describe how someone signs up to volunteer, what commitment looks like, and any requirements." },
    { q: "Where does my donation go?", a: "Placeholder answer — describe how donations are used across your programs." },
    { q: "How can my organization partner with Project UrbanVitals?", a: "Placeholder answer — describe how businesses, schools, or other nonprofits can partner with you." },
    { q: "Do you accept in-kind donations?", a: "Placeholder answer — describe whether you accept supplies, equipment, or other non-cash donations." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-32 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-emerald-300 font-medium mb-8 border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          A nonprofit for healthier, safer communities
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6 glow-text"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Building healthier{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-lime-300 bg-clip-text text-transparent">
            cities
          </span>
          <br />together.
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Project UrbanVitals is a nonprofit dedicated to improving the health and safety of our communities — through hands-on projects and the support of volunteers and benefactors like you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/donate" className="btn-primary px-8 py-3.5 rounded-xl text-base text-white font-semibold w-full sm:w-auto">
            Donate Now
          </Link>
          <Link
            to="/events"
            className="btn-ghost px-8 py-3.5 rounded-xl text-base text-white/80 font-medium w-full sm:w-auto flex items-center gap-2 justify-center"
          >
            See upcoming events
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-emerald-400 to-transparent scroll-indicator" />
          <span className="text-[10px] text-emerald-400 tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="glass-card rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 stat-shine">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent mb-1"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-white/50 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto mb-24" />

      {/* FOCUS AREAS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="mb-16 max-w-2xl">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">What we do</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Our focus areas.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOCUS_AREAS.map((f) => (
            <div key={f.title} className={`glass-card rounded-2xl p-6 feature-card bg-gradient-to-br ${f.color}`}>
              <div className="text-3xl mb-4 text-emerald-400">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

  {SHOW_TESTIMONIALS && (
    <>
      <div className="section-divider max-w-7xl mx-auto mb-24" />

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Community voices</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Stories from the people we work with.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="glass-card testimonial-glow rounded-2xl p-7 flex flex-col gap-5 feature-card">
              <div className="text-white/70 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</div>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto mb-24" />
    </>
  )}
      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
            Frequently asked questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left text-white/85 font-medium text-sm hover:text-white transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>{faq.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-emerald-400" : "text-white/40"}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/10 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl glass-card p-12 md:p-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-emerald-500/20 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-5">Get involved</p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Your support changes lives.
            </h2>
            <p className="text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
              Every donation and volunteer hour helps us bring health and safety programs to more neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="btn-primary px-8 py-4 rounded-xl text-white font-semibold text-base">
                Donate Now
              </Link>
              <Link to="/contact" className="btn-ghost px-8 py-4 rounded-xl text-white/75 font-medium text-base">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
