"use client"

import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { useState } from "react"
import Link from "next/link"

type Lang = "en" | "fr"

const copy = {
  en: {
    nav: { about: "About", projects: "Projects", experience: "Experience", contact: "Contact", cv: "CV" },
    profile: {
      role: "Junior Cybersecurity Analyst",
      summary: "SOC, DevSecOps, infrastructure security, and AppSec candidate based in Marrakech.",
      availability: "Open to internship / junior roles",
      focus: "SOC, DevSecOps, Network Security",
    },
    sections: {
      bioEyebrow: "Biography",
      bioTitle: "Junior Cybersecurity Analyst",
      bio:
        "I help teams secure systems from detection to deployment: SIEM/XDR, intrusion detection, secure network architecture, CI/CD security, vulnerability assessment, and automation.",
      interests: "Interests",
      education: "Education",
      skillsEyebrow: "Technical Stack",
      skillsTitle: "Skills",
      projectsEyebrow: "Selected Work",
      projectsTitle: "Projects",
      projectDetails: "Project details",
      screenshots: "Screenshots",
      noScreenshot: "No screenshot added yet for this project.",
      experienceEyebrow: "Career",
      experienceTitle: "Experience",
      experienceDetails: "Experience details",
      certEyebrow: "Proof",
      certTitle: "Certifications",
      contactEyebrow: "Contact",
      contactTitle: "Available for junior security roles",
      open: "Open",
      downloadPdf: "Download PDF",
    },
    interests: [
      "SOC Analyst",
      "DevSecOps and application security",
      "Network and infrastructure security",
      "Cybersecurity consultant",
    ],
    education: [
      {
        degree: "Bachelor degree in Cybersecurity",
        school: "Faculty of Sciences and Technology - Gueliz, Marrakech",
        period: "Sep 2021 - Jun 2026",
      },
    ],
    projects: [
      {
        title: "Secure Network Architecture (GNS3)",
        type: "Network security project",
        summary:
          "Designed a secure network architecture with segmentation, access control, DMZ, VPN, Fortigate firewall, and offensive/defensive validation.",
        details: [
          "Implemented VLAN, VTP, inter-VLAN routing, NAT, ACL, DMZ, and VPN.",
          "Integrated firewall controls with Fortigate and IDS/IPS detection/prevention.",
          "Performed network analysis with Wireshark and security tests with Nmap and Metasploit.",
          "Recruiter value: demonstrates end-to-end network security understanding, from design to validation.",
        ],
        meta: "GNS3, VLAN, VTP, NAT, ACL, DMZ, VPN, Fortigate, IDS/IPS, Wireshark, Nmap, Metasploit",
        screenshots: [
          {
            src: "/projects/packet-tracer-network.jpg",
            alt: "Segmented secure network topology with multiple routed sites",
            caption: "Segmented network topology",
          },
        ],
      },
      {
        title: "DevSecOps Approach for the OCP Gantour Site",
        type: "DevSecOps project",
        summary:
          "Implemented a secure CI/CD chain to integrate application, container, secret, and dependency checks into the delivery lifecycle.",
        details: [
          "Built a GitLab CI/CD pipeline to compile, build, and control deliverables.",
          "Used Docker containerization and image scanning with Trivy.",
          "Integrated SAST/DAST with Semgrep and OWASP ZAP.",
          "Detected secrets with Gitleaks and analyzed dependencies with Retire.js.",
          "Recruiter value: proves a concrete shift-left approach applicable in a product team.",
        ],
        meta: "GitLab CI/CD, Docker, Semgrep, OWASP ZAP, Trivy, Gitleaks, Retire.js",
        screenshots: [
          {
            src: "/projects/gitlab-devsecops-pipeline.png",
            alt: "GitLab CI pipeline with compile, build image and security stages",
            caption: "GitLab pipeline security stages",
          },
        ],
      },
      {
        title: "Linux Security Audit and Hardening",
        type: "Hardening and audit project",
        summary:
          "Linux security audit based on ANSSI and DGSSI recommendations, including configuration analysis, vulnerability scans, and system hardening.",
        details: [
          "Analyzed system configuration and identified security gaps.",
          "Ran vulnerability scans with Lynis and OpenVAS.",
          "Applied hardening measures aligned with ANSSI and DGSSI recommendations.",
          "Recruiter value: shows the ability to turn an audit into a concrete remediation plan.",
        ],
        meta: "Linux, Lynis, OpenVAS, ANSSI, DGSSI, hardening",
        screenshots: [],
      },
      {
        title: "Application Development and Global IS Security",
        type: "SOC / SIEM / Cloud security project",
        summary:
          "SIEM/EDR administration, NIDS detection, network security, AWS cloud security, and SOC automation to reduce MTTD/MTTR.",
        details: [
          "Administered Wazuh SIEM/EDR and Suricata NIDS intrusion detection.",
          "Secured network components with pfSense, VLANs, and AWS cloud integration.",
          "Automated alerts with Python/Bash, Telegram notifications, and Jira ticketing.",
          "Simulated 11 post-exploitation attacks from Kali Linux: Meterpreter, SAM dump, bruteforce, and persistence.",
          "Built real-time detection with 8 custom Wazuh rules mapped to MITRE ATT&CK, levels 8 to 15.",
          "Implemented automated Active Response: firewall-drop, host-deny, and kill-process.",
          "Built a Python CTI pipeline enriching alerts through AbuseIPDB and VirusTotal Smart Trigger.",
          "Created an Azure Data Explorer dashboard with 9 KQL widgets, 5 SOC L1 playbooks, and real-time FIM.",
        ],
        meta: "Wazuh, Suricata, pfSense, AWS, Python, Bash, MITRE ATT&CK, KQL, AbuseIPDB, VirusTotal",
        screenshots: [
          {
            src: "/projects/soc-cloud-vpn-wazuh.png",
            alt: "Hybrid AWS, VPN, VLAN and Wazuh SOC architecture diagram",
            caption: "Hybrid SOC architecture",
          },
          {
            src: "/projects/suricata-wazuh-ids-ips.png",
            alt: "Suricata IDS and Wazuh active response workflow",
            caption: "Suricata to Wazuh active response",
          },
          {
            src: "/projects/soc-telegram-jira.png",
            alt: "Wazuh alert workflow to Telegram and Jira ticketing",
            caption: "Telegram and Jira alert automation",
          },
          {
            src: "/projects/aws-infrastructure-security.png",
            alt: "AWS web security architecture with WAF, EC2, TLS, RDS and backups",
            caption: "AWS infrastructure security model",
          },
        ],
      },
    ],
    experience: [
      {
        period: "Oct 2025 - Mar 2026",
        title: "Cybersecurity Training - SOC & Infrastructure",
        company: "JobInTech | Ministry of Digital Transition (MTNRA) x CDG x Maroc Numeric Cluster",
        summary:
          "Hands-on SOC, SIEM/XDR, IDS/IPS, secure networking, alert automation, and attack simulation training.",
        details: [
          "Deployed and administered Wazuh (SIEM/XDR): log collection, correlation, FIM, and real-time intrusion detection.",
          "Developed an automated alert pipeline with Python/Bash: Telegram notifications and Jira ticket creation, significantly reducing MTTD/MTTR.",
          "Configured Suricata IDS/IPS with custom rules; managed pfSense, VLANs 10/20/30, and OpenVPN TCP 8443.",
          "Integrated alerts into Azure Data Explorer for threat trend visualization and analysis.",
          "Simulated a full attack chain, including credential dumping on a Windows VM, and created Wazuh rules with Active Response.",
        ],
      },
      {
        period: "Apr 2025 - Jun 2025",
        title: "Security Intern - DevSecOps & Application Security",
        company: "ZYNERATOR | OCP Gantour Site",
        summary:
          "Security internship focused on DevSecOps integration, application security, and black-box authentication testing.",
        details: [
          "Implemented a DevSecOps approach with GitLab CI/CD, Docker, SAST/DAST using Semgrep, Trivy, Gitleaks, and Retire.js.",
          "Simulated a black-box multi-threaded Python brute-force attack to evaluate the authentication module security.",
        ],
      },
      {
        period: "May 2026 - Present",
        title: "Full-Stack Security Engineer Intern",
        company: "CleverCube AI",
        summary:
          "Full-stack security internship on a medical imaging platform, covering application security, CI/CD, and sensitive data compliance.",
        details: [
          "Improved the security of a medical imaging platform by implementing OWASP level 2 controls.",
          "Hardened JWT authentication, added CSRF protection, and implemented rate limiting.",
          "Designed and configured the application CI/CD pipeline.",
          "Studied and applied CNDP/Law 09-08 compliance requirements related to sensitive health data processing.",
        ],
      },
    ],
  },
  fr: {
    nav: { about: "A propos", projects: "Projets", experience: "Experience", contact: "Contact", cv: "CV" },
    profile: {
      role: "Analyste Cybersécurité Junior",
      summary: "Candidat SOC, DevSecOps, sécurité infrastructure et AppSec basé à Marrakech.",
      availability: "Ouvert aux stages / postes junior",
      focus: "SOC, DevSecOps, Sécurité réseau",
    },
    sections: {
      bioEyebrow: "Biographie",
      bioTitle: "Analyste Cybersécurité Junior",
      bio:
        "J'aide les équipes à sécuriser les systèmes de la détection au déploiement : SIEM/XDR, détection d'intrusion, architecture réseau sécurisée, sécurité CI/CD, évaluation des vulnérabilités et automatisation.",
      interests: "Centres d'intérêt",
      education: "Formation",
      skillsEyebrow: "Stack technique",
      skillsTitle: "Compétences",
      projectsEyebrow: "Réalisations",
      projectsTitle: "Projets",
      projectDetails: "Détails du projet",
      screenshots: "Captures d'écran",
      noScreenshot: "Aucune capture ajoutée pour ce projet pour le moment.",
      experienceEyebrow: "Parcours",
      experienceTitle: "Expérience",
      experienceDetails: "Détails de l'expérience",
      certEyebrow: "Preuves",
      certTitle: "Certifications",
      contactEyebrow: "Contact",
      contactTitle: "Disponible pour des rôles junior en cybersécurité",
      open: "Ouvrir",
      downloadPdf: "Télécharger le PDF",
    },
    interests: [
      "Analyste SOC",
      "DevSecOps et sécurité applicative",
      "Sécurité réseau et infrastructure",
      "Consultant cybersécurité",
    ],
    education: [
      {
        degree: "Licence en Cybersécurité",
        school: "Faculté des Sciences et Techniques - Guéliz, Marrakech",
        period: "Sept. 2021 - Juin 2026",
      },
    ],
    projects: [
      {
        title: "Architecture réseau sécurisée (GNS3)",
        type: "Projet sécurité réseau",
        summary:
          "Conception d'une architecture réseau sécurisée avec segmentation, contrôle d'accès, DMZ, VPN, firewall Fortigate et validation offensive/défensive.",
        details: [
          "Mise en place de VLAN, VTP, routage inter-VLAN, NAT, ACL, DMZ et VPN.",
          "Intégration de contrôles firewall avec Fortigate et détection/prévention IDS/IPS.",
          "Analyse réseau avec Wireshark et tests de sécurité avec Nmap et Metasploit.",
          "Valeur recruteur : compréhension complète de la sécurité réseau, du design à la validation.",
        ],
        meta: "GNS3, VLAN, VTP, NAT, ACL, DMZ, VPN, Fortigate, IDS/IPS, Wireshark, Nmap, Metasploit",
        screenshots: [
          {
            src: "/projects/packet-tracer-network.jpg",
            alt: "Topologie réseau sécurisée segmentée avec plusieurs sites routés",
            caption: "Topologie réseau segmentée",
          },
        ],
      },
      {
        title: "Démarche DevSecOps sur le site Gantour de l'OCP",
        type: "Projet DevSecOps",
        summary:
          "Mise en oeuvre d'une chaîne CI/CD sécurisée pour intégrer les contrôles applicatifs, containers, secrets et dépendances dans le cycle de livraison.",
        details: [
          "Pipeline CI/CD avec GitLab pour compiler, construire et contrôler les livrables.",
          "Conteneurisation Docker et scan d'images avec Trivy.",
          "SAST/DAST avec Semgrep et OWASP ZAP.",
          "Détection de secrets avec Gitleaks et analyse des dépendances avec Retire.js.",
          "Valeur recruteur : approche shift-left concrète et applicable en équipe produit.",
        ],
        meta: "GitLab CI/CD, Docker, Semgrep, OWASP ZAP, Trivy, Gitleaks, Retire.js",
        screenshots: [
          {
            src: "/projects/gitlab-devsecops-pipeline.png",
            alt: "Pipeline GitLab CI avec étapes compilation, build image et sécurité",
            caption: "Étapes sécurité du pipeline GitLab",
          },
        ],
      },
      {
        title: "Audit et durcissement de systèmes Linux",
        type: "Projet audit et hardening",
        summary:
          "Audit de sécurité Linux basé sur les recommandations ANSSI et DGSSI, avec analyse de configuration, scans de vulnérabilités et durcissement système.",
        details: [
          "Analyse de configuration système et identification des écarts de sécurité.",
          "Scans de vulnérabilités avec Lynis et OpenVAS.",
          "Durcissement selon les recommandations ANSSI et DGSSI.",
          "Valeur recruteur : capacité à transformer un audit en plan de remédiation concret.",
        ],
        meta: "Linux, Lynis, OpenVAS, ANSSI, DGSSI, hardening",
        screenshots: [],
      },
      {
        title: "Développement d'applications & sécurisation globale du SI",
        type: "Projet SOC / SIEM / Cloud security",
        summary:
          "Administration SIEM/EDR, détection NIDS, sécurité réseau, cloud AWS et automatisation SOC pour réduire le MTTD/MTTR.",
        details: [
          "Administration SIEM/EDR avec Wazuh et détection d'intrusion NIDS avec Suricata.",
          "Sécurité réseau avec pfSense, VLANs et intégration cloud AWS.",
          "Automatisation des alertes via Python/Bash, notifications Telegram et ticketing Jira.",
          "Simulation de 11 attaques post-exploitation depuis Kali Linux : Meterpreter, SAM dump, bruteforce et persistence.",
          "Détection temps réel avec 8 règles Wazuh custom mappées MITRE ATT&CK, niveaux 8 à 15.",
          "Active Response automatisée : firewall-drop, host-deny et kill-process.",
          "Pipeline CTI Python enrichissant les alertes via AbuseIPDB et VirusTotal Smart Trigger.",
          "Dashboard Azure Data Explorer avec 9 vignettes KQL, 5 playbooks SOC L1 et FIM temps réel.",
        ],
        meta: "Wazuh, Suricata, pfSense, AWS, Python, Bash, MITRE ATT&CK, KQL, AbuseIPDB, VirusTotal",
        screenshots: [
          {
            src: "/projects/soc-cloud-vpn-wazuh.png",
            alt: "Architecture SOC hybride AWS, VPN, VLAN et Wazuh",
            caption: "Architecture SOC hybride",
          },
          {
            src: "/projects/suricata-wazuh-ids-ips.png",
            alt: "Workflow Suricata IDS et Wazuh Active Response",
            caption: "Suricata vers Wazuh Active Response",
          },
          {
            src: "/projects/soc-telegram-jira.png",
            alt: "Workflow d'alertes Wazuh vers Telegram et Jira",
            caption: "Automatisation Telegram et Jira",
          },
          {
            src: "/projects/aws-infrastructure-security.png",
            alt: "Architecture sécurité AWS avec WAF, EC2, TLS, RDS et sauvegardes",
            caption: "Modèle de sécurité infrastructure AWS",
          },
        ],
      },
    ],
    experience: [
      {
        period: "Oct. 2025 - Mars 2026",
        title: "Formation Cybersécurité - SOC & Infrastructure",
        company: "JobInTech | Ministère de la Transition Numérique (MTNRA) x CDG x Maroc Numeric Cluster",
        summary:
          "Formation pratique orientée SOC, SIEM/XDR, IDS/IPS, réseau sécurisé, automatisation d'alertes et simulation d'attaques.",
        details: [
          "Déploiement et administration de Wazuh (SIEM/XDR) : collecte de logs, corrélation, FIM et détection d'intrusion en temps réel.",
          "Développement d'un pipeline d'alertes automatisé Python/Bash : notifications Telegram et création de tickets Jira, réduisant significativement le MTTD/MTTR.",
          "Configuration de Suricata IDS/IPS avec règles personnalisées ; gestion pfSense, VLANs 10/20/30 et OpenVPN TCP 8443.",
          "Intégration des alertes dans Azure Data Explorer pour visualisation et analyse des tendances de menaces.",
          "Simulation d'une chaîne d'attaque complète, credential dumping sur VM Windows, et création de règles Wazuh avec Active Response.",
        ],
      },
      {
        period: "Avr. 2025 - Juin 2025",
        title: "Stagiaire Sécurité - DevSecOps & Sécurité Applicative",
        company: "ZYNERATOR | Site Gantour OCP",
        summary:
          "Stage sécurité centré sur l'intégration DevSecOps, la sécurité applicative et l'évaluation black-box du module d'authentification.",
        details: [
          "Implémentation d'une démarche DevSecOps avec CI/CD GitLab, Docker, SAST/DAST avec Semgrep, Trivy, Gitleaks et Retire.js.",
          "Simulation d'attaque Black Box par brute force multi-thread Python pour évaluer la sécurité du module d'authentification.",
        ],
      },
      {
        period: "Mai 2026 - Présent",
        title: "Full-Stack Security Engineer Intern",
        company: "CleverCube AI",
        summary:
          "Stage full-stack security sur une plateforme d'imagerie médicale, avec sécurisation applicative, CI/CD et conformité données sensibles.",
        details: [
          "Amélioration de la sécurité d'une plateforme d'imagerie médicale par la mise en oeuvre de contrôles OWASP de niveau 2.",
          "Renforcement de l'authentification JWT, protection contre les attaques CSRF et limitation du débit.",
          "Conception et configuration du pipeline CI/CD de l'application.",
          "Étude et application des exigences de conformité CNDP/Loi 09-08 relatives au traitement des données de santé sensibles.",
        ],
      },
    ],
  },
}

const skills = [
  "Wazuh",
  "Suricata",
  "pfSense",
  "MITRE ATT&CK",
  "KQL",
  "GitLab CI/CD",
  "Docker",
  "Semgrep",
  "Trivy",
  "Gitleaks",
  "OWASP",
  "JWT",
  "CSRF",
  "VLANs",
  "AWS WAF",
  "GNS3",
  "Fortigate",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "Lynis",
  "OpenVAS",
  "ANSSI",
  "DGSSI",
  "AbuseIPDB",
  "VirusTotal",
  "Azure Data Explorer",
  "Bash",
]

const certifications = [
  "ISC2 Certified in Cybersecurity (CC)",
  "Cisco Introduction to Cybersecurity",
  "Cisco Networking Basics",
  "Cisco Network Defense",
]

export function PortfolioContent() {
  const [lang, setLang] = useState<Lang>("en")
  const t = copy[lang]
  const otherLang = lang === "en" ? "FR" : "EN"

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-[#1f2937]">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
          <Link href="#" className="text-sm font-bold tracking-tight text-slate-950">
            Saad Elmountassir
          </Link>
          <div className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
            <Link href="#about" className="hover:text-sky-700">
              {t.nav.about}
            </Link>
            <Link href="#projects" className="hover:text-sky-700">
              {t.nav.projects}
            </Link>
            <Link href="#experience" className="hover:text-sky-700">
              {t.nav.experience}
            </Link>
            <Link href="#contact" className="hover:text-sky-700">
              {t.nav.contact}
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "fr" : "en")}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-sky-200 hover:text-sky-700"
              aria-label="Switch language"
            >
              {otherLang}
            </button>
            <Link
              href="/cv/CV-ELMOUNTASSIR-SAAD.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-800"
            >
              <Download className="h-4 w-4" />
              {t.nav.cv}
            </Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[280px_1fr] lg:py-14">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <ProfileCard lang={lang} />
        </aside>

        <div className="space-y-12">
          <Section id="about" eyebrow={t.sections.bioEyebrow} title={t.sections.bioTitle}>
            <p className="text-lg leading-8 text-slate-700">{t.sections.bio}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <InfoBlock icon={BookOpen} title={t.sections.interests} items={t.interests} />
              <InfoBlock
                icon={GraduationCap}
                title={t.sections.education}
                items={t.education.map((item) => `${item.degree} - ${item.school} (${item.period})`)}
              />
            </div>
          </Section>

          <Section id="skills" eyebrow={t.sections.skillsEyebrow} title={t.sections.skillsTitle}>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </Section>

          <Section id="projects" eyebrow={t.sections.projectsEyebrow} title={t.sections.projectsTitle}>
            <div className="grid gap-5 md:grid-cols-2">
              {t.projects.map((project) => (
                <details
                  key={project.title}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition open:shadow-md hover:border-sky-200"
                >
                  <summary className="cursor-pointer list-none">
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">{project.type}</p>
                          <h3 className="mt-2 text-lg font-bold text-slate-950">{project.title}</h3>
                        </div>
                        <span className="rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 group-open:bg-sky-50 group-open:text-sky-700">
                          {t.sections.open}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
                      <p className="mt-4 text-xs font-medium text-slate-500">{project.meta}</p>
                    </div>
                  </summary>

                  <div className="border-t border-slate-200 p-5">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">{t.sections.projectDetails}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {project.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-700" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-slate-500">{t.sections.screenshots}</h4>
                    {project.screenshots.length > 0 ? (
                      <div className="mt-3 grid gap-3">
                        {project.screenshots.map((screenshot) => (
                          <figure key={screenshot.src} className="overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                            <img src={screenshot.src} alt={screenshot.alt} className="w-full object-cover" />
                            <figcaption className="border-t border-slate-200 px-3 py-2 text-xs font-medium text-slate-500">
                              {screenshot.caption}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3 rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
                        {t.sections.noScreenshot}
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </Section>

          <Section id="experience" eyebrow={t.sections.experienceEyebrow} title={t.sections.experienceTitle}>
            <div className="space-y-5">
              {t.experience.map((item) => (
                <details
                  key={`${item.period}-${item.title}`}
                  className="group rounded-lg border border-slate-200 bg-white shadow-sm transition open:shadow-md hover:border-sky-200"
                >
                  <summary className="cursor-pointer list-none p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-bold text-slate-950">{item.title}</h3>
                        <p className="text-sm font-medium text-sky-700">{item.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-500">{item.period}</span>
                        <span className="rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 group-open:bg-sky-50 group-open:text-sky-700">
                          {t.sections.open}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                  </summary>

                  <div className="border-t border-slate-200 p-5">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500">{t.sections.experienceDetails}</h4>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sky-700" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </Section>

          <Section id="certifications" eyebrow={t.sections.certEyebrow} title={t.sections.certTitle}>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <Award className="h-5 w-5 text-sky-700" />
                  <span className="text-sm font-medium text-slate-700">{cert}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" eyebrow={t.sections.contactEyebrow} title={t.sections.contactTitle}>
            <div className="grid gap-3 sm:grid-cols-2">
              <ContactLink href="mailto:elmountassirsaad7@gmail.com" icon={Mail} label="Email" value="elmountassirsaad7@gmail.com" />
              <ContactLink href="https://www.linkedin.com/in/el-mountassir-saad-89383b324/" icon={Linkedin} label="LinkedIn" value="el-mountassir-saad" />
              <ContactLink href="https://github.com/elmountassirsaad7-png" icon={Github} label="GitHub" value="elmountassirsaad7-png" />
              <ContactLink href="tel:+212762847483" icon={Phone} label="Phone" value="+212 7 62 84 74 83" />
            </div>
          </Section>
        </div>
      </div>
    </main>
  )
}

function ProfileCard({ lang }: { lang: Lang }) {
  const t = copy[lang]

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-slate-200 text-3xl font-bold text-sky-800">
        SE
      </div>
      <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">Saad Elmountassir</h1>
      <p className="mt-2 text-sm font-semibold text-sky-700">{t.profile.role}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{t.profile.summary}</p>

      <div className="mt-5 space-y-3 text-left text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-sky-700" />
          Marrakech, Morocco
        </div>
        <div className="flex items-center gap-2">
          <BriefcaseBusiness className="h-4 w-4 text-sky-700" />
          {t.profile.availability}
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-sky-700" />
          {t.profile.focus}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-3">
        <Link href="mailto:elmountassirsaad7@gmail.com" aria-label="Email" className="rounded-md border border-slate-200 p-2 text-slate-600 hover:text-sky-700">
          <Mail className="h-4 w-4" />
        </Link>
        <Link href="https://www.linkedin.com/in/el-mountassir-saad-89383b324/" aria-label="LinkedIn" className="rounded-md border border-slate-200 p-2 text-slate-600 hover:text-sky-700">
          <Linkedin className="h-4 w-4" />
        </Link>
        <Link href="https://github.com/elmountassirsaad7-png" aria-label="GitHub" className="rounded-md border border-slate-200 p-2 text-slate-600 hover:text-sky-700">
          <Github className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

function InfoBlock({ icon: Icon, title, items }: { icon: LucideIcon; title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-sky-700" />
        <h3 className="font-bold text-slate-950">{title}</h3>
      </div>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
}: {
  href: string
  icon: LucideIcon
  label: string
  value: string
}) {
  return (
    <Link href={href} className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-200">
      <Icon className="h-5 w-5 text-sky-700" />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
        <p className="truncate text-sm font-medium text-slate-800">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-sky-700" />
    </Link>
  )
}
