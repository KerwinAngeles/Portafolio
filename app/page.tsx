"use client"

import { Settings } from "lucide-react"
import { useState } from "react"
import { ProfileHeader } from "@/components/profile-header"
import { Stats } from "@/components/stats"
import { Actions } from "@/components/actions"
import { Navigation } from "@/components/navigation"
import { Portfolio } from "@/components/portfolio"
import { Skills } from "@/components/skills"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  const [activeTab, setActiveTab] = useState("portfolio")

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-[#0D1117] text-gray-900 dark:text-gray-300">
      <div className="fixed top-4 right-4 flex items-center gap-2 z-50">
        <ThemeToggle />
        
      </div>

      <main className="max-w-4xl mx-auto space-y-8 px-4 py-8">
        <ProfileHeader />
        <Actions />
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "portfolio" ? <Portfolio /> : <Skills />}

        <footer className="text-center text-sm text-gray-500 dark:text-gray-500 pt-8">
          © Kerwin Angeles. 2022 All rights reserved
        </footer>
      </main>
    </div>
  )
}

