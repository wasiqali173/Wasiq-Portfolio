export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="hero-grid-bg absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse2" />
              Open to Work · Pakistan 🇵🇰
            </div>

            {/* Name */}
            <h1
              className="font-display font-extrabold leading-none tracking-tight text-white mb-3 animate-fade-up"
              style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)", animationDelay: "0.1s" }}
            >
              Hi, I'm<br />
              <span className="text-accent">Wasiq Ali</span>
            </h1>

            {/* Role */}
            <p
              className="font-display font-bold text-gray-400 mb-5 animate-fade-up"
              style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", animationDelay: "0.2s" }}
            >
              Beginner Web Developer
            </p>

            {/* Tagline */}
            <p
              className="text-gray-500 font-light leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 animate-fade-up"
              style={{ fontSize: "1rem", animationDelay: "0.3s" }}
            >
              I'm just starting my journey in web development — learning every day, building real projects, and looking for my first opportunity to grow with a great team.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-wrap gap-3 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => scrollTo("projects")}
                className="bg-accent cursor-pointer text-dark font-bold px-7 py-3 rounded-full text-sm hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                🚀 View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="border border-white/15 cursor-pointer text-gray-300 font-semibold px-7 py-3 rounded-full text-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300"
              >
                ✉️ Contact Me
              </button>
              <a
                href="/wasiq-cv.pdf"
                download = "Wasiq-Ali-CV.pdf"
                target="_blank"
                className="border border-white/15 text-gray-300 font-semibold px-7 py-3 rounded-full text-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300"
              >
                ⬇️ Download CV
              </a>
            </div>

            {/* Quick stats */}
            <div
              className="flex gap-8 mt-10 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                ["5+", "Projects Built"],
                ["6+", "Months Learning"],
                ["3+", "Technologies"],
              ].map(([num, label]) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="font-display font-extrabold text-3xl text-white leading-none">
                    {num.replace("+", "")}
                    <span className="text-accent">+</span>
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Orb visual */}
          <div className="flex-shrink-0 hidden sm:flex items-center justify-center">
            <div className="relative">
              {/* Outer orbit ring */}
              <div
                className="absolute inset-0 rounded-full border border-dashed border-accent/15 animate-spin-slow"
                style={{ margin: "-24px" }}
              >
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_#00e5ff] -translate-x-1/2" />
              </div>

              {/* Main orb */}
              <div
                className="w-56 h-56 md:w-64 md:h-64 rounded-full flex items-center justify-center animate-float"
                style={{
                  background:
                    "radial-gradient(circle at 40% 35%, rgba(124,58,237,0.5), rgba(0,229,255,0.15), transparent 70%)",
                  border: "1px solid rgba(0,229,255,0.12)",
                  boxShadow:
                    "0 0 80px rgba(0,229,255,0.08), inset 0 0 60px rgba(124,58,237,0.1)",
                }}
              >
                <span
                  className="font-display font-extrabold text-white/25 tracking-tighter select-none"
                  style={{ fontSize: "5rem" }}
                >
                  WA
                </span>
              </div>

              {/* Floating tech tags around orb */}
              {[
                { label: "React", top: "8%", right: "-20%" },
                { label: "Node.js", bottom: "15%", right: "-22%" },
                { label: "HTML/CSS", top: "20%", left: "-28%" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="absolute bg-card border border-white/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
                  style={{ top: t.top, bottom: t.bottom, left: t.left, right: t.right }}
                >
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
