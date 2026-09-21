import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts"
import { projects } from "../data/projects"

const salesData = [
  { name: "Jan", value: 142000 },
  { name: "Feb", value: 165000 },
  { name: "Mar", value: 158000 },
  { name: "Apr", value: 192000 },
  { name: "May", value: 218000 },
  { name: "Jun", value: 240000 },
]

const regionData = [
  { name: "North", value: 35 },
  { name: "South", value: 25 },
  { name: "East", value: 22 },
  { name: "West", value: 18 },
]

const churnData = [
  { name: "Retained", value: 77 },
  { name: "Churned", value: 23 },
]

const productData = [
  { name: "Product A", sales: 4200 },
  { name: "Product B", sales: 3100 },
  { name: "Product C", sales: 2800 },
  { name: "Product D", sales: 1900 },
]

const COLORS = ["#0ea5e9", "#06b6d4", "#3b82f6", "#6366f1"]

function MiniBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
        <XAxis dataKey="name" stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
        <YAxis stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
        <Tooltip
          contentStyle={{
            background: "#111",
            border: "1px solid #ffffff20",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Area type="monotone" dataKey="value" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function MiniDonut({ data, colors }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={70}
          dataKey="value"
          stroke="none"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default function MiniDashboard({ project }) {
  if (project.id === 1) {
    return (
      <div className="h-full min-h-[320px] md:min-h-[400px] bg-neutral-900 p-4 md:p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500">Revenue</p>
            <p className="text-2xl font-bold text-white">₹2.4M</p>
          </div>
          <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full font-semibold">+18.4%</span>
        </div>
        <div className="h-[40%]">
          <MiniBarChart data={salesData} />
        </div>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: "Orders", value: "18,420" },
            { label: "Customers", value: "12,840" },
            { label: "Growth", value: "+18.4%" },
          ].map((m) => (
            <div key={m.label} className="bg-black/30 rounded-lg p-3">
              <p className="text-sm font-bold text-white">{m.value}</p>
              <p className="text-[9px] uppercase tracking-wider text-neutral-500">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (project.id === 2) {
    return (
      <div className="h-full min-h-[320px] md:min-h-[400px] bg-neutral-900 p-4 md:p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500">Churn Rate</p>
            <p className="text-2xl font-bold text-white">23%</p>
          </div>
          <span className="text-xs bg-red-400/20 text-red-400 px-2 py-1 rounded-full font-semibold">-23%</span>
        </div>
        <div className="flex gap-4 h-[40%]">
          <div className="flex-1">
            <MiniDonut data={churnData} colors={["#0ea5e9", "#ef4444"]} />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-3">
            {[
              { label: "At-Risk", value: "1,840", color: "bg-red-400" },
              { label: "Retained", value: "6,410", color: "bg-cyan-400" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-[10px] text-neutral-400">{item.label}</span>
                </div>
                <p className="text-base font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-2">Top Segments</p>
          {productData.slice(0, 3).map((p, i) => (
            <div key={p.name} className="flex items-center gap-2 mb-1.5">
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(p.sales / 4200) * 100}%`,
                    backgroundColor: COLORS[i],
                  }}
                />
              </div>
              <span className="text-[10px] text-neutral-400">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="h-full min-h-[320px] md:min-h-[400px] bg-neutral-900 p-4 md:p-6 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-neutral-500">Carbon Impact</p>
          <p className="text-2xl font-bold text-white">-15%</p>
        </div>
        <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full font-semibold">↓ 15%</span>
      </div>
      <div className="h-[40%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={productData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis dataKey="name" stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
            <YAxis stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
            <Tooltip
              contentStyle={{
                background: "#111",
                border: "1px solid #ffffff20",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="sales" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {[
          { label: "Sites", value: "4" },
          { label: "Reduction", value: "15%" },
        ].map((m) => (
          <div key={m.label} className="bg-black/30 rounded-lg p-3">
            <p className="text-sm font-bold text-white">{m.value}</p>
            <p className="text-[9px] uppercase tracking-wider text-neutral-500">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { salesData, regionData, productData, churnData, COLORS }
