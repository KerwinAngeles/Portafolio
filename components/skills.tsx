import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiGit,
  SiFigma,
  SiVercel,
  SiJavascript,
  SiMysql,
} from "react-icons/si"

import { TbBrandCSharp } from "react-icons/tb";

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#d2ef13"},
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "C#", icon: TbBrandCSharp, color: "#47A248" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mysql", icon: SiMysql, color: "#ffffff" },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
]

export function Skills() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-in-out">
      {skillCategories.map((category) => (
        <div key={category.name} className="space-y-6">
          <h3 className="text-lg font-medium text-center text-gray-800 dark:text-gray-200">{category.name}</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-wrap md:flex-wrap">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl
                         bg-gray-800 dark:bg-gray-800/50 
                         backdrop-blur-sm
                         border border-white/10 dark:border-gray-700/50
                         hover:border-yellow-400/50 dark:hover:border-yellow-400/50
                         transition-all duration-300 ease-in-out
                         hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10"
              >
                <skill.icon
                  className="w-8 h-8 mb-2 transition-colors duration-300"
                  style={{
                    color: skill.color,
                    filter: "brightness(1.2)",
                  }}
                />
                <span className="text-xs text-gray-300 dark:text-gray-300 text-center group-hover:text-yellow-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

