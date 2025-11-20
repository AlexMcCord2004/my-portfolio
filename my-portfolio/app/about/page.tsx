// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="space-y-8">
      {/* Main intro */}
      <div className="space-y-4">
        <h1 className="text-red-500 text-2xl font-semibold tracking-tight sm:text-3xl">
          A little about me!
        </h1>

        <p className="text-sm text-white sm:text-base">
          Hi, I&apos;m <span className="text-red-400">Alex McCord</span>  a senior
          Computer Science student at Auburn University with a strong focus on
          software development, web technologies, and cybersecurity. I enjoy
          breaking down complex problems and building solutions that are both
          practical and reliable.
        </p>

        <p className="text-sm text-white sm:text-base">
          Most of my recent work has been centered around modern web development
          with tools like <span className="text-red-400">React</span>,{" "}
          <span className="text-red-400">Next.js</span>,{" "}
          <span className="text-red-400">TypeScript</span>, and{" "}
          <span className="text-red-400">Tailwind CSS</span>. I&apos;ve also built
          projects in <span className="text-red-400">Java</span> and{" "}
          <span className="text-red-400">Python</span>, including a JavaFX-based
          flight scheduler and automation scripts that help organize and simplify
          everyday tasks.
        </p>
      </div>

      {/* Skills grid */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Skills & Technologies
        </h2>
        <p className="text-sm text-white sm:text-base">
          I like working across the stack, but I&apos;m especially comfortable with
          languages, frameworks, and tools like:
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
          {[
            "TypeScript",
            "React / Next.js",
            "Tailwind CSS",
            "Java / JavaFX",
            "Python",
            "Git / GitHub",
            "SQL / MySQL",
            "Linux",
            "APIs & REST",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-md border border-neutral-700 bg-neutral-900/60 px-3 py-2 text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          A quick timeline
        </h2>
        <div className="space-y-2 text-sm text-white sm:text-base">
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-red-400">
              Education
            </p>
            <p>
              Senior at Auburn University, studying{" "}
              <span className="text-red-400">Computer Science</span> with a focus
              on software engineering, cybersecurity, and data-driven development.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-red-400">
              Projects
            </p>
            <p>
              Built a <span className="text-red-400">personal portfolio</span> with
              Next.js, TypeScript, and Tailwind; a{" "}
              <span className="text-red-400">Downloads Automation Sorter</span> in
              Python; and a <span className="text-red-400">
                Flight Scheduler
              </span>{" "}
              using JavaFX and SceneBuilder.
            </p>
          </div>
        </div>
      </div>

      {/* What I'm doing now */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          What I&apos;m doing now
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-white sm:text-base">
          <li>
            Expanding my experience with{" "}
            <span className="text-red-400">full-stack web development</span> using
            Next.js and modern UI patterns.
          </li>
          <li>
            Strengthening my foundation in{" "}
            <span className="text-red-400">cybersecurity</span> and learning how to
            write more secure, reliable code.
          </li>
          <li>
            Working on projects that automate everyday tasks and improve
            productivity through scripting and tooling.
          </li>
          <li>
            Actively looking for opportunities to grow as a{" "}
            <span className="text-red-400">software engineer</span> and contribute
            to real world applications.
          </li>
        </ul>
      </div>

      {/* A bit more about me */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Beyond the code
        </h2>
        <p className="text-sm text-white sm:text-base">
          I&apos;m someone who learns best by building things and iterating on
          them. Whether it&apos;s improving this portfolio, refactoring a project,
          or experimenting with a new tool, I like seeing steady progress over
          time. I take pride in being curious, adaptable, and willing to dig in
          when something is challenging. Learning on the go is part of what makes
          software development so exciting to me!
        </p>
        <p className="text-sm text-white sm:text-base">
          If you&apos;d like to connect, feel free to reach out through the contact
          page or check out my projects on GitHub. I&apos;m always open to learning
          from others, collaborating, and exploring new opportunities.
        </p>
      </div>
    </section>
  );
}
