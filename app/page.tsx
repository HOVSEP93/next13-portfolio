import Link from "next/link"
import { projects } from "@/data/data"
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNextdotjs as SiNextJs,
  SiNodedotjs as SiNodeJs,
  SiNpm,
  SiOracle,
  SiReact,
  SiStyledcomponents as SiStyledComponents,
  SiSupabase,
  SiTailwindcss as SiTailwindCSS,
  SiTypescript,
} from "react-icons/si"

import ProjectsCard from "@/components/ProjectsCard"
import { TechItem } from "@/components/TechItem"

const Home = () => {
  return (
    <section className="container  grid  gap-6 pb-8 pt-6 md:py-10">
      <div className="mt-8 flex flex-col items-start gap-2">
        <h1 className="text-3xl  font-extrabold leading-tight tracking-tighter md:text-4xl ">
          Hey, there 👋
        </h1>

        <p className="text-muted-foreground mb-2 text-xl">
          I&apos;m Hovsep a self-taught Web Developer from the Iraq. My Creative
          skills and experience field of Interest&apos;s are building new Web
          Technologies and Products and also in areas related to Deep Learning
          and Graphic Design make a logo Whenever possible, I also apply my
          passion for developing products with Modern Javascript Library and
          Frameworks like React.js
        </p>
        <h2 className="mb-4 text-3xl font-medium">What I Do 💭</h2>
        <p className="text-muted-foreground mb-4 text-xl">
          I&apos;m passionate about everything technology; from designing and
          developing software, to understanding how the many moving parts of the
          internet work together, to programming, and so much more. I strive to
          learn more about these things every day, and utilize my knowledge to
          further understand <i>how</i> or <i>why</i> the technology around us
          works.
        </p>
        <h2 className="mb-4 text-3xl font-medium">Technologies 💻</h2>
        <p className="text-muted-foreground mb-4  text-xl">
          I use a variety of tools to streamline my development process and
          increase the quality of both my code, and my projects. Below is a list
          of technologies and languages I&apos;ve had experience with in the
          past, or use currently.
        </p>

        <div className="mb-10 flex w-full flex-row flex-wrap justify-center gap-2 rounded-md border border-slate-800 bg-white/10 p-1 dark:bg-black/10">
          <TechItem icon={SiJavascript} name="JavaScript" />
          <TechItem icon={SiTypescript} name="TypeScript" />
          <TechItem icon={SiReact} name="React js" />
          <TechItem icon={SiJquery} name="jQuery" />
          <TechItem icon={SiTailwindCSS} name="Tailwind CSS" />
          <TechItem icon={SiBootstrap} name="Bootstrap" />
          <TechItem icon={SiFigma} name="Figma" />
          <TechItem icon={SiGit} name="Git" />
          <TechItem icon={SiGithub} name="GitHub" />
          <TechItem icon={SiNextJs} name="Next.js" />
          <TechItem icon={SiGraphql} name="Graphql" />
          <TechItem icon={SiNodeJs} name="Node.js" />
          <TechItem icon={SiExpress} name="Express" />
          <TechItem icon={SiMongodb} name="Mongodb" />
          <TechItem icon={SiMysql} name="Mysql" />
          <TechItem icon={SiOracle} name="Oracle" />
          <TechItem icon={SiFirebase} name="Firebase" />
          <TechItem icon={SiSupabase} name="Supabase" />
          <TechItem icon={SiNpm} name="Npm" />
          <TechItem icon={SiAdobephotoshop} name="Adobe photoshop" />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-3xl font-medium">Projects 🛠️</h2>
        <p className="text-muted-foreground mb-4  text-xl">
          In my free time, I enjoy creating open source projects on{" "}
          <Link
            href="https://github.com/HOVSEP93"
            target="_blank"
            className="font-semibold text-violet-500 hover:underline"
          >
            GitHub
          </Link>
          , so I can learn from others and showcase what I know. In total, all
          of my open sourced projects have earnt me 64 stars on GitHub, and 6
          forks. Below are some of my most popular repositories.
        </p>
        <div className="mb-12 grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-4 md:grid-rows-1">
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
