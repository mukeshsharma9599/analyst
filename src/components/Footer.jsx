import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "../data/profile"

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold">{profile.name}</p>
            <p className="text-neutral-500 text-sm mt-1">{profile.title}</p>
          </div>

          <div className="flex items-center gap-4">
            {profile.github && (
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
            <a
              href={profile.email ? `mailto:${profile.email}` : "#"}
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-neutral-600 text-xs">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
