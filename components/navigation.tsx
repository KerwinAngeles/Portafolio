"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <div className="p-1 bg-[#1A1E23] dark:bg-gray-800 rounded-lg max-w-[400px] mx-auto">
      <div className="flex">
        <button
          onClick={() => onTabChange("portfolio")}
          className={cn(
            "flex-1 px-6 py-2 text-sm font-medium rounded-md transition-all",
            activeTab === "portfolio" ? "bg-white text-black dark:bg-gray-200" : "text-gray-400 hover:text-white",
          )}
        >
          Projects
        </button>
        
        <button
          onClick={() => onTabChange("skills")}
          className={cn(
            "flex-1 px-6 py-2 text-sm font-medium rounded-md transition-all",
            activeTab === "skills" ? "bg-white text-black dark:bg-gray-200" : "text-gray-400 hover:text-white",
          )}
        >
          Skills
        </button>
       
      </div>
    </div>
  )
}

