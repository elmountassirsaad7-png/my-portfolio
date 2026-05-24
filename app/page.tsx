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
                Download Cybersecurity Consultant CV
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

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.14em] text-teal-700 uppercase">Selected Projects</p>
            <h2 className="text-3xl font-bold text-[#0f1720]">Projects That Connect Security Engineering With Operations</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-[#d8d8d0] bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-700">SIEM / SOC Automation</p>
              <h3 className="mt-2 text-lg font-bold text-[#132127]">Global SI Security &amp; Wazuh Detection Lab</h3>
              <p className="mt-2 text-sm leading-6 text-[#4f5b5f]">
                Built an end-to-end security environment with Wazuh SIEM/XDR, Suricata NIDS, pfSense segmentation, AWS, and alert automation through Telegram/Jira.
              </p>
              <p className="mt-3 border-t border-[#e3e7e3] pt-3 text-sm text-[#2c3b40]">
                <strong>Impact:</strong> Improved detection coverage with MITRE ATT&amp;CK-mapped rules, automated enrichment, and active-response playbooks.
              </p>
            </article>
            <article className="rounded-lg border border-[#d8d8d0] bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-700">DevSecOps / AppSec</p>
              <h3 className="mt-2 text-lg font-bold text-[#132127]">Secure CI/CD for OCP Gantour Site</h3>
              <p className="mt-2 text-sm leading-6 text-[#4f5b5f]">
                Implemented a DevSecOps flow with GitLab CI/CD, Docker, Semgrep, OWASP ZAP, Trivy, Gitleaks, and Retire.js.
              </p>
              <p className="mt-3 border-t border-[#e3e7e3] pt-3 text-sm text-[#2c3b40]">
                <strong>Impact:</strong> Shifted security checks left to catch vulnerabilities, dependency risks, and secret exposure earlier.
              </p>
            </article>
            <article className="rounded-lg border border-[#d8d8d0] bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-700">Network Security</p>
              <h3 className="mt-2 text-lg font-bold text-[#132127]">Secure Network Architecture in GNS3</h3>
              <p className="mt-2 text-sm leading-6 text-[#4f5b5f]">
                Designed segmented infrastructure with VLANs, inter-VLAN routing, NAT, ACLs, DMZ, VPN, IDS/IPS, and packet analysis.
              </p>
              <p className="mt-3 border-t border-[#e3e7e3] pt-3 text-sm text-[#2c3b40]">
                <strong>Impact:</strong> Reduced lateral movement risk with validated segmentation and tested control paths.
              </p>
            </article>
            <article className="rounded-lg border border-[#d8d8d0] bg-white p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-teal-700">Hardening / Audit</p>
              <h3 className="mt-2 text-lg font-bold text-[#132127]">Linux Security Audit &amp; Hardening</h3>
              <p className="mt-2 text-sm leading-6 text-[#4f5b5f]">
                Performed configuration analysis, OpenVAS/Lynis scans, and hardening aligned with ANSSI and DGSSI recommendations.
              </p>
              <p className="mt-3 border-t border-[#e3e7e3] pt-3 text-sm text-[#2c3b40]">
                <strong>Impact:</strong> Strengthened baseline host security and improved repeatable audit readiness.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#e8ede7]">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold tracking-[0.14em] text-teal-700 uppercase">Experience</p>
              <h2 className="text-3xl font-bold text-[#0f1720]">Professional Experience and Training</h2>
            </div>
            <div className="space-y-3">
              <article className="rounded-lg border border-[#d8d8d0] bg-white p-5">
                <p className="text-xs font-semibold text-[#0c4f4f]">May 2026 - Present</p>
                <h3 className="mt-1 text-lg font-bold text-[#132127]">Full-Stack Security Engineer Intern</h3>
                <p className="text-sm font-semibold text-[#395258]">CleverCube AI</p>
                <p className="mt-2 text-sm leading-6 text-[#4f5b5f]">
                  Improving security for a medical imaging platform with OWASP level 2 controls, JWT hardening, CSRF protection, rate limiting, and compliance support.
                </p>
              </article>
              <article className="rounded-lg border border-[#d8d8d0] bg-white p-5">
                <p className="text-xs font-semibold text-[#0c4f4f]">Oct 2025 - Mar 2026</p>
                <h3 className="mt-1 text-lg font-bold text-[#132127]">Cybersecurity Training - SOC &amp; Infrastructure</h3>
                <p className="text-sm font-semibold text-[#395258]">JobInTech | MTNRA x CDG x Maroc Numeric Cluster</p>
                <p className="mt-2 text-sm leading-6 text-[#4f5b5f]">
                  Deployed Wazuh SIEM/XDR, configured Suricata IDS/IPS, managed pfSense and VLANs, and automated alert pipelines with active response workflows.
                </p>
              </article>
              <article className="rounded-lg border border-[#d8d8d0] bg-white p-5">
                <p className="text-xs font-semibold text-[#0c4f4f]">Apr 2025 - Jun 2025</p>
                <h3 className="mt-1 text-lg font-bold text-[#132127]">Security Intern - DevSecOps &amp; Application Security</h3>
                <p className="text-sm font-semibold text-[#395258]">ZYNERATOR | Site Gantour OCP</p>
                <p className="mt-2 text-sm leading-6 text-[#4f5b5f]">
                  Built CI/CD security controls with SAST/DAST scanning, container checks, secret detection, and dependency risk analysis.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-[0.14em] text-teal-700 uppercase">Target Roles</p>
            <h2 className="text-3xl font-bold text-[#0f1720]">Roles I Am Actively Targeting</h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {[
              "Junior SOC Analyst",
              "Cyber Defense Analyst",
              "DevSecOps Intern",
              "Application Security Intern",
              "Infrastructure Security Analyst",
              "Junior Cybersecurity Consultant",
            ].map((role) => (
              <li key={role} className="rounded-md border border-[#bcd3cc] bg-white px-3 py-2 text-sm font-medium text-[#1d3a3a]">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#132127] text-white">
        <div className="container mx-auto grid gap-6 px-6 py-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-300">Contact</p>
            <h2 className="mt-2 text-3xl font-bold">Available for SOC, DevSecOps, Infrastructure, and AppSec roles.</h2>
          </div>
          <div className="grid gap-3">
            <a className="rounded-md border border-white/25 px-4 py-3 text-sm hover:bg-white/10" href="mailto:elmountassirsaad7@gmail.com">
              Email: elmountassirsaad7@gmail.com
            </a>
            <a className="rounded-md border border-white/25 px-4 py-3 text-sm hover:bg-white/10" href="tel:+212762847483">
              Phone: +212 7 62 84 74 83
            </a>
            <a
              className="rounded-md border border-white/25 px-4 py-3 text-sm hover:bg-white/10"
              href="https://www.linkedin.com/in/saad-el-mountassir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: linkedin.com/in/saad-el-mountassir
            </a>
            <p className="rounded-md border border-white/25 px-4 py-3 text-sm text-slate-200">
              Location: Marrakech, Morocco - Open to remote, internship, junior roles, and international mobility
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
