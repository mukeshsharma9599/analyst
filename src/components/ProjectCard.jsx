import { useState } from "react"
import { ArrowRight } from "lucide-react"
import MiniDashboard from "./MiniDashboard"
import Tilt from "./Tilt"
import Reveal from "./Reveal"

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)
  const isEven = project.id % 2 === 0

  return (
    <Reveal>
    <Tilt
      max={5}
      className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 group"
      style={{
        boxShadow: hovered
          ? "0 30px 70px rgba(0,0,0,0.45), 0 0 40px rgba(6,182,212,0.08)"
          : "0 0 0 rgba(0,0,0,0)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <div className="lg:w-[55%] relative overflow-hidden">
          <div
            className={`transition-transform duration-500 ${
              hovered ? "scale-[1.03]" : "scale-100"
            }`}
          >
            <MiniDashboard project={project} />
          </div>
          <div className="absolute top-4 left-4">
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-cyan-300 px-3 py-1 rounded-full backdrop-blur-sm">
              {project.status}
            </span>
          </div>
        </div>

        <div className="lg:w-[45%] flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-neutral-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 bg-white/5 text-neutral-300 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 bg-black/30 rounded-xl">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key}>
                  <p className="text-lg md:text-xl font-bold text-white">
                    {value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500 capitalize">
                    {key}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-400">{project.results}</span>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link"
            >
              Explore
              <ArrowRight
                size={16}
                className={`transition-transform duration-300 ${
                  hovered ? "translate-x-1" : ""
                }`}
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    </Tilt>
    </Reveal>
  )
}
