// app/projects/page.tsx
import Image from "next/image";
type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  icon?: string;        
};
const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "This site you're looking at right now. Built with Next.js, TypeScript, and Tailwind CSS. Main goal for this project was to learn fundamentals of scalable web development and deployment. Along with that the site serves as a hub for my projects, experience, and contact information.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Visual Studio Code"],
    icon: "/port.png", 
    link: "https://github.com/AlexMcCord2004/my-portfolio"
  },
  {
    title: "Downloads Automation Sorter",
    description:
      "A simple automation script to practice fundamentals of automation along with Python, Git, and building small utilities. This script automatically sorts files in the Downloads folder into subfolders based on file type, helping to keep the folder organized and clutter-free.",
    tech: ["Python", "Visual Studio Code", "Generative AI"],
    icon: "/downloads.png", 
    link: "https://github.com/AlexMcCord2004/Auto-Organize-My-Downloads"
  },
  {
    title: "Flight Scheduler Application",
    description:
      "Developed a JavaFX-based flight scheduling application to streamline the process of adding, viewing, and managing flights. Built using Java, FXML, and SceneBuilder, the tool applied MVC architecture and property bindings to create a responsive and user-friendly interface. The project demonstrated practical skills in UI design, data modeling, and software architecture.",
    tech: ["JavaFX", "Java", "IntelliJ IDEA", "SceneBuilder", "Git / GitHub"],
     icon: "/flight.png",
     link: "https://github.com/AlexMcCord2004/Flight-Scheduler-Application-"
  },
  {
    title: "Water Scarcity Visualization",
    description:
      "A Python project from my first year in college using data visualization to highlight varying levels of water scarcity across the globe. The goal was to identify regions most in need of assistance and provide a clear, data-driven perspective to guide aid efforts.",
    tech: ["Python", "NumPy", "Colab IDE", ".CSV Data", "Scrum Methodology"],
    icon: "/water.png",
    link: "https://github.com/AlexMcCord2004/WaterScarcityCharts"
  },
];


export default function ProjectsPage() {
  return (
    <section className="w-full space-y-6">
      <header className="space-y-2">
        <h1 className="text-red-500 text-2xl font-semibold tracking-tight sm:text-3xl">
          Projects
        </h1>
        <p className="text-sm text-white sm:text-base">
          A collection of projects I&apos;ve built from college courses or personal
          projects. The goal for each project is to learn different software
          development tools and learn how to solve problems. All of my projects
          can be found on my{" "}
          <a
            href="https://github.com/AlexMcCord2004"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 underline underline-offset-4 hover:text-red-400"
          >
            GitHub
          </a>
          .
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-1">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-neutral-800 bg-neutral-900/60 p-4"
          >
           
            <div className="flex items-center gap-3">
              {project.icon && (
                <div className="relative h-10 w-10 overflow-hidden rounded-md border border-neutral-700 bg-neutral-900">
                  <Image
                    src={project.icon}
                    alt={`${project.title} icon`}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
              )}
               <h2 className="text-lg font-semibold">
                {project.link ? (
                <a
                 href={project.link}
                 target="_blank"
                 rel="noreferrer"
                 className="hover:text-red-500 underline underline-offset-4"
                  >
                  {project.title}
                </a>
                ) : (
                project.title
                )}
               </h2>
            </div>

            <p className="mt-2 text-sm text-neutral-300">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-neutral-800 px-2 py-1 text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
