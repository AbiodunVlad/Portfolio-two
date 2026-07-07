import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abiodun Omonijo — Web & Mobile Developer",
  description: "Visionary product developer and digital strategist bridging the gap between innovative ideas and user-centric digital solutions. Head of Product at The Founders' Hub.",
  keywords: ["Abiodun Omonijo", "Software Engineer", "Web Developer", "Mobile Developer", "React Native", "Next.js", "Founders Hub", "Product Developer"],
  authors: [{ name: "Abiodun Omonijo" }],
  openGraph: {
    title: "Abiodun Omonijo — Web & Mobile Developer",
    description: "Visionary product developer and digital strategist bridging the gap between innovative ideas and user-centric digital solutions.",
    url: "https://abiodun-omonijo.netlify.app/",
    siteName: "Abiodun Omonijo Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col bg-[#0b0a09] text-[#f5f4f0] font-sans">
        {children}
      </body>
    </html>
  );
}

