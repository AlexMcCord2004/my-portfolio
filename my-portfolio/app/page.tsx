// app/page.tsx
export default function HomePage() {
  return (
    <section className="flex flex-col gap-10 md:flex-row md:items-center">
      {/* Left side: text content */}
      <div className="flex-1 space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-400">
          Software Developer • Student
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Hi, I&apos;m <span className="text-teal-400">Alex McCord</span>.
          <br />
          I build things for the web.
        </h1>

        <p className="max-w-xl text-sm text-neutral-400 sm:text-base">
          I&apos;m a computer science student focusing on software development, 
          currently learning React, Next.js, and modern web technologies. 
          This portfolio is where I showcase my projects and what I&apos;m working on.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="/projects"
            className="rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-teal-400"
          >
            View my projects
          </a>
          <a
            href="/about"
            className="rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-100 transition hover:border-teal-400 hover:text-teal-300"
          >
            Learn more about me
          </a>
        </div>

        {/* Tech stack */}
        <div className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Tech I&apos;m working with
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-neutral-700 px-3 py-1 text-neutral-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Right side: simple placeholder block for now */}
      <div className="mt-6 flex-1 md:mt-0">
        <div className="h-48 w-full rounded-xl border border-dashed border-neutral-700 p-4 text-sm text-neutral-500 md:h-64">
          <p className="font-medium text-neutral-300">Featured Project (Coming Soon)</p>
          <p className="mt-2">
            This area can show a preview of one of your projects, a screenshot, or
            maybe a cool animation later.
          </p>
        </div>
      </div>
    </section>
  );
}
