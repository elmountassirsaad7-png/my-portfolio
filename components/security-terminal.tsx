"use client"

import { useEffect, useRef, useState } from "react"

const bootMessage = "$ type a command."

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami",
    "  skills",
    "  certs",
    "  contact",
    "  clear",
  ],
  whoami: [
    "Saad El Mountassir",
    "Junior Cybersecurity Analyst",
    "SOC | DevSecOps | Infrastructure Security",
  ],
  skills: [
    "Core: SOC L1, SIEM/XDR, NIDS, DevSecOps",
    "Tools: Wazuh, Suricata, pfSense, GitLab CI/CD",
  ],
  certs: [
    "ISC2 Certified in Cybersecurity (CC)",
    "Cisco Networking Basics",
    "Cisco Network Defense",
    "ISO/IEC 27001 Associate",
  ],
  contact: [
    "Email: elmountassirsaad7@gmail.com",
    "LinkedIn: linkedin.com/in/saad-el-mountassir",
    "GitHub: github.com/elmountassirsaad7-png",
  ],
}

export function SecurityTerminal() {
  const [bootText, setBootText] = useState("")
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Array<{ type: "command" | "output"; text: string }>>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      index += 1
      setBootText(bootMessage.slice(0, index))
      if (index >= bootMessage.length) clearInterval(timer)
    }, 45)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight
    }
  }, [history])

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    if (cmd === "clear") {
      setHistory([])
      return
    }

    const output = commands[cmd]
    if (!output) {
      setHistory((prev) => [
        ...prev,
        { type: "output", text: `Command not found: ${cmd}` },
        { type: "output", text: 'Type "help" to list commands.' },
      ])
      return
    }

    setHistory((prev) => [...prev, ...output.map((line) => ({ type: "output" as const, text: line }))])
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = input.trim()
    if (!value) return
    setHistory((prev) => [...prev, { type: "command", text: value }])
    runCommand(value)
    setInput("")
  }

  return (
    <div
      className="w-full max-w-[460px] overflow-hidden rounded-md border border-[#274344] bg-[#11272a] shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-[#274344] bg-[#0f2022] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#35595a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#35595a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#35595a]" />
        </div>
        <span className="ml-2 font-mono text-[10px] text-[#5f8f90]">security@soc-workstation</span>
        <span className="ml-auto font-mono text-[10px] text-[#13d59f]">● LIVE</span>
      </div>

      <div ref={panelRef} className="h-[270px] overflow-y-auto p-4 font-mono text-[12px] text-[#90bec0]">
        <p className="mb-1 text-[#5f8f90]">{">"}Interactive mode enabled. Type "help" for commands.</p>
        <p className="mb-3 text-[#19d6a3]">
          {bootText}
          <span className="animate-pulse">_</span>
        </p>

        {history.map((entry, index) => (
          <p key={`${entry.type}-${index}`} className={entry.type === "command" ? "text-[#d3f0ee]" : "text-[#8db8ba]"}>
            {entry.type === "command" ? `$ ${entry.text}` : entry.text}
          </p>
        ))}

        <form onSubmit={onSubmit} className="mt-3 flex items-center gap-2">
          <span className="text-[#18d4a1]">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent text-[#d3f0ee] outline-none"
            placeholder="type a command..."
          />
        </form>
      </div>
    </div>
  )
}
