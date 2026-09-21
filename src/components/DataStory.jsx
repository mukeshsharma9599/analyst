import { useEffect, useRef, useState } from "react"
import { dataStorySteps } from "../data/components"

export default function DataStory() {
  const [visibleSteps, setVisibleSteps] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dataStorySteps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, i])
            }, i * 200)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="data-story"
      ref={sectionRef}
      className="section-padding bg-neutral-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-20 md:mb-32">
          <span className="section-label">Analytical Process</span>
          <h2 className="editorial-heading text-white">
            From raw data
            <br />
            to <span className="text-cyan-400">action</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {dataStorySteps.map((step, index) => {
              const isVisible = visibleSteps.includes(index)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={step}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div
                      className="transition-all duration-700"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : isLeft
                          ? "translateX(-40px)"
                          : "translateX(40px)",
                      }}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {step}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute left-[10px] md:left-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-neutral-950 md:-translate-x-1/2 z-10 transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0)",
                    }}
                  />

                  <div className="md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
