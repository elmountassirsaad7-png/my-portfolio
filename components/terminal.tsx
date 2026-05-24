"use client"

import { useEffect, useState } from "react"

const commands: Record<string, string> = {
  help: "Available commands: about, skills, projects, contact, clear",
  about:
    "Saad El Mountassir - Junior Cybersecurity Analyst specializing in SOC operations, DevSecOps pipelines, and infrastructure hardening.",
  skills:
    "SIEM/XDR | Wazuh | MITRE ATT&CK | KQL | GitLab CI/CD | Docker | Semgrep | pfSense | Suricata | VLANs | OWASP",
  projects: "Type 'ls projects' to see all projects",
  "ls projects":
    "1. Global SI Security & Wazuh Detection Lab\n2. Secure CI/CD for OCP Gantour\n3. Secure Network Architecture in GNS3\n4. Linux Security Audit & Hardening",
  contact:
    "email: elmountassirsaad7@gmail.com\nlinkedin: linkedin.com/in/saad-el-mountassir\nphone: +212 7 62 84 74 83",
  whoami: "security@soc-workstation",
  clear: "",
  pwd: "/home/security/portfolio",
  date: new Date().toLocaleString(),
  uname: "SecureOS 5.15.0-generic x86_64",
}

export function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    { command: "", output: '> Welcome to the security terminal. Type "help" for commands.' },
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()

    if (trimmedCmd === "clear") {
      setHistory([{ command: "", output: '> Terminal cleared. Type "help" for commands.' }])
      return
    }

    let output = commands[trimmedCmd]
    if (!output && trimmedCmd !== "") {
      output = `Command not found: ${cmd}. Type "help" for available commands.`
    }

    setHistory((prev) => [...prev, { command: cmd, output: output || "" }])
    setCommandHistory((prev) => [...prev, cmd])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "")
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "")
      } else {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      commands.date = new Date().toLocaleString()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
      <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="font-mono text-sm text-muted-foreground">security@soc-workstation</span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium text-primary">LIVE</span>
        </div>
      </div>

      <div className="h-64 space-y-2 overflow-y-auto p-4 font-mono text-sm">
        {history.map((item, i) => (
          <div key={i}>
            {item.command && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">$</span>
                <span>{item.command}</span>
              </div>
            )}
            {item.output && <pre className="mt-1 whitespace-pre-wrap pl-4 text-foreground/90">{item.output}</pre>}
          </div>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-primary">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-foreground caret-primary outline-none"
            placeholder="type a command..."
            autoFocus
          />
          <span className="animate-pulse text-primary">_</span>
        </div>
      </div>
    </div>
  )
}
