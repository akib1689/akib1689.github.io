import type { Metadata } from "next";
import "../styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { MenubarComponent } from "@/components/navigation";

export const metadata: Metadata = {
  title: process.env.WEBSITE_TITLE,
  description: "Akibur Rahman's personal portfolio wensite showcasing projects, experience and skills.",
  keywords: "Akibur Rahman, Akibur, Rahman, Portfolio, Projects, Experience, Skills, Software Engineer, Full Stack Developer, Web Developer, React, Next.js, TypeScript, Tailwind CSS, Node.js, JavaScript, HTML, CSS, Devops, Docker, Kubernetes, AWS, GCP, Azure, CI/CD, Git, Github, Gitlab, Bitbucket, Jira, Confluence, Agile, Scrum, Kanban, Trello, Slack, Zoom, Microsoft Teams, Google Meet, Webex, Zoom, Discord, Telegram, Signal, WhatsApp",
  authors: [{ name: "Akibur Rahman" }],
  openGraph: {
    title: process.env.WEBSITE_TITLE,
    description: "Akibur Rahman's personal portfolio wensite showcasing projects, experience and skills.",
    type: "website",
    url: "https://akib1689.github.io",
    images: [
      {
        url: "https://akib1689.github.io/images/profile_img.jpg",
        width: 800,
        height: 600,
        alt: "Akibur Rahman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.WEBSITE_TITLE,
    description: "Akibur Rahman's personal portfolio wensite showcasing projects, experience and skills.",
    site: "@akib1689",
    creator: "@akib1689",
    images: [
      {
        url: "https://akib1689.github.io/images/profile_img.jpg",
        width: 800,
        height: 600,
        alt: "Akibur Rahman",
      },
    ],
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <section className="pt-8 px-4">
            <MenubarComponent />
          </section>
          <main className="p-6 w-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
