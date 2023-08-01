import Link from "next/link"

const date = new Date()

const SiteFooter = () => {
  return (
    <footer className=" container mb-2 flex w-full flex-col items-start border-t border-slate-800 px-4 py-8 ">
      <Link
        href="/"
        // className=" bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-2xl font-semibold text-transparent"
        className=" text-2xl font-semibold text-black dark:text-white/50"
      >
        Hovsep Stepanian
      </Link>
      <h2 className="text-base text-black/60 dark:text-white/30">
        Web Developer • {date.getFullYear()}
      </h2>
    </footer>
  )
}

export default SiteFooter
