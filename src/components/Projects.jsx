import { useState } from "react";

const PROJECTS = [
  {
    icon: "🚀",
    title: "Smart Deal Nest",
    desc: "A high-performance affiliate deals platform built with Next.js to showcase trending Amazon products and curated discounts. Uses SSR and SEO optimization for fast load speeds.",
    tags: ["Next.js", "SSR", "React", "SEO", "Affiliate"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    github: "https://github.com/wasiqali173/smartdealnest",
    live: "https://smartdealnest.vercel.app/",
    badge: "🔥 Featured",
  },
  {
    icon: "📤",
    title: "AirForShare Clone",
    desc: "Real-time file and text sharing app built with React and Firebase. Share notes or files across devices instantly — no login needed. Uses Firestore for live data sync.",
    tags: ["React", "Firebase", "Realtime", "Cloud"],
    gradient: "from-green-500 to-emerald-500",
    github: "https://github.com/wasiqali173/Airforshare",
    live: "https://airforshare-mauve.vercel.app/",
    badge: "⚡ Realtime",
  },
  {
    icon: "📝",
    title: "Notes App (Full-Stack)",
    desc: "Full-stack notes app with React frontend and Node.js + MongoDB backend. Supports create, edit, delete with REST API integration and persistent cloud storage.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-pink-500 to-rose-500",
    github: "https://github.com/wasiqali173/Notes-app-with-backend",
    live: "https://notes-app-with-backend-plgg.vercel.app/",
    badge: "🛠 Full-Stack",
  },
  {
    icon: "💡",
    title: "Pitch Craft",
    desc: "A platform for entrepreneurs to share and discover startup ideas. Browse startup pitches, view details, and explore innovative concepts with a clean modern UI.",
    tags: ["React.js", "Firebase", "Frontend", "Startup"],
    gradient: "from-blue-500 to-cyan-500",
    github: "https://github.com/wasiqali173/PitchCraft",
    live: "https://pitch-craft-self.vercel.app/",
    badge: "✅ Complete",
  },
];

/* ── Single card ── */
function ProjectCard({ p }) {
  const [expanded, setExpanded] = useState(false);

  const SHORT_LIMIT = 120;
  const isLong = p.desc.length > SHORT_LIMIT;
  const displayDesc = !isLong || expanded
    ? p.desc
    : p.desc.slice(0, SHORT_LIMIT).trimEnd() + "…";

  return (
    <div className="card-hover bg-card border border-white/7 rounded-2xl overflow-hidden flex flex-col h-full">

      {/* Thumb */}
      <div className={`h-36 flex-shrink-0 flex items-center justify-center text-5xl bg-gradient-to-br ${p.gradient} relative`}>
        {p.icon}
        <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
          {p.badge}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tags.map((t) => (
            <span key={t} className="bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs px-2.5 py-0.5 rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-base mb-2">{p.title}</h3>

        {/* Description */}
        <p className="text-gray-500 text-sm font-light leading-relaxed mb-1">
          {displayDesc}
        </p>

        {/* View detail toggle */}
        {isLong && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-accent text-xs font-semibold mb-2 text-left hover:underline"
          >
            {expanded ? "▲ Show less" : "▼ View detail"}
          </button>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Links */}
        <div className="flex gap-4 pt-3 border-t border-white/5 mt-2">
          <a href={p.live} target="_blank" rel="noreferrer"
            className="text-accent text-sm font-semibold hover:opacity-70 transition-opacity flex items-center gap-1.5">
            ↗ Live Demo
          </a>
          <a href={p.github} target="_blank" rel="noreferrer"
            className="text-gray-500 text-sm font-semibold hover:text-gray-300 transition-colors flex items-center gap-1.5">
            ⎇ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Section ── */
export default function Projects() {
  return (
    <section id="projects" className="bg-dark2 py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-tight mb-3">
            Things I've built
          </h2>
          <p className="text-gray-500 font-light text-base max-w-md">
            Real projects with live demos — each one taught me something new.
          </p>
        </div>

        {/* Grid — 2 cols on md, keeps cards equal height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-10">
          <a href="https://github.com/wasiqali173" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/12 text-gray-400 hover:text-accent hover:border-accent px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200">
            ⎇ See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}