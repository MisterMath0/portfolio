import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Siddhant Mehta • Software Designer & Engineer",
  description: "Product designer and developer with experience at Slack, Microsoft, and DreamWorks Animation. Specializing in mobile design, UI/UX, and iOS development.",
  keywords: "Siddhant Mehta,design coach,design mentor,looking for design coach,learn mobile design,slack design case study,canada designer,design founders,ios design patterns,mobile app redesign,design portfolio examples,design career advice,how to design mobile apps,designer entrepreneur,design leadership,senior designer insights",
  authors: [{ name: "Siddhant Mehta" }],
  creator: "Siddhant Mehta",
  publisher: "Siddhant Mehta",
  robots: "index, follow",
  openGraph: {
    title: "Siddhant Mehta • Software Designer & Engineer",
    description: "Product designer and developer with experience at Slack, Microsoft, and DreamWorks Animation. Specializing in mobile design, UI/UX, and iOS development.",
    url: "https://siddhantmehta.com",
    siteName: "Siddhant Mehta Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@metasidd",
    title: "Siddhant Mehta • Software Designer & Engineer",
    description: "Product designer and developer with experience at Slack, Microsoft, and DreamWorks Animation.",
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
