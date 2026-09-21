import { ArrowDown, Play, Github } from "lucide-react"
import { profile } from "../data/profile"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
              {profile.title}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-bold text-white leading-[1.05] tracking-tight mb-8 whitespace-pre-line">
            {profile.headline}
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl mb-4">
            {profile.subtitle}
          </p>

          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mb-10">
            Data-focused professional with experience in customer operations,
            problem solving and KPI-driven environments, developing skills in
            data analysis, visualization, automation and AI.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#featured"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-neutral-950 rounded-full font-semibold text-sm hover:bg-neutral-100 transition-colors"
            >
              Explore My Work
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Download Resume
            </a>
            <a
              href={profile.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-8 bottom-12 hidden lg:flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 rotate-90 origin-center mb-8">
          Scroll
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-neutral-400 to-transparent" />
      </div>
    </section>
  )
}
