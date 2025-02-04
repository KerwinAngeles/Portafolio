import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import { FaDev } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <link rel="icon" href="/icon.svg" />
       <title>Portafolio</title>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["light", "dark"]}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'