import { SecurityTerminal } from "@/components/security-terminal"
import { SkillsShowcase } from "@/components/skills-showcase"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f0f0e8]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-xs font-bold tracking-widest text-teal-700 uppercase">
              Junior Cybersecurity Analyst
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
              Analyst | SOC{" "}
              <span className="text-[#1a2f2f]">&bull;</span> DevSecOps{" "}
              <span className="text-[#1a2f2f]">&bull;</span> Infrastructure Security
            </h1>
            <p className="text-[#5a5a5a] text-lg leading-relaxed max-w-xl">
              I help teams secure systems from detection to deployment: SIEM/XDR,
              intrusion detection, secure network architecture, CI/CD security,
              vulnerability assessment, and automation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="px-5 py-2.5 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors">
                Download SOC CV
              </button>
              <button className="px-5 py-2.5 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors">
                Download DevSecOps/AppSec CV
              </button>
              <button className="px-5 py-2.5 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors">
                Download Infrastructure CV
              </button>
              <button className="px-5 py-2.5 bg-teal-700 text-white text-sm font-medium rounded-lg hover:bg-teal-800 transition-colors">
                Download Cybersecurity CV
              </button>
              <button className="px-5 py-2.5 border-2 border-[#1a2f2f] text-[#1a2f2f] text-sm font-medium rounded-lg hover:bg-[#1a2f2f] hover:text-white transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Terminal */}
          <div className="flex justify-center lg:justify-end">
            <SecurityTerminal />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16 border-t border-[#d8d8d0]">
        <div className="max-w-2xl mx-auto">
          <SkillsShowcase />
        </div>
      </section>
    </main>
  )
}
