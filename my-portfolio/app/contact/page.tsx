// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="contact-page space-y-8">
      <h1 className="text-red-500 text-2xl font-semibold tracking-tight sm:text-3xl">
        Get in Touch
      </h1>

      {/* Intro */}
      <p className="text-sm text-white sm:text-base max-w-xl">
        Whether you&apos;re reaching out about opportunities, collaboration, or 
        just want to connect, I&apos;m always open to talking. The best way to 
        reach me is by email or through one of my profiles below. I’m currently 
        open to internships, part-time positions, and full-time software 
        engineering roles.
      </p>

      {/* Contact cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Email */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 border border-red-500/40">
              <span className="text-red-400 text-lg">📧</span>
            </div>
            <h2 className="text-red-400 text-sm font-semibold uppercase tracking-[0.2em]">
              Email
            </h2>
          </div>
          <p className="mt-2 text-white text-sm">
            The most reliable way to contact me.
          </p>
          <a
            href="mailto:armccord04@gmail.com"
            className="mt-3 inline-block rounded-md border border-neutral-700 px-3 py-1 text-red-300 text-sm hover:border-red-400 hover:text-red-200 transition"
          >
            armccord04@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 border border-red-500/40">
              <span className="text-red-400 text-lg">💻
              </span>
            </div>
            <h2 className="text-red-400 text-sm font-semibold uppercase tracking-[0.2em]">
              GitHub
            </h2>
          </div>
          <p className="mt-2 text-white text-sm">
            Explore my repositories, personal projects, and development activity.
          </p>
          <a
            href="https://github.com/AlexMcCord2004"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-red-300 underline underline-offset-4 hover:text-red-200"
          >
            github.com/AlexMcCord2004
          </a>
        </div>

        {/* LinkedIn */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 border border-red-500/40">
              <span className="text-red-400 text-lg">💼</span>
            </div>
            <h2 className="text-red-400 text-sm font-semibold uppercase tracking-[0.2em]">
              LinkedIn
            </h2>
          </div>
          <p className="mt-2 text-white text-sm">
            Let&apos;s connect professionally or discuss opportunities.
          </p>
          <a
            href="https://www.linkedin.com/in/alex-reed-mccord/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-red-300 underline underline-offset-4 hover:text-red-200"
          >
            linkedin.com/in/alex-reed-mccord
          </a>
        </div>

        {/* Resume */}
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 border border-red-500/40">
              <span className="text-red-400 text-lg">📄</span>
            </div>
            <h2 className="text-red-400 text-sm font-semibold uppercase tracking-[0.2em]">
              Resume
            </h2>
          </div>
          <p className="mt-2 text-white text-sm">
            View a downloadable copy of my latest resume.
          </p>
          <a
            href="/_Alex McCord CS Resume copy.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block rounded-md border border-neutral-700 px-3 py-1 text-red-300 text-sm hover:border-red-400 hover:text-red-200 transition"
          >
            Download Resume →
          </a>
        </div>
      </div>

      {/* Availability */}
      <div className="space-y-2">
        <h2 className="text-red-500 text-lg font-semibold tracking-tight">
          Current Availability
        </h2>
        <p className="text-white text-sm sm:text-base max-w-xl">
          I&apos;m currently open to internships, part-time work,
          and full-time software engineering opportunities. If you think I may be
          a good fit for your team, I’d love to talk!
        </p>
      </div>
    </section>
  );
}
