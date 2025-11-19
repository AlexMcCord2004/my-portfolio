// app/contact/page.tsx
export default function ContactPage() {
    return (
      <section className="contact-page space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Contact Information
        </h1>
  
        <p className="text-sm text-neutral-300 sm:text-base">
          The easiest way to reach me is by email or through my profiles below.
          I&apos;m open to internships or full / part time roles!
        </p>
  
        <ul className="space-y-2 text-sm text-teal-300">
          <li>
            Email: 
            <a
              href="mailto:armccord04@gmail.com"
              className="underline decoration-dotted underline-offset-4"
            > armccord04@gmail.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-4"
            >
              https://github.com/AlexMcCord2004?tab=repositories
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-4"
            >
              https://www.linkedin.com/in/alex-reed-mccord/
            </a>
          </li>
        </ul>
      </section>
    );
  }
  