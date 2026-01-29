import { useEffect, useRef } from "react";
import HomePage from "./view/home";
import starBg from "./assets/starBg.png";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function App() {
  const orbRef = useRef<HTMLDivElement | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Smooth follow params
  const ease = 0.12;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const loop = () => {
      const el = orbRef.current;
      if (el) {
        // easing
        pos.current.x += (target.current.x - pos.current.x) * ease;
        pos.current.y += (target.current.y - pos.current.y) * ease;

        // keep within viewport a bit (optional)
        const x = clamp(pos.current.x, 0, window.innerWidth);
        const y = clamp(pos.current.y, 0, window.innerHeight);

        // translate orb (center it)
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative h-dvh w-screen bg-linear-to-br from-base-200 to-[#0d0d0d] overflow-hidden  min-h-dvh min-w-screen">
      <div
        ref={orbRef}
        className=" pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full blur-3xl "
        style={{
          padding: "max(20vw, 8rem)",
          background:
            "radial-gradient(circle at 50% 50%, rgba(100,255,218,0.22), rgba(100,255,218,0.08) 45%, transparent 70%)",
          mixBlendMode: "screen",
          opacity: 0.65,
          position: "absolute",
        }}
      />

      <div className="absolute inset-0 opacity-20 overflow-hidden ">
        <img src={starBg} alt="Starry Background" className="h-full w-full " />
      </div>
      <div className="sticky h-dvh w-screen  z-10 bg-accent/10 overflow-y-hidden md:overflow-y-scroll md:max-h-[calc(100vh)]">
        <HomePage />
      </div>
    </div>
  );
}
