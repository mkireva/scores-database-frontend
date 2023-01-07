import "./globals.css";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="flex w-full p-5 justify-between text-sm text-gray-700">
          <div className="flex space-x-4 items-center">
            <Link href="/">
              <p className="link">Home</p>
            </Link>
            <Link href="/about">
              <p className="link">About </p>
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/blog">
              <p className="link">Blog</p>
            </Link>
            <p className="link">Images</p>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
