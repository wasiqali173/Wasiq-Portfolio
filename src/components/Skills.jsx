import { useEffect, useRef, useState } from "react";

const SKILLS = [
  {
    cat: "Frontend",
    icon: "🎨",
    color: "from-cyan-500 to-blue-500",
    items: [
      { name: "HTML5 & CSS3", pct: 90 },
      { name: "JavaScript", pct: 80 },
      { name: "React.js", pct: 70 },
      { name: "Tailwind CSS", pct: 70 },
    ],
  },
  {
    cat: "Backend & Tools",
    icon: "⚙️",
    color: "from-purple-500 to-violet-600",
    items: [
      { name: "Node.js", pct: 60 },
      { name: "Express.js", pct: 75 },
      { name: "MongoDB (basics)", pct: 40 },
      { name: "Git & GitHub", pct: 65 },
    ],
  },
  {
    cat: "Currently Learning",
    icon: "📚",
    color: "from-emerald-500 to-teal-500",
    items: [
      { name: "React Advanced", pct: 60 },
      { name: "REST APIs", pct: 50 },
      { name: "Responsive Design", pct: 75 },
      { name: "Problem Solving", pct: 55 },
    ],
  },
];

function SkillBar({ name, pct, color, visible }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-accent text-sm font-bold">{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-tight mb-3">
            What I know so far
          </h2>
          <p className="text-gray-500 font-light text-base max-w-md">
            These are the technologies I've been learning and practicing through personal projects and online courses.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((cat, i) => (
            <div
              key={cat.cat}
              className="card-hover bg-card border border-white/7 rounded-2xl p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top accent bar */}
              <div className={`h-0.5 w-full rounded-full bg-gradient-to-r ${cat.color} mb-5`} />
              <div className="text-2xl mb-2">{cat.icon}</div>
              <h3 className="font-display font-bold text-white text-base mb-5">{cat.cat}</h3>
              {cat.items.map((sk) => (
                <SkillBar key={sk.name} {...sk} color={cat.color} visible={visible} />
              ))}
            </div>
          ))}
        </div>

        {/* Learning note */}
        <div className="mt-8 bg-accent/5 border border-accent/15 rounded-2xl p-5 flex gap-4 items-start">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            <span className="text-accent font-semibold">Note:</span> I'm a beginner — these are honest estimates of where I currently stand. I'm improving every day through projects and coursework and I'm always open to feedback and mentorship.
          </p>
        </div>
      </div>
    </section>
  );
}
