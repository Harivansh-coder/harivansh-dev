import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harivansh Thakur - Full Stack Developer",
  description:
    "portfolio showcasing projects and skills as a full stack developer",
  keywords: [
    "Harivansh Thakur",
    "Full Stack Developer",
    "Backend Developer",
    "Python Developer",
    "Portfolio",
    "Projects",
    "Skills",
  ],
  openGraph: {
    title: "Harivansh Thakur - Full Stack Developer",
    description:
      "portfolio showcasing projects and skills as a full stack developer",
    images: [
      {
        url: process.env.NEXT_PUBLIC_PREVIEW || "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harivansh Thakur - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          (cn(
            "min-h-screen bg-background font-sans antialiased",
            roboto.className
          ),
          // center the content
          "flex flex-col justify-center items-center")
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
