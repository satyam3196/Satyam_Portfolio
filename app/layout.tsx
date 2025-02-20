import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getImagePath } from "@/lib/imageLoader";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satyam's Portfolio",
  description: "Blending Full-Stack Expertise with Cutting-Edge AI Solutions",
  openGraph: {
    title: "Satyam's Portfolio",
    description: "Blending Full-Stack Expertise with Cutting-Edge AI Solutions",
    images: [
      {
        url: getImagePath("/exp1.svg"),
        width: 1200,
        height: 630,
        alt: "Satyam's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={getImagePath("/exp1.svg")} sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
