"use client"

import { useState } from "react"

interface Skill {
  name: string
  icon: React.ReactNode
}

interface SkillCategory {
  title: string
  color: string
  skills: Skill[]
}

const categories: SkillCategory[] = [
  {
    title: "FOCUS",
    color: "text-teal-500",
    skills: [
      { name: "SOC L1", icon: <ShieldIcon /> },
      { name: "SIEM/XDR", icon: <RadarIcon /> },
      { name: "Network Security", icon: <NetworkIcon /> },
    ],
  },
  {
    title: "TOOLS",
    color: "text-teal-500",
    skills: [
      { name: "Wazuh", icon: <TerminalIcon /> },
      { name: "Suricata", icon: <AlertIcon /> },
      { name: "pfSense", icon: <FirewallIcon /> },
      { name: "GitLab CI/CD", icon: <GitIcon /> },
    ],
  },
  {
    title: "LANGUAGES",
    color: "text-teal-500",
    skills: [
      { name: "Arabic", icon: <GlobeIcon /> },
      { name: "French", icon: <GlobeIcon /> },
      { name: "English", icon: <GlobeIcon /> },
    ],
  },
]

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="w-full max-w-2xl">
      {/* Tab Navigation */}
      <div className="flex gap-1 mb-6 bg-[#f5f5f0] p-1 rounded-lg">
        {categories.map((cat, index) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(index)}
            className={`flex-1 px-4 py-2 text-xs font-bold tracking-wider transition-all duration-300 rounded-md ${
              activeCategory === index
                ? "bg-[#1a2f2f] text-white shadow-lg"
                : "text-[#1a2f2f] hover:bg-[#e8e8e0]"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {categories[activeCategory].skills.map((skill, index) => (
          <div
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            className={`group relative flex flex-col items-center justify-center p-4 rounded-xl bg-white border-2 transition-all duration-300 cursor-pointer
              ${hoveredSkill === skill.name 
                ? "border-teal-500 shadow-lg shadow-teal-500/20 -translate-y-1" 
                : "border-[#e8e8e0] hover:border-teal-300"
              }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`mb-2 transition-all duration-300 ${
              hoveredSkill === skill.name ? "text-teal-600 scale-110" : "text-[#1a2f2f]"
            }`}>
              {skill.icon}
            </div>
            <span className={`text-sm font-medium text-center transition-colors duration-300 ${
              hoveredSkill === skill.name ? "text-teal-700" : "text-[#3a3a3a]"
            }`}>
              {skill.name}
            </span>
            
            {/* Pulse effect on hover */}
            {hoveredSkill === skill.name && (
              <div className="absolute inset-0 rounded-xl bg-teal-500/5 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {/* Stats Row */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <StatCard label="Incidents Handled" value="150+" />
        <StatCard label="Rules Written" value="50+" />
        <StatCard label="Systems Secured" value="20+" />
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center p-4 rounded-lg bg-gradient-to-br from-[#1a2f2f] to-[#2a4a4a] text-white">
      <div className="text-2xl font-bold text-teal-400">{value}</div>
      <div className="text-xs text-[#8ab4b4] mt-1">{label}</div>
    </div>
  )
}

// Icon Components
function ShieldIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function RadarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  )
}

function TerminalIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  )
}

function FirewallIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  )
}

function GitIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  )
}
