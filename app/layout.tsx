import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jbMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Tan",
  description:
    "Student, developer and content creator, passionate about all things STEM and science communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jbMono.className} antialiased text-white bg-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
