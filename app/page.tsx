import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { PortfolioContent } from "@/components/portfolio-content"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 lg:px-6">
          <Link href="/" className="text-lg font-bold text-foreground">
            S<span className="text-primary">.</span>E
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Experience
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/elmountassirsaad7-png"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saad-el-mountassir/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:elmountassirsaad7@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </nav>

      <section className="pb-20 pt-28 lg:pb-24 lg:pt-36">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-6">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary">Available for opportunities</span>
            </div>

            <h1 className="text-balance text-4xl font-bold leading-tight text-foreground lg:text-5xl xl:text-6xl">
              Saad El Mountassir
            </h1>

            <p className="text-xl font-semibold text-muted-foreground lg:text-2xl">
              Junior Cybersecurity Analyst
            </p>

            <p className="max-w-xl leading-relaxed text-muted-foreground">
              I help teams secure systems from detection to deployment: SIEM/XDR, intrusion detection, secure network
              architecture, CI/CD security, vulnerability assessment, and automation.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <span className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">SOC</span>
              <span className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">DevSecOps</span>
              <span className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">Infrastructure Security</span>
            </div>

            <p className="max-w-xl text-sm text-muted-foreground">
              Open to: SOC Analyst L1, DevSecOps/AppSec Internship, Infrastructure Security - Remote, France/Europe,
              Morocco, and international mobility.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/cv/EN-SOC-ELMOUNTASSIR-SAAD.pdf"
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Download SOC CV
              </Link>
              <Link
                href="/cv/EN-DEVSECOPS-ELMOUNTASSIR-SAAD.pdf"
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Download DevSecOps CV
              </Link>
              <Link
                href="/cv/EN-INFRASEC-ELMOUNTASSIR-SAAD.pdf"
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Download Infrastructure CV
              </Link>
              <Link
                href="/cv/EN-CONSCYB-ELMOUNTASSIR-SAAD.pdf"
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Download Cybersecurity Consultant CV
              </Link>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <Terminal />
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24" id="projects">
        <div className="mx-auto w-full max-w-6xl px-5 lg:px-6">
          <PortfolioContent />
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row lg:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Saad El Mountassir. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/elmountassirsaad7-png"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saad-el-mountassir/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:elmountassirsaad7@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
