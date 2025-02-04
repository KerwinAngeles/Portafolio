import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Actions() {
  const handleDownloadCV = () => {
    const cvUrl = "/KerwinAngelesCvEs.pdf"
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "kerwinAngelesCV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleDownloadCV}
        className="bg-yellow-400 text-black hover:bg-yellow-500 dark:hover:bg-yellow-500"
      >
        <Download className="w-4 h-4 mr-2" />
        Download CV
      </Button>
    </div>
  )
}

