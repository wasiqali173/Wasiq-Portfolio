export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-dark2 border-t border-white/6 px-6 md:px-10 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-extrabold text-lg text-white">
          W<span className="text-accent">.</span>Ali
        </span>
        <p className="text-gray-500 text-xs text-center">
          © 2025 Wasiq Ali · Made with 💙 while learning to code
        </p>
        <div className="flex gap-5">
          {["About", "Skills", "Projects", "Contact"].map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              className="text-gray-500 cursor-pointer hover:text-accent text-xs font-medium transition-colors duration-200"
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
