import ContactLink from "@/components/talk/ContactLink"
import MessageComponent from "@/components/talk/MessageComponent"
import TimeStatus from "@/components/talk/TimeStatus"

const Talk = () => {
  return (
    <div className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="  ">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl ">
          Let&apos;s chat 💬
        </h1>
        <p className="text-muted-foreground my-2  text-xl">
          Have an inquiry, or want to connect? Feel free to leave a message
          below, or get in touch via Twitter, or email.
        </p>

        <TimeStatus />

        <div className="mb-20 grid grid-cols-1  md:grid-cols-3 md:gap-4">
          <MessageComponent />

          <div className="row-start-1 md:row-auto">
            <ContactLink />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Talk
