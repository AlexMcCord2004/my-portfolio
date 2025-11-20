// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="load-page flex flex-col gap-10 md:flex-row md:items-center">
      {/* Left side: text content */}
      <div className="flex-1 space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-teal-400">
          Software Developer • Student * Seeking Professional Opportunities
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Hi, I&apos;m <span className="text-teal-600">Alex McCord</span>.
          <br />
          I&apos;m a Software Developer who enjoys building impactful solutions.
        </h1>

        <p className=" max-w-xl text-sm text-neutral-400 sm:text-base">
          I’m a senior computer science student at Auburn Univeristy with a strong focus on software development,
          cybersecurity, and data science. I’m actively pursuing opportunities to grow
          as a software engineer while applying my skills across these fields, including
          secure development, data-driven problem-solving, and quality assurance.
          I’m passionate about learning, building practical solutions, and creating
          software systems that make a meaningful impact. This portfolio highlights
          the projects I’ve developed and the work I’m continuing to grow in.
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
            Some of the Tech / tool&apos;s I&apos;ve worked with include:
          </h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Java", "Python" ,"Git / Github","C / C++" 
              , "SQL","mySQL","Linux"
            ].map(
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

      {/* RIGHT SIDE: profile card ABOVE current project card */}
      <div className="mt-6 flex-1 md:mt-1 flex flex-col gap-4">
        {/* Profile image + info */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-neutral-700 shadow-lg">
            <Image
              src="/alex-headshot.jpg" 
              alt="Portrait of Alex McCord"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>

          <div className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-300">
            <p className="font-medium text-neutral-100">Focused on Growth</p>
            <p className="mt-2 text-neutral-400">
              I&apos;m currently building projects in web development, automation,
              and Java-based applications while strengthening my skills in
              cybersecurity, and data science. I&apos;m always eager to learn new technologies
              and take on challenges that help me grow as a software developer.
            </p>
            <a
              href="/projects"
              className="mt-3 inline-block text-xs text-teal-300 underline underline-offset-4 hover:text-teal-200"
            >
              View my projects →
            </a>
          </div>
        </div>

        {/* Currently Building card */}
        <div className="h-56 w-full rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-sm text-neutral-300 md:h-64 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Currently Building
            </p>
            <h3 className="mt-2 text-base font-semibold text-neutral-50">
              Downloads Automation Sorter
            </h3>
            <p className="mt-2 text-xs text-neutral-400">
              A Python script that automatically organizes files in my Downloads
              folder into subfolders based on file type. It&apos;s a small
              quality-of-life tool that keeps my workspace clean and helps me
              practice automation, scripting, and Git workflows.
            </p>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[0.7rem]">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-neutral-800 px-2 py-1 text-neutral-200">
                Python
              </span>
              <span className="rounded-full bg-neutral-800 px-2 py-1 text-neutral-200">
                Automation
              </span>
              <span className="rounded-full bg-neutral-800 px-2 py-1 text-neutral-200">
                Git / GitHub
              </span>
              <span className="rounded-full bg-neutral-800 px-2 py-1 text-neutral-200">
                Visual Studio Code
              </span>
            </div>
            <a
              href="/projects"
              className="text-teal-300 underline underline-offset-4 hover:text-teal-200"
            >
              View all projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
