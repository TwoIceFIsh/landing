"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div
      className={
        "flex w-full flex-row items-center justify-between bg-black bg-gradient-to-bl from-black to-purple-950 sm:px-20"
      }
    >
      <Image
        src={"/logo.png"}
        alt={"logo"}
        width={60}
        height={60}
        className={"rounded-full opacity-80"}
      />
      <div
        className={
          "flex w-full justify-between gap-2 px-10 font-bold text-white"
        }
      >
        <div>
          <Link href={"/"}>홈</Link>
        </div>
        <div>
          <Link href={"https://www.rocketpunch.com/@ruinaway"}>프로필</Link>
        </div>
        <div>
          <Link href={"https://twoicefish-secu.tistory.com"}>블로그</Link>
        </div>
        <div>
          <Link href={"https://github.com/twoicefish"}>깃허브</Link>
        </div>
      </div>
      <div className={"hidden sm:flex"}>
        <div>ss</div>
      </div>
    </div>
  );
};

export default Header;