import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechGrad B.Tech CSE | Work-Integrated B.Tech in Computer Science",
  description:
    "India's premier work-integrated B.Tech CSE program. Learn real-world full-stack development, AI engineering, and earn paid corporate internships from Year 2. UGC Recognized. Applications open for 2027 batch.",
  keywords: [
    "B.Tech CSE",
    "work integrated degree",
    "Kalvium",
    "engineering college India",
    "software engineering degree",
    "paid internship B.Tech",
    "practical engineering education",
    "B.Tech CSE admissions 2026",
  ],
  metadataBase: new URL("https://techgrad-landing.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechGrad CSE | Future-Ready B.Tech",
    description:
      "Ditch outdated college theory. Build real software from Day 1 & earn industry internships.",
      url: "https://techgrad-landing.vercel.app",
    siteName: "TechGrad",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#0f0f13] text-slate-100 min-h-screen">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1e1e2e",
              border: "1px solid #4f46e5",
              color: "#f1f5f9",
            },
          }}
        />
      </body>
    </html>
  );
}
