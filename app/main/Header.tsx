"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className={
        "flex h-16 w-full items-center justify-center bg-gradient-to-bl from-black to-green-950"
      }
    >
      <div
        className={
          "flex w-[500px] items-center justify-between gap-2 px-10 font-bold text-white"
        }
      >
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={60}
            height={60}
            className={"rounded-full opacity-80 ring"}
          />
        </Link>
        <div className={"flex w-full justify-between text-center"}>
          <HeaderLink href={"https://www.rocketpunch.com/@ruinaway"}>
            프로필
          </HeaderLink>
          <HeaderLink href={"https://twoicefish-secu.tistory.com"}>
            블로그
          </HeaderLink>
          <HeaderLink href={"https://github.com/twoicefish"}>깃허브</HeaderLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

interface HeaderProps {
  href: string;
  children: React.ReactNode;
}

export const HeaderLink = ({ children, href }: HeaderProps) => {
  return (
    <div
      className={
        "w-full cursor-pointer text-nowrap rounded-lg p-2 transition hover:bg-black hover:text-green-500 hover:ring-green-400"
      }
    >
      <Link href={href}>
        <div>{children}</div>
      </Link>
    </div>
  );
};