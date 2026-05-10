import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const contactItems = [
    { icon: "📧", label: "Email", val: "wasiqali@email.com", href: "mailto:wasiqali173@email.com" },
    { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/wasiq-ali", href: "https://www.linkedin.com/in/wasiq-ali-1a5797365" },
    { icon: "⎇", label: "GitHub", val: "github.com/wasiqali173", href: "https://github.com/wasiqali173/" },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-5 h-px bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight leading-tight mb-3">
            Let's talk
          </h2>
          <p className="text-gray-500 font-light text-base max-w-md">
            I'm actively looking for my first opportunity. If you have a project, internship, or job opening — I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactItems.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 flex-shrink-0 bg-card border border-white/8 rounded-xl flex items-center justify-center text-base group-hover:border-accent group-hover:bg-accent/8 transition-all duration-200">
                  {c.icon}
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">{c.label}</div>
                  <div className="text-gray-200 text-sm font-medium">{c.val}</div>
                </div>
              </a>
            ))}

            {/* Availability box */}
            <div className="bg-card border border-white/8 rounded-2xl p-5 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Available Now</span>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Open to internships, junior roles, and freelance projects. Ready to start immediately.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: "🔗", href: "https://linkedin.com/in/wasiq-ali-1a5797365" },
                { icon: "⎇", href: "https://github.com/wasiq-ali" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-card border border-white/8 rounded-xl flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right form (3 cols) */}
          <form
            onSubmit={handle}
            className="lg:col-span-3 bg-card border border-white/8 rounded-2xl p-6 md:p-8 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Your Name", key: "name", type: "text", ph: "John Doe" },
                { label: "Email", key: "email", type: "email", ph: "john@example.com" },
              ].map(({ label, key, type, ph }) => (
                <div key={key}>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">{label}</label>
                  <input
                    type={type}
                    placeholder={ph}
                    required
                    value={form[key]}
                    onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-600 outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Subject</label>
              <input
                type="text"
                placeholder="Internship opportunity / Project help"
                required
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-600 outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-gray-500 text-xs uppercase tracking-widest mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Hi Wasiq, I saw your projects and would like to connect..."
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-600 outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent cursor-pointer text-dark font-bold py-3.5 rounded-xl text-sm hover:shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              ✉️ Send Message
            </button>

            {sent && (
              <p className="text-center text-accent text-sm font-medium">
                ✅ Message sent! I'll reply within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
