"use client"

import { useEffect, useState } from "react"

const TimeStatus = () => {
  const [time, setTime] = useState<string>("00:00:00 p.m.")
  const [awake, setAwake] = useState<boolean>(true)

  function updateTime() {
    let current = new Date().toLocaleString("en-US", { timeZone: "Turkey" })
    setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`)
    setTimeout(updateTime, 60 * 1000)

    if (new Date().getHours() < 8) setAwake(false)
  }

  useEffect(() => {
    updateTime()
  }, [])

  return (
    <p className="text-muted-foreground mb-10 ">
      It&apos;s currently <span className="font-semibold ">{time}</span> for me,
      so I&apos;m probably{" "}
      <span className="font-semibold text-violet-500">
        {awake ? "awake 🙋‍♂️" : "sleeping 💤"}
      </span>
      . I&apos;ll get back to you soon.
    </p>
  )
}

export default TimeStatus
