"use client"

import { useState, useEffect, useRef } from "react"

interface TerminalLine {
  label: string
  value: string
  color: string
}

const securityLogs: TerminalLine[] = [
  { label: "status", value: "Wazuh active-response enabled", color: "text-amber-400" },
  { label: "mitre", value: "credential access mapped", color: "text-amber-400" },
  { label: "nids", value: "Suricata custom rules loaded", color: "text-amber-400" },
  { label: "cti", value: "AbuseIPDB + VirusTotal enrichment", color: "text-amber-400" },
  { label: "siem", value: "Real-time correlation active", color: "text-emerald-400" },
  { label: "ids", value: "Anomaly detection: ONLINE", color: "text-emerald-400" },
]

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami    - About me",
    "  skills    - Technical skills",
    "  tools     - Security tools I use",
    "  certs     - Certifications",
    "  contact   - Get in touch",
    "  clear     - Clear terminal",
  ],
  whoami: [
    "Saad El Mountassir",
    "Junior Cybersecurity Analyst",
    "SOC | DevSecOps | Infrastructure Security",
    "",
    "Passionate about securing systems from detection",
    "to deployment with a focus on automation.",
  ],
  skills: [
    "Technical Skills:",
    "  [################] SIEM/XDR (Wazuh, Elastic)",
    "  [##############  ] Network Security (pfSense, Suricata)",
    "  [###############-] DevSecOps (GitLab CI/CD, Docker)",
    "  [##############  ] Threat Intelligence & Hunting",
    "  [#############   ] Incident Response & Forensics",
  ],
  tools: [
    "Security Tools:",
    "  > Wazuh SIEM/XDR",
    "  > Suricata IDS/IPS",
    "  > pfSense Firewall",
    "  > Nmap, Nessus, OpenVAS",
    "  > Wireshark, tcpdump",
    "  > GitLab CI/CD Security",
    "  > Docker Security",
  ],
  certs: [
    "Certifications:",
    "  [+] ISC2 Certified in Cybersecurity (CC)",
    "  [+] Cisco Networking Basics",
    "  [+] Cisco Network Defense",
    "  [+] ISO/IEC 27001 Associate",
  ],
  contact: [
    "Get in touch:",
    "  Email: elmountassirsaad@gmail.com",
    "  LinkedIn: linkedin.com/in/saad-el-mountassir",
    "  GitHub: github.com/elmountassirsaad7",
  ],
}

export function SecurityTerminal() {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<{ type: "command" | "output"; text: string }[]>([])
  const [isInteractive, setIsInteractive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Typing animation for initial logs
  useEffect(() => {
    if (currentIndex < securityLogs.length && !isInteractive) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, securityLogs[currentIndex]])
        setCurrentIndex(prev => prev + 1)
      }, 600)
      return () => clearTimeout(timer)
    } else if (currentIndex >= securityLogs.length) {
      setIsTyping(false)
    }
  }, [currentIndex, isInteractive])

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedLines, history])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setHistory(prev => [...prev, { type: "command", text: cmd }])

    if (trimmedCmd === "clear") {
      setHistory([])
      setDisplayedLines([])
      setCurrentIndex(0)
      setIsInteractive(false)
      setIsTyping(true)
      return
    }

    const response = commands[trimmedCmd]
    if (response) {
      response.forEach((line, i) => {
        setTimeout(() => {
          setHistory(prev => [...prev, { type: "output", text: line }])
        }, i * 50)
      })
    } else {
      setHistory(prev => [
        ...prev,
        { type: "output", text: `Command not found: ${trimmedCmd}` },
        { type: "output", text: 'Type "help" for available commands' },
      ])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  const activateInteractive = () => {
    setIsInteractive(true)
    inputRef.current?.focus()
  }

  return (
    <div 
      className="w-full max-w-lg rounded-lg overflow-hidden bg-[#1a2f2f] border border-[#2a4a4a] shadow-2xl"
      onClick={activateInteractive}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#152525] border-b border-[#2a4a4a]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#3b5a5a] hover:bg-red-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-[#3b5a5a] hover:bg-yellow-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-[#3b5a5a] hover:bg-green-500 transition-colors cursor-pointer" />
        </div>
        <span className="text-xs text-[#5a8a8a] ml-2 font-mono">security@soc-workstation</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-emerald-400 font-mono">LIVE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="p-4 font-mono text-sm h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#2a4a4a] scrollbar-track-transparent"
      >
        {/* Initial security logs */}
        {!isInteractive && displayedLines.map((line, i) => (
          <div key={i} className="flex gap-4 mb-2 animate-fadeIn">
            <span className={`${line.color} min-w-[60px]`}>{line.label}</span>
            <span className="text-[#8ab4b4]">{line.value}</span>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && !isInteractive && (
          <div className="flex items-center gap-2 text-[#5a8a8a]">
            <span className="animate-pulse">_</span>
          </div>
        )}

        {/* Interactive mode */}
        {isInteractive && (
          <>
            <div className="text-[#5a8a8a] mb-2">
              {'>'} Interactive mode enabled. Type &quot;help&quot; for commands.
            </div>
            {history.map((item, i) => (
              <div key={i} className="mb-1">
                {item.type === "command" ? (
                  <div className="flex gap-2">
                    <span className="text-emerald-400">$</span>
                    <span className="text-[#c8e0e0]">{item.text}</span>
                  </div>
                ) : (
                  <div className="text-[#8ab4b4] pl-4">{item.text}</div>
                )}
              </div>
            ))}
          </>
        )}

        {/* Command prompt hint */}
        {!isTyping && !isInteractive && (
          <div className="mt-4 text-[#5a8a8a] text-xs animate-fadeIn">
            Click to enter interactive mode...
          </div>
        )}

        {/* Interactive input */}
        {isInteractive && (
          <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
            <span className="text-emerald-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-[#c8e0e0] outline-none caret-emerald-400"
              autoFocus
              placeholder="type a command..."
            />
          </form>
        )}
      </div>
    </div>
  )
}
