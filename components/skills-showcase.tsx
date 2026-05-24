export function SkillsShowcase() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <SkillCard
        title="SOC & Detection"
        details="Wazuh, MITRE ATT&CK, KQL"
      />
      <SkillCard
        title="DevSecOps"
        details="GitLab CI/CD, Docker, Semgrep"
      />
      <SkillCard
        title="Network Security"
        details="pfSense, Suricata, VLANs"
      />
      <SkillCard
        title="AppSec"
        details="OWASP, JWT, CSRF, Rate Limiting"
      />
    </div>
  )
}

function SkillCard({ title, details }: { title: string; details: string }) {
  return (
    <article className="rounded-lg border border-[#d8d8d0] bg-white p-4">
      <h3 className="text-sm font-bold text-[#132127]">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-[#4f5b5f]">{details}</p>
    </article>
  )
}
