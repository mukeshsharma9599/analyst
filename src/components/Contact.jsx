import { Mail, Linkedin, Github, ArrowDown } from "lucide-react"
import { profile } from "../data/profile"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-[80vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Get in Touch
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.05] tracking-tight mb-8">
            Let's turn data
            <br />
            into decisions.
          </h2>

          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl mb-12">
            Data-focused professional with customer operations background,
            developing skills in analysis, visualization and AI.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={profile.email ? `mailto:${profile.email}` : "#"}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-neutral-950 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href={profile.linkedin ? `https://${profile.linkedin}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github ? `https://${profile.github}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <ArrowDown size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
