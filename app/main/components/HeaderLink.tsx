import Link from "next/link";
import React from "react";

interface HeaderProps {
  href: string;
  children: React.ReactNode;
}

export const HeaderLink = ({ children, href }: HeaderProps) => {
  return (
    <div
      className={
        "w-full cursor-pointer items-center justify-center text-nowrap rounded-lg p-2 transition hover:bg-black hover:text-green-500 hover:ring-green-400"
      }
    >
      <Link href={href} className={"flex items-center justify-center"}>
        <div>{children}</div>
      </Link>
    </div>
  );
};