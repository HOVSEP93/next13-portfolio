// export interface RepoProps {
//   name: string
//   description: string
//   stars: number
//   forks: number
//   language: "TypeScript" | "JavaScript"
// }

export type ProjectsCardProps = {
  project: Project
}

export type Project = {
  title: string
  description: string
  href: string
  language: "TypeScript" | "JavaScript"
}
