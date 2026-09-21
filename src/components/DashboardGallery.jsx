import { useEffect, useRef, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts"
import { dashboardItems } from "../data/dashboards"
import Tilt from "./Tilt"
import Reveal from "./Reveal"

const salesData = [
  { name: "Jan", revenue: 142, target: 130 },
  { name: "Feb", revenue: 165, target: 145 },
  { name: "Mar", revenue: 158, target: 155 },
  { name: "Apr", revenue: 192, target: 170 },
  { name: "May", revenue: 218, target: 185 },
  { name: "Jun", revenue: 240, target: 200 },
]

const regionData = [
  { name: "North", value: 35 },
  { name: "South", value: 25 },
  { name: "East", value: 22 },
  { name: "West", value: 18 },
]

const trafficData = [
  { name: "Mon", visits: 4200 },
  { name: "Tue", visits: 5100 },
  { name: "Wed", visits: 4800 },
  { name: "Thu", visits: 6200 },
  { name: "Fri", visits: 5900 },
  { name: "Sat", visits: 3800 },
  { name: "Sun", visits: 3200 },
]

const COLORS = ["#0ea5e9", "#06b6d4", "#3b82f6", "#6366f1"]

function KPICard({ label, value, change, positive }) {
  return (
    <div className="bg-black/30 rounded-lg p-3">
      <p className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1">
        {label}
      </p>
      <div className="flex items-end justify-between">
        <p className="text-xl font-bold text-white">{value}</p>
        <span
          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
            positive
              ? "bg-green-400/20 text-green-400"
              : "bg-red-400/20 text-red-400"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  )
}

function DashboardShell({ title, subtitle, children }) {
  return (
    <div className="bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden">
      <div className="p-4 md:p-6 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold text-sm">{title}</h3>
            <p className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">
              {subtitle}
            </p>
          </div>
          <div className="flex gap-1.5">
            {["7D", "30D", "90D"].map((period) => (
              <button
                key={period}
                className={`text-[10px] px-2 py-1 rounded font-medium ${
                  period === "30D"
                    ? "bg-white/10 text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6">{children}</div>
    </div>
  )
}

function DashboardPreview({ type }) {
  if (type === "Sales") {
    return (
      <>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <KPICard label="Revenue" value="DEMO" change="Demo" positive />
          <KPICard label="Target" value="DEMO" change="Demo" positive={false} />
          <KPICard label="Orders" value="DEMO" change="Demo" positive />
          <KPICard label="AOV" value="DEMO" change="Demo" positive />
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="dg1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="name" stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
              <YAxis stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
              <Tooltip contentStyle={{ background: "#111", border: "1px solid #ffffff20", borderRadius: "8px", color: "#fff", fontSize: "12px" }} />
              <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" fill="url(#dg1)" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#6366f1" strokeDasharray="5 5" strokeWidth={1.5} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    )
  }

  if (type === "Customer") {
    return (
      <>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <KPICard label="Total" value="DEMO" change="Demo" positive />
          <KPICard label="Churn" value="DEMO" change="Demo" positive />
          <KPICard label="Retention" value="DEMO" change="Demo" positive />
          <KPICard label="NPS" value="DEMO" change="Demo" positive />
        </div>
        <div className="flex h-48">
          <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={regionData} cx="50%" cy="50%" innerRadius={35} outerRadius={65} dataKey="value" stroke="none">
                  {regionData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center gap-2 w-[40%]">
            {regionData.map((r, i) => (
              <div key={r.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-[10px] text-neutral-400 flex-1">{r.name}</span>
                <span className="text-[10px] text-white font-semibold">{r.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <KPICard label="Visits" value="DEMO" change="Demo" positive />
        <KPICard label="Conv." value="DEMO" change="Demo" positive />
        <KPICard label="CAC" value="DEMO" change="Demo" positive />
        <KPICard label="ROAS" value="DEMO" change="Demo" positive />
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
            <XAxis dataKey="name" stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
            <YAxis stroke="#ffffff30" tick={{ fill: "#ffffff50", fontSize: 10 }} />
            <Tooltip contentStyle={{ background: "#111", border: "1px solid #ffffff20", borderRadius: "8px", color: "#fff", fontSize: "12px" }} />
            <Bar dataKey="visits" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default function DashboardGallery() {
  return (
    <section id="dashboards" className="section-padding bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal>
        <div className="mb-16 md:mb-24">
          <span className="section-label">Dashboards</span>
          <h2 className="editorial-heading text-white mb-6">
            Interactive analytical
            <br />
            views for informed
            <br />
            decisions.
          </h2>
        </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 120}>
            <Tilt max={7} className="h-full">
            <DashboardShell title={item.title} subtitle={`${item.type} Demo Dashboard`}>
              <DashboardPreview type={item.type} />
            </DashboardShell>
            </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
