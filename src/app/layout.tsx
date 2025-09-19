import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Guy Mathieu Foko • Software Engineer",
  description: "Software engineer with experience at Heimat24 AI. Specializing in AI Aplications with emphasis on RAG, Chatbots and Automation. I sometimes do UI/UX and Mobile Development.",
  keywords: "Guy Mathieu FOKO,programmer,software engineer,ai applications,rag,chatbots,automation,ui/ux,mobile development",
  authors: [{ name: "Guy Mathieu FOKO" }],
  creator: "Guy Mathieu FOKO",
  publisher: "Guy Mathieu FOKO",
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Guy Mathieu FOKO • Software Engineer",
    description: "Product designer and developer with experience at Slack, Microsoft, and DreamWorks Animation. Specializing in mobile design, UI/UX, and iOS development.",
    url: "https://mrmath.dev",
    siteName: "Guy Mathieu FOKO Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@heyitsmattai",
    title: "Guy Mathieu FOKO • Software Engineer",
    description: "Software engineer with experience at Heimat24 AI. Specializing in AI Aplications with emphasis on RAG, Chatbots and Automation. I sometimes do UI/UX and Mobile Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-ibm-plex-mono), "IBM Plex Mono", "Courier New", monospace' }}
      >
        {children}
      </body>
    </html>
  );
}
