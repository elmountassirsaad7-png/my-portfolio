import { SecurityTerminal } from "@/components/security-terminal"
import { SkillsShowcase } from "@/components/skills-showcase"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f0f0e8]">
      <section className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <p className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
              Junior Cybersecurity Analyst
            </p>
            <h1 className="text-[42px] font-bold leading-[1.05] text-[#0f1720] sm:text-[52px]">
              Analyst | SOC <span className="text-[#0c4f4f]">&bull;</span>
              <br />
              DevSecOps <span className="text-[#0c4f4f]">&bull;</span>
              <br />
              Infrastructure Security
            </h1>
            <p className="max-w-xl text-sm leading-7 text-[#4f5b5f]">
              I help teams secure systems from detection to deployment: SIEM/XDR,
              intrusion detection, secure network architecture, CI/CD security,
              vulnerability assessment, and automation.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                className="rounded-md bg-teal-700 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-teal-800"
                href="/cv/EN-SOC-ELMOUNTASSIR-SAAD.pdf"
                download
              >
                Download SOC CV
              </a>
              <a
                className="rounded-md bg-teal-700 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-teal-800"
                href="/cv/EN-DEVSECOPS-ELMOUNTASSIR-SAAD.pdf"
                download
              >
                Download DevSecOps/AppSec CV
              </a>
              <a
                className="rounded-md bg-teal-700 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-teal-800"
                href="/cv/EN-INFRASEC-ELMOUNTASSIR-SAAD.pdf"
                download
              >
                Download Infrastructure CV
              </a>
              <a
                className="rounded-md bg-teal-700 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-teal-800"
                href="/cv/EN-CONSCYB-ELMOUNTASSIR-SAAD.pdf"
                download
              >
                Download Cybersecurity CV
              </a>
              <a
                className="rounded-md border border-[#1a2f2f] px-3 py-1.5 text-[11px] font-semibold text-[#1a2f2f] transition-colors hover:bg-[#1a2f2f] hover:text-white"
                href="mailto:elmountassirsaad7@gmail.com"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:pt-4">
            <SecurityTerminal />
          </div>
        </div>
      </section>

      <section className="container mx-auto border-t border-[#d8d8d0] px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <SkillsShowcase />
        </div>
      </section>
    </main>
  )
}
