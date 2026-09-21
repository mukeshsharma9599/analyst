import { useEffect, useRef, useState } from "react"
import { caseStudies } from "../data/caseStudies"

function CaseStudyCard({ study, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
    >
      <div
        className={`transition-all duration-700 ${
          isLeft && visible
            ? "opacity-100 translate-y-0"
            : isLeft
            ? "opacity-0 translate-y-8"
            : ""
        }`}
      >
        <div className="aspect-[4/3] rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center">
              <span className="text-lg font-semibold text-neutral-500">{study.category}</span>
            </div>
            <span className="text-xs text-neutral-500 uppercase tracking-wider">
              {study.category} Case Study
            </span>
            <p className="text-[10px] text-neutral-600 mt-2 uppercase tracking-wider">Demo Analysis</p>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-700 delay-200 ${
          isLeft && visible
            ? "opacity-100 translate-y-0"
            : isLeft
            ? "opacity-0 translate-y-8"
            : ""
        }`}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4 block">
          {study.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
          {study.title}
        </h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Challenge
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {study.challenge}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Approach
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {study.approach}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Solution
            </h4>
            <p className="text-white font-medium leading-relaxed">
              {study.solution}
            </p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border-l-2 border-cyan-400">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Insight
            </h4>
            <p className="text-neutral-300 leading-relaxed text-sm">
              {study.insight}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Outcome
            </h4>
            <p className="text-lg font-bold text-cyan-400">
              {study.outcome}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Recommendation
            </h4>
            <p className="text-neutral-300 leading-relaxed text-sm">
              {study.recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-20 md:mb-32">
          <span className="section-label">Case Studies</span>
          <h2 className="editorial-heading text-white mb-6">
            How data drives
            <br />
            real decisions.
          </h2>
          <p className="body-limited">
            Analytical case studies showing the full journey from problem
            to solution.
          </p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
