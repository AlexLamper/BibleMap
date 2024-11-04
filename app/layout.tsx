import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css"
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BibleMap Explorer",
  description: "Explore the Bible interactively with BibleMap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl">BibleMap Explorer</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/chapters">Chapters</Link></li>
              <li><Link href="/places">Places</Link></li>
              <li><Link href="/characters">Characters</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/themes">Themes</Link></li>
              <li><Link href="/teachings">Teachings</Link></li>
              <li><Link href="/notes">Notes</Link></li>
              <li><Link href="/leaderboard">Leaderboard</Link></li>
              <li><Link href="/settings">Settings</Link></li>
              <li><Link href="/help">Help/FAQ</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} BibleMap. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}