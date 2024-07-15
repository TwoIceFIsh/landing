"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LanguagesIcon } from "lucide-react";
import { HeaderLink } from "@/app/main/components/HeaderLink";

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
            Profile
          </HeaderLink>
          <HeaderLink href={"https://twoicefish-secu.tistory.com"}>
            Blog
          </HeaderLink>
          <HeaderLink href={"https://github.com/twoicefish"}>GitHub</HeaderLink>
          <HeaderLink href={"/main"}>
            <LanguagesIcon />
          </HeaderLink>
        </div>
      </div>
    </div>
  );
};

export default Header;