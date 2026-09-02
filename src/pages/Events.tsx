const EVENT_TEMPLATE = [
  {
    date: "Month 00",
    title: "Event name placeholder",
    location: "Location placeholder",
    desc: "Placeholder description — say what the event is, who it's for, and why people should show up.",
  },
  {
    date: "Month 00",
    title: "Event name placeholder",
    location: "Location placeholder",
    desc: "Placeholder description — say what the event is, who it's for, and why people should show up.",
  },
  {
    date: "Month 00",
    title: "Event name placeholder",
    location: "Location placeholder",
    desc: "Placeholder description — say what the event is, who it's for, and why people should show up.",
  },
];

const SHOW_EVENT_CARDS = false; // flip to true once you have real events to show

export default function Events() {
  return (
    <>
      {/* HEADER */}
      <section className="relative max-w-4xl mx-auto px-6 pt-28 pb-14 text-center">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Events</p>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 glow-text"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Upcoming events.
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
          No events are scheduled yet — this section is a template. Duplicate one of the cards below for each real
          event you add.
        </p>
      </section>

      {/* EVENTS LIST */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        {SHOW_EVENT_CARDS ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENT_TEMPLATE.map((e, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 feature-card flex flex-col gap-4">
                <div className="inline-flex self-start items-center gap-2 glass rounded-full px-3 py-1 text-xs text-emerald-300 font-medium">
                {e.date}
                </div>
                <h3 className="text-white font-semibold text-lg">{e.title}</h3>
                <p className="text-white/45 text-sm">{e.location}</p>
                <p className="text-white/55 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        ) : (
    <div className="glass-card rounded-2xl p-12 text-center">
      <p className="text-white/50 text-base">No events are scheduled at the moment.</p>
    </div>
  )}
</section>
    </>
  );
}
