import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pat Portfolio",
  description:
    "Modern portfolio website built with Next.js, Tailwind CSS, and shadcn-style components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
