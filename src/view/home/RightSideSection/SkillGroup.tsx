import React from "react";

type SkillGroup = {
  title: string;
  subtitle: string;
  skills: string[];
  accent: string; // tailwind gradient classes
};

const skillGroups: SkillGroup[] = [
  {
    title: "Core Frontend",
    subtitle: "UI engineering, component systems, performance",
    skills: ["React", "React Native", "TypeScript", "JavaScript"],
    accent: "from-cyan-400/30 via-sky-400/20 to-indigo-400/25",
  },
  {
    title: "Mobile Development",
    subtitle: "Shipping apps end-to-end across platforms",
    skills: ["Expo", "iOS & Android", "App Store & Play Store releases"],
    accent: "from-fuchsia-400/25 via-purple-400/15 to-sky-400/25",
  },
  {
    title: "State Management & Data",
    subtitle: "Predictable state, caching, async orchestration",
    skills: ["Zustand", "React Query", "Context API"],
    accent: "from-emerald-400/25 via-teal-400/15 to-cyan-400/25",
  },
  {
    title: "Backend & APIs",
    subtitle: "Pragmatic backends and integration work",
    skills: ["REST APIs", "Convex.dev", "Supabase", "Firebase"],
    accent: "from-amber-400/25 via-orange-400/15 to-rose-400/25",
  },
  {
    title: "Authentication & Storage",
    subtitle: "Identity, sessions, and secure data flows",
    skills: [
      "Clerk",
      "WorkOS",
      "Supabase Auth",
      "Firebase Auth",
      "Identity Server 4",
      "Cloud Storage",
    ],
    accent: "from-indigo-400/25 via-violet-400/15 to-fuchsia-400/25",
  },
  {
    title: "Tooling & Delivery",
    subtitle: "Build pipelines, quality, and release confidence",
    skills: ["Git", "Azure DevOps", "CI/CD", "Jest", "Vite", "Webpack", "pnpm"],
    accent: "from-slate-400/20 via-zinc-400/10 to-sky-400/20",
  },
];

const SkillsSection = () => {
  return (
    <section className="relative overflow-hidden py-2 sm:py-10 mb-10">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute top-10 -right-32 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent,rgba(255,255,255,0.03))]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Skills & Tooling
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Modern frontend + mobile, shipped with confidence
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/65">
              A stack focused on fast iteration, clean UX, strong typing, and
              production-ready delivery.
            </p>
          </div>
        </div>

        {/* grid */}
        <div className="mt-5 grid grid-cols-1 gap-4 ">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/5 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/7 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]"
            >
              {/* gradient glow */}
              <div
                className={`pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${group.accent}`}
              />

              {/* top row */}
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{group.subtitle}</p>
                </div>
              </div>

              {/* chips */}
              <div className="relative mt-2 flex flex-wrap gap-0.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-sm border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75 transition-colors duration-300 group-hover:border-white/20 group-hover:bg-black/10"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* bottom shine */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
