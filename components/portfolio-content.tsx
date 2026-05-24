import { ArrowUpRight, Download, Linkedin, Mail, MapPin, Network, Phone, Shield, Code2, Lock } from "lucide-react"
import Link from "next/link"

const skills = [
  { icon: Shield, title: "SOC & Detection", description: "Wazuh, MITRE ATT&CK, KQL", color: "text-cyan-500" },
  { icon: Code2, title: "DevSecOps", description: "GitLab CI/CD, Docker, Semgrep", color: "text-emerald-500" },
  { icon: Network, title: "Network Security", description: "pfSense, Suricata, VLANs", color: "text-blue-500" },
  { icon: Lock, title: "AppSec", description: "OWASP, JWT, CSRF, Rate Limiting", color: "text-amber-500" },
]

const projects = [
  {
    category: "SIEM / SOC Automation",
    title: "Global SI Security & Wazuh Detection Lab",
    description:
      "Built an end-to-end security environment with Wazuh SIEM/XDR, Suricata NIDS, pfSense segmentation, AWS, and alert automation through Telegram/Jira ticketing.",
    impact:
      "Improved detection coverage with 8 custom MITRE ATT&CK-mapped Wazuh rules, 9 KQL dashboard widgets in Azure Data Explorer, and 3 automated active-response actions.",
    tags: ["Wazuh", "Suricata", "pfSense", "AWS", "MITRE ATT&CK"],
  },
  {
    category: "DevSecOps / AppSec",
    title: "Secure CI/CD for OCP Gantour Site",
    description:
      "Implemented a DevSecOps flow with GitLab CI/CD, Docker, Semgrep, OWASP ZAP, Trivy, Gitleaks, and Retire.js.",
    impact:
      "Shifted security checks left to catch vulnerabilities, dependency risks, and secret exposure earlier.",
    tags: ["GitLab CI/CD", "Docker", "OWASP ZAP", "Semgrep", "Trivy"],
  },
  {
    category: "Network Security",
    title: "Secure Network Architecture in GNS3",
    description:
      "Designed segmented infrastructure with VLANs, inter-VLAN routing, NAT, ACLs, DMZ, VPN, IDS/IPS, and packet analysis.",
    impact: "Reduced lateral movement risk with validated segmentation and tested control paths.",
    tags: ["VLANs", "ACLs", "DMZ", "VPN", "IDS/IPS"],
  },
  {
    category: "Hardening / Audit",
    title: "Linux Security Audit & Hardening",
    description:
      "Performed configuration analysis, OpenVAS/Lynis scans, and hardening aligned with ANSSI and DGSSI recommendations.",
    impact: "Strengthened baseline host security and improved repeatable audit readiness.",
    tags: ["OpenVAS", "Lynis", "ANSSI", "DGSSI"],
  },
]

const experience = [
  {
    period: "May 2026 - Present",
    title: "Full-Stack Security Engineer Intern",
    company: "CleverCube AI",
    description:
      "Improving security for a medical imaging platform with OWASP level 2 controls, JWT hardening, CSRF protection, rate limiting, and compliance support.",
  },
  {
    period: "Oct 2025 - Mar 2026",
    title: "Cybersecurity Training - SOC & Infrastructure",
    company: "JobInTech | MTNRA x CDG x Maroc Numeric Cluster",
    description:
      "Deployed Wazuh SIEM/XDR, configured Suricata IDS/IPS, managed pfSense and VLANs, and automated alert pipelines with active response workflows.",
  },
  {
    period: "Apr 2025 - Jun 2025",
    title: "Security Intern - DevSecOps & Application Security",
    company: "ZYNERATOR | Site Gantour OCP",
    description:
      "Built CI/CD security controls with SAST/DAST scanning, container checks, secret detection, and dependency risk analysis.",
  },
]

const certifications = [
  "ISC2 Certified in Cybersecurity (CC)",
  "Cisco Introduction to Cybersecurity",
  "Cisco Networking Basics",
  "Cisco Network Defense",
]

const cvLinks = [
  { label: "SOC CV", href: "/cv/EN-SOC-ELMOUNTASSIR-SAAD.pdf" },
  { label: "DevSecOps CV", href: "/cv/EN-DEVSECOPS-ELMOUNTASSIR-SAAD.pdf" },
  { label: "Infrastructure CV", href: "/cv/EN-INFRASEC-ELMOUNTASSIR-SAAD.pdf" },
  { label: "Cybersecurity Consultant CV", href: "/cv/EN-CONSCYB-ELMOUNTASSIR-SAAD.pdf" },
]

export function PortfolioContent() {
  return (
    <div className="space-y-20 lg:space-y-24">
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.title} className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40">
              <skill.icon className={`mb-3 h-6 w-6 ${skill.color}`} />
              <h3 className="mb-1 font-semibold text-foreground">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Selected Projects</span>
          <h2 className="mt-2 text-balance text-2xl font-bold text-foreground lg:text-3xl">
            Projects That Connect Security Engineering With Operations
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{project.title}</h3>
              <p className="mb-4 mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <p className="mb-4 text-sm">
                <span className="font-semibold text-foreground">Impact: </span>
                <span className="text-muted-foreground">{project.impact}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Experience</span>
          <h2 className="mt-2 text-balance text-2xl font-bold text-foreground lg:text-3xl">
            Professional Experience and Training
          </h2>
        </div>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="relative border-l-2 border-border pl-6 transition-colors hover:border-primary/50">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <span className="text-xs font-medium text-primary">{exp.period}</span>
              <h3 className="mt-1 text-lg font-bold text-foreground">{exp.title}</h3>
              <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Target Roles</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground lg:text-3xl">Role Focus</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-primary/30 bg-card p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Primary Target</span>
            <p className="mt-2 font-medium text-foreground">Junior SOC Analyst / Cyber Defense Analyst</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Secondary Target</span>
            <p className="mt-2 font-medium text-foreground">DevSecOps / AppSec Intern</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Additional Fit</span>
            <p className="mt-2 font-medium text-foreground">Infrastructure Security / Consultant Junior</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Proof of Skills</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground lg:text-3xl">
            Certifications and Practical Readiness
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="pb-12">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
          <h2 className="mt-2 text-balance text-2xl font-bold text-foreground lg:text-3xl">
            Available for SOC, DevSecOps, Infrastructure, and AppSec roles
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="mailto:elmountassirsaad7@gmail.com"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs text-muted-foreground">Email</span>
              <p className="truncate font-medium text-foreground">elmountassirsaad7@gmail.com</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>

          <Link
            href="tel:+212762847483"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs text-muted-foreground">Phone</span>
              <p className="font-medium text-foreground">+212 7 62 84 74 83</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/saad-el-mountassir/"
            target="_blank"
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs text-muted-foreground">LinkedIn</span>
              <p className="truncate font-medium text-foreground">linkedin.com/in/saad-el-mountassir</p>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </Link>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs text-muted-foreground">Location</span>
              <p className="text-sm font-medium text-foreground">
                Marrakech, Morocco - Open to remote, hybrid, internship, or relocation opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 font-semibold text-foreground">Download Role-Focused CVs</h3>
          <div className="flex flex-wrap gap-3">
            {cvLinks.map((cv) => (
              <Link
                key={cv.label}
                href={cv.href}
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                {cv.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
