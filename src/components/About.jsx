import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cards = [
    ["📍", "Location", "Pakistan"],
    ["🎓", "Status", "Intermediate"],
    ["💻", "Focus", "Web Dev"],
    ["🌐", "Languages", "EN · UR"],
  ];

  return (
    <section id="about" className="bg-dark2 py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Visual side */}
          <div ref={ref} className="reveal">
            
            <div
              className="w-full max-w-xs mx-auto lg:mx-0 rounded-2xl relative overflow-hidden shadow-2xl"
              style={{
                aspectRatio: "4/5",
                border: "1px solid rgba(0,229,255,0.15)",
              }}
            >
              <img
                src="/Profile.jpg"
                alt="Wasiq Ali"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback if photo not found
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback avatar — shows only if image fails */}
              <div
                className="w-full h-full items-center justify-content-center absolute inset-0"
                style={{
                  display: "none",
                  background: "linear-gradient(135deg, rgba(124,58,237,0.45), rgba(0,229,255,0.2))",
                }}
              >
                <span className="font-display font-extrabold text-white/20 tracking-tighter select-none m-auto" style={{ fontSize: "6rem" }}>
                  WA
                </span>
              </div>
              {/* Subtle overlay on photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Mini info cards */}
            <div className="grid grid-cols-2 gap-2.5 mt-4 max-w-xs mx-auto lg:mx-0">
              {cards.map(([icon, label, value]) => (
                <div key={label} className="bg-card border border-white/7 rounded-xl p-3.5">
                  <div className="text-base mb-1">{icon}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">{label}</div>
                  <div className="text-white font-semibold text-sm mt-0.5">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-accent" />
              <span className="text-accent text-xs font-bold uppercase tracking-widest">About Me</span>
            </div>

            <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl leading-tight tracking-tight mb-5">
              A beginner who is<br />
              <span className="text-accent">passionate to grow.</span>
            </h2>

            <p className="text-gray-400 font-light leading-relaxed mb-4 text-base">
              I'm Wasiq Ali, a web development beginner from Pakistan. I recently started learning HTML, CSS, JavaScript, and React through online courses and self-study.
            </p>

            <p className="text-gray-400 font-light leading-relaxed mb-6 text-base">
              I have built several personal projects to practice my skills and I'm excited to land my first opportunity where I can learn from experienced developers and contribute to real work.
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Built 5+ projects independently",
                "Learning React & Node.js actively",
                "Comfortable with HTML, CSS & JavaScript",
                "Ready to learn anything on the job",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"].map((t) => (
                <span
                  key={t}
                  className="bg-accent/6 border border-accent/15 text-accent text-xs font-medium px-3.5 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}