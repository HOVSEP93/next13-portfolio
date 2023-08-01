"use client"

import { useRef } from "react"
// toastify
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
// emailjs
import emailjs from "@emailjs/browser"

const MessageComponent = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_id",
        "template_id",
        form.current ?? "",
        process.env.NEXT_PUBLIC_EMAIL
      )
      .then(
        (result: any) => {
          //   console.log(result.text);
          toast.success("message sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          //   console.log('message sent');
        },
        (error: any) => {
          //   console.log(error.text);
          toast.error("please fill form fields", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      )
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="bg-opacity/50 row-span-3 rounded-md border border-zinc-800/50 bg-white p-4 dark:bg-white/5 md:col-span-2">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-10"
      >
        {/* <h1 className="font-bold text-sm dark:text-slate-500 mb-1">First name</h1> */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="w-full rounded-md  bg-slate-300/50 p-2 text-sm placeholder:text-gray-600 dark:bg-slate-200/5 dark:placeholder:text-slate-200/20"
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full rounded-md bg-slate-300/50 p-2 text-sm placeholder:text-gray-600 dark:bg-slate-200/5 dark:placeholder:text-slate-200/20"
          required
        />

        {/* <h1 className="font-bold text-sm dark:text-slate-500 mb-1">MESSAGE</h1> */}

        <textarea
          rows={5}
          placeholder="Message"
          name="message"
          className="h-36 w-full rounded-md  bg-slate-300/50 p-2 text-sm placeholder:text-gray-600 dark:bg-slate-200/5 dark:placeholder:text-slate-200/20"
          required
        />

        <div className="flex w-full flex-row items-center justify-between">
          <button
            type="submit"
            className="flex flex-row items-center justify-center rounded-full border border-gray-800 px-5 py-2 text-sm font-medium transition-colors duration-75 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70"
          >
            <span className="mt-[2px]">Send</span>
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default MessageComponent
