import { BarChart3, Search, LineChart, TrendingUp } from "lucide-react"
import { capabilitySteps } from "../data/components"

const icons = [BarChart3, Search, LineChart, TrendingUp]

export default function CapabilityStrip() {
  return (
    <section
      id="capabilities"
      className="w-full bg-neutral-900 py-16 md:py-20 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {capabilitySteps.map((step, index) => {
            const Icon = icons[index]
            return (
              <div key={step.number} className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/5 rounded-lg">
                  <Icon className="text-cyan-400" size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-[0.15em] block mb-1">
                    {step.number}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
