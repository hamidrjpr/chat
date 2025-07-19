"use client";
import Link from "next/link";
import { useState } from "react";

export default function HoverLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      prefetch={isHovered ? true : false}
      onMouseEnter={() => setIsHovered(false)}
      // onMouseEnter={() => setIsHovered((hover) => !hover)}
      //  onMouseEnter={() => setIsHovered(() => false)}
    >
      {children}
    </Link>
  );
}
