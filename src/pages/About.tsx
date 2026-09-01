const TEAM_SLOTS = Array.from({ length: 8 }, (_, i) => i + 1);

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section className="relative max-w-5xl mx-auto px-6 pt-28 pb-20 text-center">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">About us</p>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 glow-text"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Our mission.
        </h1>
        <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
          We're a nonprofit set on improving the health and safety of our communities. We try to achieve this
          through a variety of projects dedicated to this goal and the help of volunteers &amp; benefactors like you!
        </p>
      </section>

      <div className="section-divider max-w-7xl mx-auto mb-24" />

      {/* TEAM */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Our team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
            The people behind Project UrbanVitals.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_SLOTS.map((n) => (
            <div key={n} className="glass-card rounded-2xl p-6 feature-card flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-full bg-white/10 border border-dashed border-white/25 flex items-center justify-center text-white/30 text-xs">
                Photo
              </div>
              <div>
                <div className="text-white font-semibold text-base">Team Member {n}</div>
                <div className="text-emerald-400 text-xs font-medium mt-0.5">Role placeholder</div>
              </div>
              <p className="text-white/45 text-sm leading-relaxed">
                Bio placeholder — a sentence or two about this team member's background and role at Project UrbanVitals.
              </p>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-xs text-center mt-8">
          Team photos, names, roles, and bios are placeholders — swap them in once you have the details.
        </p>
      </section>
    </>
  );
}
