import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "English Teacher",
  description: "A website for kids to learn English",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< Updated upstream
=======
  let user: User;
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    user = await res.json();
  } catch (err) {
    // Re-throw to trigger the nearest error.tsx
    throw err;
  }
>>>>>>> Stashed changes
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
