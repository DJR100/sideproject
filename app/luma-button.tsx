"use client"

import { useEffect } from "react"

interface LumaButtonProps {
  eventId: string
}

export default function LumaButton({ eventId }: LumaButtonProps) {
  useEffect(() => {
    // Load the Luma checkout script
    const script = document.createElement("script")
    script.id = "luma-checkout"
    script.src = "https://embed.lu.ma/checkout-button.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Clean up the script when component unmounts
      const existingScript = document.getElementById("luma-checkout")
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <a
      href={`https://lu.ma/event/${eventId}`}
      className="luma-checkout--button bg-[#F9C06A] hover:bg-[#F7B44F] text-[#333333] px-6 py-3 rounded-md inline-block font-medium text-center"
      data-luma-action="checkout"
      data-luma-event-id={eventId}
    >
      Register for the next session
    </a>
  )
}
