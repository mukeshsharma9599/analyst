import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"
import Reveal from "./Reveal"

export default function FeaturedWork() {
  return (
    <section id="featured" className="section-padding bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal>
        <div className="mb-16 md:mb-24">
          <span className="section-label">Projects / Practical Work</span>
          <h2 className="editorial-heading text-white mb-6">
            Projects that move
            <br />
            the needle.
          </h2>
          <p className="body-limited">
            A selection of data analysis projects demonstrating business impact
            through insight and visualization.
          </p>
        </div>
        </Reveal>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
