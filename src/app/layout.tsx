import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserProvider, { User } from "@/components/UserProvider";
import { Suspense } from "react";

export const experimental_ppr = true;

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: User = await fetch(
    "https://jsonplaceholder.typicode.com/users/2",
  ).then((res) => res.json());
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* suspense is a way to handle the loading state of a component when it is not ready to be rendered */}
        {/* This is called Partial Prerendering */}
        <Suspense fallback={<div>Loading...</div>}>
          <UserProvider initialUser={user}>{children}</UserProvider>
        </Suspense>
      </body>
    </html>
  );
}
