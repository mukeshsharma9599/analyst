import { Download, FileText, Mail, MapPin, Phone, Award } from "lucide-react"
import { profile } from "../data/profile"
import { experience } from "../data/experience"
import { education, languages, professionalQualification } from "../data/education"
import { skills } from "../data/skills"

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-neutral-900">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-label">Resume</span>
            <h2 className="editorial-heading text-white">
              Experience
              <br />& Background
            </h2>
          </div>
          <a
            href={profile.resumeUrl}
            download
            className="btn-primary flex items-center gap-2 self-start md:self-auto"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="space-y-12 md:space-y-16">
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FileText className="text-cyan-400" size={18} />
              Professional Summary
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              {profile.summary}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={job.id} className={`border-l-2 ${index === 2 ? "border-cyan-400" : "border-neutral-700"} pl-6`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h4 className="text-white font-semibold">{job.role}</h4>
                    <span className="text-xs text-neutral-500 whitespace-nowrap">
                      {job.startDate} - {job.endDate}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-sm font-medium mb-1">
                    {job.company}
                  </p>
                  <p className="text-neutral-500 text-xs mb-2">{job.process}</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {job.description}
                  </p>
                  {job.transferable && index === 2 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.transferable.map((skill) => (
                        <span key={skill} className="text-[10px] px-2 py-1 bg-white/5 text-neutral-400 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-neutral-700 pl-6">
                  <h4 className="text-white font-semibold">{edu.level} — {edu.institution}</h4>
                  {edu.school && (
                    <p className="text-neutral-500 text-sm">{edu.school}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-white font-medium text-sm">{skillGroup.category}</h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      skillGroup.level === "Core" ? "bg-green-400/20 text-green-400" :
                      skillGroup.level === "Working" ? "bg-blue-400/20 text-blue-400" :
                      "bg-yellow-400/20 text-yellow-400"
                    }`}>
                      {skillGroup.level}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="text-sm px-3 py-1 bg-white/5 text-neutral-300 rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span key={lang} className="text-sm px-4 py-2 bg-white/5 text-neutral-300 rounded-full">{lang}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Qualifications</h3>
            <div className="flex items-start gap-3 text-neutral-300">
              <Award className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <p className="text-white font-medium">{professionalQualification.computerKnowledge}</p>
                <p className="text-sm">Typing speed: {professionalQualification.typingSpeed}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-300">
                <Phone size={16} />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300">
                <MapPin size={16} />
                <span>{profile.location}</span>
              </div>
              {profile.email && (
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors">
                  <Mail size={16} />
                  <span>{profile.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
