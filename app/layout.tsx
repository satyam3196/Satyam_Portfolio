import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import { getImagePath } from "@/lib/imageLoader";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satyam's Portfolio",
  description: "Building Production-Grade AI Systems with LLMs and Scalable Data Pipelines",
  openGraph: {
    title: "Satyam's Portfolio",
    description: "Building Production-Grade AI Systems with LLMs and Scalable Data Pipelines",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href={getImagePath("/exp1.svg")} sizes="any" />

        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-5XTT6N4QNP`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5XTT6N4QNP'); 
          `}
        </Script>
        {/* End Google Analytics Scripts */}

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
