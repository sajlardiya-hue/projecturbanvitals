import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link text-sm font-medium ${isActive ? "text-white" : "text-white/70"}`;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
            U
          </div>
          <span className="font-semibold text-white tracking-tight text-lg">Project UrbanVitals</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/donate" className="btn-primary px-4 py-2 rounded-lg text-sm text-white font-semibold">
            Donate Now
          </NavLink>
        </div>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className="text-white/70 text-sm font-medium hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
            <NavLink
              to="/donate"
              className="btn-primary px-4 py-2 rounded-lg text-sm text-white font-semibold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Donate Now
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
