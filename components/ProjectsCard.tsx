import Link from "next/link"

import { ProjectsCardProps } from "@/types/Project"

const Languages = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
}

const ProjectsCard = ({ project }: ProjectsCardProps) => {
  const languageColor = Languages[project.language]

  return (
    <>
      <Link href={project.href} target="_blank">
        <div className="flex h-28 w-80  flex-col rounded-md border border-slate-400 bg-white/10 p-4 transition-colors duration-75 hover:border-slate-700 dark:border-slate-800 dark:bg-black/10 dark:hover:border-slate-600">
          <h2 className="mb-1 font-semibold">{project.title}</h2>
          <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
            {project.description}
          </p>
          <div className="mt-auto flex flex-row gap-4 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex flex-row items-center">
              {" "}
              <span
                className="mr-1 h-3 w-3  rounded-full"
                style={{
                  background: languageColor,
                  border: `solid 3px ${languageColor}`,
                }}
              />
              {project.language}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProjectsCard
