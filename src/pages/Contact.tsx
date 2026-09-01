import { useState, FormEvent } from "react";

const CONTACT_EMAIL = "projecturbanvitals@gmail.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New contact form message: ${reason || "General inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nReason for contacting: ${reason}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* HEADER */}
      <section className="relative max-w-3xl mx-auto px-6 pt-28 pb-14 text-center">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">Contact</p>
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 glow-text"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Get in touch.
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
          Questions, partnership ideas, or want to volunteer? Send us a message and we'll get back to you.
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-2xl mx-auto px-6 pb-32">
        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white/70 text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="glass rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-emerald-400/50"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white/70 text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-emerald-400/50"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="reason" className="text-white/70 text-sm font-medium">
              Reason for contacting
            </label>
            <select
              id="reason"
              required
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="glass rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald-400/50 [&>option]:text-black"
            >
              <option value="" disabled>
                Select a reason
              </option>
              <option value="Volunteering">Volunteering</option>
              <option value="Donations">Donations</option>
              <option value="Partnership">Partnership</option>
              <option value="Media / Press">Media / Press</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white/70 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="glass rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none focus:border-emerald-400/50 resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button type="submit" className="btn-primary px-8 py-3.5 rounded-xl text-white font-semibold text-base mt-2">
            Send message
          </button>

          {sent && (
            <p className="text-emerald-300 text-sm text-center">
              Your email app should open with this message ready to send to {CONTACT_EMAIL}.
            </p>
          )}

          <p className="text-white/30 text-xs text-center leading-relaxed">
            This form opens the sender's email app addressed to {CONTACT_EMAIL} — this is a static site with no
            backend, so it can't send email automatically on its own. To have submissions delivered silently in the
            background instead, connect a form service (e.g. Formspree or EmailJS); ask and this can be wired up
            once you have an account.
          </p>
        </form>
      </section>
    </>
  );
}
