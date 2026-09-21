import { ArrowDown, Github } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { profile } from "../data/profile"
import Tilt from "./Tilt"
import Reveal from "./Reveal"

const trendData = [
  { name: "Jan", value: 142 },
  { name: "Feb", value: 165 },
  { name: "Mar", value: 158 },
  { name: "Apr", value: 192 },
  { name: "May", value: 218 },
  { name: "Jun", value: 240 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden bg-neutral-950"
    >
      <div
        className="absolute inset-0 opacity-[0.35] animate-grid-pan"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-cyan-500/15 blur-[120px] animate-drift" />
      <div className="absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-blue-600/15 blur-[140px] animate-drift-slow" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[120px] animate-drift" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[2px] bg-cyan-400" />
                <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
                  {profile.title}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.05] tracking-tight mb-8 whitespace-pre-line">
                {profile.headline}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl mb-4">
                {profile.subtitle}
              </p>

              <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mb-10">
                Data-focused professional with experience in customer operations,
                problem solving and KPI-driven environments, developing skills in
                data analysis, visualization, automation and AI.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#featured"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-neutral-950 rounded-full font-semibold text-sm hover:bg-neutral-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore My Work
                  <ArrowDown size={16} />
                </a>
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                >
                  Download Resume
                </a>
                <a
                  href={profile.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250} className="animate-floaty">
            <Tilt max={10} className="bg-neutral-900/80 rounded-2xl border border-white/10 p-5 md:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Demo Trend
                  </p>
                  <p className="text-2xl font-bold text-white">Revenue Growth</p>
                </div>
                <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full font-semibold">
                  +18.4%
                </span>
              </div>
              <div className="h-56 md:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="heroTrend" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="name" stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 11 }} />
                    <YAxis stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        background: "#111",
                        border: "1px solid #ffffff20",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#0ea5e9"
                      fill="url(#heroTrend)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Tilt>
          </Reveal>
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
