import type { Metadata } from "next";
import "../styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { MenubarComponent } from "@/components/navigation";

export const metadata: Metadata = {
  title: process.env.WEBSITE_TITLE,
  description: process.env.WEBSITE_DESCRIPTION,
  keywords: "Akibur Rahman, Akibur, Rahman, Portfolio, Software Engineering, Technical Solutions, Full-Stack Development, ERP Systems Development, Network Configuration, Spring Boot Development, Backend Engineering, Cloud Networking, Custom DNS Solutions, Automation and Accounting Tools",
  authors: [{ name: process.env.AUTHOR_NAME }],
  openGraph: {
    title: process.env.WEBSITE_TITLE,
    description: process.env.WEBSITE_DESCRIPTION,
    type: "website",
    url: process.env.WEBSITE_URL,
    images: [
      {
        url: process.env.WEBSITE_URL + "/images/profile_img.jpg",
        width: 600,
        height: 600,
        alt: process.env.AUTHOR_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.WEBSITE_TITLE,
    description: process.env.WEBSITE_DESCRIPTION,
    site: "@akib1689",
    creator: "@akib1689",
    images: [
      {
        url: process.env.WEBSITE_URL + "/images/profile_img.jpg",
        width: 600,
        height: 600,
        alt: process.env.AUTHOR_NAME,
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
