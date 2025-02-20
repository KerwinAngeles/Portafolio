import Image from "next/image"
import profile from "../public/profileAstronaut.jpeg"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"


export function ProfileHeader() {
  return (
    <div className="flex justify-center items-center text-center space-y-4 gap-4">
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2">
        <Image
          src={profile}
          alt="profile"
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-xl font-bold text-black dark:text-white">Kerwin Angeles</h1>
        <p className="text-gray-700 dark:text-gray-400">Software Developer</p>
      </div>
    </div>
  )
}

