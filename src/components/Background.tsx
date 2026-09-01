import { useEffect, useRef, useState } from "react";

function useScrollY() {
  const ref = useRef(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        ref.current = window.scrollY;
        forceRender((n) => n + 1);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return ref.current;
}

export default function Background() {
  const scrollY = useScrollY();

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#021a0e] via-[#052e16] to-[#022c1a]" />
      <div
        className="orb-1 absolute top-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-emerald-600/20 blur-[120px] will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      />
      <div
        className="orb-2 absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-lime-500/15 blur-[100px] will-change-transform"
        style={{ transform: `translateY(${scrollY * -0.12}px)` }}
      />
      <div
        className="orb-3 absolute bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-teal-600/15 blur-[100px] will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />
      <div
        className="orb-2 absolute top-[60%] right-[30%] w-[300px] h-[300px] rounded-full bg-green-400/10 blur-[80px] will-change-transform"
        style={{ transform: `translateY(${scrollY * -0.22}px)` }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />
    </div>
  );
}
