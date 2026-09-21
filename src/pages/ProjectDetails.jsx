import { useParams, Link } from "react-router-dom"
import { projects } from "../data/projects"
import { ArrowLeft, ArrowRight } from "lucide-react"
import MiniDashboard, { salesData, regionData, productData, COLORS } from "../components/MiniDashboard"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts"

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="pt-28 min-h-screen bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm inline-flex items-center gap-1">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
            <Link to="/" className="btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    )
  }

  const extendedMetrics = {
    revenue: project.metrics?.revenue || "₹0",
    orders: project.metrics?.orders || "0",
    growth: project.metrics?.growth || "0%",
    customers: project.metrics?.customers || "0",
  }

  return (
    <div className="pt-28 bg-neutral-950 min-h-screen pb-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <Link to="/" className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm mb-8 inline-flex items-center gap-1">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4 block">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/5 mb-12">
          <MiniDashboard project={project} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {Object.entries(extendedMetrics).map(([key, value]) => (
            <div key={key} className="bg-neutral-900 rounded-xl p-6 border border-white/5">
              <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2 capitalize">{key}</p>
              <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-neutral-900 rounded-xl p-6 border border-white/5">
            <h3 className="text-white font-semibold mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-sm px-4 py-2 bg-white/5 text-neutral-300 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
          <div className="bg-neutral-900 rounded-xl p-6 border border-white/5">
            <h3 className="text-white font-semibold mb-4">Results</h3>
            <p className="text-cyan-400 text-lg font-bold">{project.results}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 overflow-hidden mb-16">
          <div className="p-6 border-b border-white/5">
            <h3 className="text-white font-semibold">Extended Visualization</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64">
              <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Revenue Trend</h4>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="detailRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="name" stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
                  <YAxis stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: "#111", border: "1px solid #ffffff20", borderRadius: "8px", color: "#fff" }} />
                  <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="url(#detailRev)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="h-64">
              <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Distribution</h4>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="name" stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
                  <YAxis stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
                  <Tooltip contentStyle={{ background: "#111", border: "1px solid #ffffff20", borderRadius: "8px", color: "#fff" }} />
                  <Bar dataKey="sales" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
