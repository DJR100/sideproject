import { Users, Coffee, BookOpen, Sparkles, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { XLogo } from "./x-logo"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Empty header - social icons moved to hero section */}
      <header className="container mx-auto px-4 py-4"></header>

      <div className="container mx-auto px-4 py-6 max-w-3xl">
        {/* Hero with logo above and left-aligned text */}
        <div className="mb-8 text-left">
          {/* Logo styled like embossing label maker with social icons aligned */}
          <div className="mb-4 flex justify-between items-center relative">
            <div className="inline-block bg-black px-3 py-1.5 label-tape">
              <div className="font-mono tracking-widest text-white text-xl uppercase label-text">Side Project</div>
            </div>

            {/* Social icons aligned with the text - nudged 27px to the left */}
            <div
              className="flex items-center gap-4 absolute"
              style={{
                maxWidth: "calc(100% - 200px)",
                right: "27px", // Nudged 27px to the left from the right edge
              }}
            >
              <Link
                href="https://linkedin.com/company/side-projecting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#F9C06A] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/dillondoing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-[#F9C06A] transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <XLogo className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Hero title with size matching subtext - removed first line */}
          <h1 className="text-lg md:text-xl text-[#333333] mb-3 font-bold">Work on what matters.</h1>
          <p className="text-lg md:text-xl text-black mb-2">
            A weekly co-working hang for founders, creatives, and anyone with a half-finished idea sitting in a notes
            app.
          </p>
          <p className="text-lg md:text-xl text-black mb-4">
            Bring your laptop, your sketchbook, your prototype, your Notion doc - whatever you've been meaning to spend
            more time on :)
          </p>

          {/* Added hero image - smaller size */}
          <div className="mt-6 mb-2 flex justify-center">
            <div className="rounded-lg overflow-hidden max-w-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/539c5945-ecca-4752-8752-26b2ab5345c2.jpg-0S6NxeZUuagJUYQEWPXNhqDkozFUud.jpeg"
                alt="Side Project session with people working together in a modern space"
                width={800}
                height={533}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          {/* Buttons removed */}
        </div>

        {/* Divider */}
        <div className="border-t border-[#F9C06A]/30 my-6"></div>

        {/* Philosophy - MOVED TO TOP */}
        <div className="mb-8">
          {/* Philosophy heading with label maker style */}
          <div className="flex justify-center mb-4">
            <div className="bg-black px-3 py-1.5 label-tape">
              <h2 className="font-mono tracking-widest text-white text-xl uppercase label-text">Our Philosophy</h2>
            </div>
          </div>

          <p className="text-xl font-bold text-[#333333] mb-3 text-center">No pressure. Just presence.</p>

          <p className="text-lg text-black mb-3">
            We're a community built around curiosity, creativity, and the joy of making things for their own sake. There
            are no goals to hit - just a space to explore, learn, and build.
          </p>

          <p className="text-lg text-black mb-3">
            What makes Side Project special is the trust we place in each other. It's a space where you can show up
            exactly as you are, experiment freely, and tap into parts of yourself that don't always get airtime
            elsewhere.
          </p>

          <p className="text-lg text-black">
            Everyone is welcome. Please treat the space with care, respect, and openness.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F9C06A]/30 my-6"></div>

        {/* What Happens Each Week */}
        <div className="mb-8">
          {/* What Happens heading with label maker style */}
          <div className="flex justify-center mb-4">
            <div className="bg-black px-3 py-1.5 label-tape">
              <h2 className="font-mono tracking-widest text-white text-xl uppercase label-text">What Happens</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-[#F9C06A] p-2 rounded-full shrink-0">
                <Users className="h-5 w-5 text-[#333333]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] mb-1">Quick Intros</h3>
                <p className="text-black">Names, what you're working on, what brought you here</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#F9C06A] p-2 rounded-full shrink-0">
                <BookOpen className="h-5 w-5 text-[#333333]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] mb-1">Focus Blocks</h3>
                <p className="text-black">Two deep work sessions with a break in between</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#F9C06A] p-2 rounded-full shrink-0">
                <Coffee className="h-5 w-5 text-[#333333]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] mb-1">Midway Reset</h3>
                <p className="text-black">stretch, grab a coffee, chat</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#F9C06A] p-2 rounded-full shrink-0">
                <Sparkles className="h-5 w-5 text-[#333333]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#333333] mb-1">Open Share (Optional)</h3>
                <p className="text-black">share your work - or don't. Lurking welcome</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F9C06A]/30 my-6"></div>

        {/* Sessions (formerly The Ritual) */}
        <div className="mb-8">
          {/* Sessions heading with label maker style */}
          <div className="flex justify-center mb-4">
            <div className="bg-black px-3 py-1.5 label-tape">
              <h2 className="font-mono tracking-widest text-white text-xl uppercase label-text">Sessions</h2>
            </div>
          </div>

          <div className="w-full flex justify-center my-6">
            <div className="w-full">
              <iframe
                src="https://luma.com/embed/calendar/cal-Xtd3aTHiMpcX3vF/events"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#F9C06A]/30 my-6"></div>

        {/* Footer with social icons added */}
        <footer className="text-center text-black py-6 border-t border-[#F9C06A]/30 mt-6">
          <p className="mb-2">Side Project © 2025</p>
          <p className="mb-4">A weekly co-working hangout for creators and builders.</p>

          {/* Social icons in footer */}
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="https://linkedin.com/company/side-projecting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#F9C06A] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/dillondoing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#F9C06A] transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <XLogo className="h-6 w-6" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
