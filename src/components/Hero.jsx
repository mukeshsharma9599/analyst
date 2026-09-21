import { ArrowDown, Github } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { profile } from "../data/profile"

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-cyan-400" />
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-[0.2em]">
                {profile.title}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.05] tracking-tight mb-8 whitespace-pre-line">
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

          <div className="bg-neutral-900 rounded-2xl border border-white/10 p-5 md:p-6">
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
