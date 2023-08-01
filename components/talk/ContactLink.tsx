import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

const ContactLink = () => {
  return (
    <div className="flex w-full max-w-full flex-col gap-2">
      <Link
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="bg-opacity/50 row-start-3 mb-4 flex cursor-pointer flex-row items-center rounded-md border border-zinc-800/50 bg-white p-4 shadow-none shadow-white transition-colors duration-150 hover:shadow-lg dark:bg-white/5"
      >
        <Icons.linkedin className=" h-4 w-4 fill-current " />
        <span className=" px-5">linkedin</span>
      </Link>
      <Link
        href={siteConfig.links.mails}
        target="_blank"
        rel="noreferrer"
        className="bg-opacity/50 row-start-3 mb-4 flex cursor-pointer flex-row items-center rounded-md border border-zinc-800/50 bg-white p-4 shadow-none shadow-white transition-colors duration-150 hover:shadow-lg dark:bg-white/5"
      >
        <Icons.mails className=" h-4 w-4 fill-current " />
        <span className=" px-5">hello@hovsepantranig</span>
      </Link>
    </div>
  )
}

export default ContactLink
