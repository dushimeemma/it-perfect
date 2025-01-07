"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === "light" ? "/logo.png" : "/dark-logo.png"}
        width={250}
        height={100}
        alt="Logo"
        className={` cursor-pointer w-[5.625rem] md:w-[10.625rem] lg:w-[15.625rem] ${className}`}
      />
    </Link>
  );
}
