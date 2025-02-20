import Image from "next/image"

const projects = [
  {
    title: "Real State",
    description: "Landing page of Real State",
    image: "/real-state.png",
    bgColor: "bg-yellow-400",
    link: "https://real-state-kerwin.vercel.app/"
  },
  {
    title: "Shoes Ecommerce",
    description: "Landing Page shoes ecommerce design",
    image: "/shoes-ecommerce.png",
    bgColor: "bg-gray-200",
    link: "https://shoe-ecomerce.vercel.app/"
  },
  {
    title: "Shoes Nike",
    description: "Landing Page of Nike Website",
    image: "/nikeweb.png",
    bgColor: "bg-gray-300",
    link: "https://nike-web-site-kerwin.vercel.app/"

  },
  {
    title: "Managment System",
    description: "Managment System Landing Page",
    image: "/managment.png",
    bgColor: "bg-gray-100",
    link: "https://management-system-kerwin.vercel.app/"
  },
  {
    title: "Task Managment",
    description: "A Task management system when you can create, edit, delete task.",
    image: "/TaskManagment.png",
    bgColor: "bg-gray-100",
    link: "https://github.com/KerwinAngeles/TaskManagement?tab=readme-ov-file"
  },
  {
    title: "Employ System",
    description: "An employability system where you can find jobs, create jobs, and notice when the company publish a job.",
    image: "/linkdingSystem.png",
    bgColor: "bg-gray-100",
    link: "https://github.com/KerwinAngeles/EmployabilitySystem"
  },
  {
    title: "Patient System",
    description: "A system when you can managment all the function an a hospital.",
    image: "/PatientSystem.png",
    bgColor: "bg-gray-100",
    link: "https://github.com/KerwinAngeles/EmployabilitySystem"
  },
]

export function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto clear-start">
      {projects.map((project, index) => (
        <a href={project.link} className="cursor-pointer" target="_black">
        <div key={index} className="group relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
          <div className={`aspect-video relative ${project.bgColor}`}>
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-containt" />            
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-center p-4">
              <h3 className="text-white font-bold">{project.title}</h3>
              <p className="text-gray-200 text-sm">{project.description}</p>
            </div>
          </div>
        </div>
        </a>

      ))}
    </div>
  )
}

