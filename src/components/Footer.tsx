import { Link } from "react-router-dom";

const FOOTER_COLUMNS = [
  { heading: "Explore", links: [{ label: "About", to: "/about" }, { label: "Events", to: "/events" }, { label: "Contact", to: "/contact" }] },
  { heading: "Get Involved", links: [{ label: "Donate", to: "/donate" }, { label: "Volunteer", to: "/contact" }] },
];

export default function Footer() {
  return (
    <footer className="glass border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-xs font-bold text-white">
                U
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">Project UrbanVitals</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A nonprofit dedicated to improving the health and safety of our communities, powered by volunteers and benefactors like you.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-white/80 text-sm font-semibold mb-4">{col.heading}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-white/40 text-sm hover:text-white/70 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="text-white/30 text-xs">© 2026 Project UrbanVitals. All rights reserved.</p>
          <p className="text-white/30 text-xs">projecturbanvitals@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
