import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "BibleMap",
  description: "Explore the Bible interactively with BibleMap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} dynamic
    >
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="antialiased">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
