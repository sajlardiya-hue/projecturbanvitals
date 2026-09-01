export default function Donate() {
  return (
    <>
      {/* HEADER */}
      <section className="relative max-w-4xl mx-auto px-6 pt-28 pb-14 text-center">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Donate</p>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 glow-text"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Support our work.
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
          Every gift helps Project UrbanVitals bring health and safety programs to more neighborhoods. Thank you for
          being part of it.
        </p>
      </section>

      {/* DONATION EMBED */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="glass-card rounded-3xl p-4 md:p-6 overflow-hidden">
          <iframe
            src="https://hcb.hackclub.com/donations/start/project-urbanvitals"
            title="Donate to Project UrbanVitals"
            className="w-full rounded-2xl"
            style={{ height: "720px", border: "none" }}
            allow="payment"
          />
        </div>
      </section>
    </>
  );
}
