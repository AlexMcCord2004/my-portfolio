// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex McCord | Portfolio",
  description: "Personal portfolio website for Alex McCord",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Alex Reed McCord Portfolio
              </Link>

              {/* Nav links */}
              <div className="flex gap-4 text-sm">
                <Link href="/" className="hover:text-red-500 transition">
                  Home
                </Link>
                <Link href="/projects" className="hover:text-red-500 transition">
                  Projects
                </Link>
                <Link href="/about" className="hover:text-red-500 transition">
                  About
                </Link>
                <Link href="/contact" className="hover:text-red-500 transition">
                  Contact
                </Link>
              </div>
            </nav>
          </header>

          {/* Main content area */}
          <main className="mx-auto flex w-full max-w-5xl flex-1 px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-neutral-800 bg-neutral-900/80">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 text-xs opacity-70">
              <span>© {new Date().getFullYear()} Alex McCord. All rights reserved.</span>
              <span>Built with Next.js &amp; Tailwind CSS</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
