import React from "react";
import Link from "next/link";
import "@/app/(main)/main.css";
import "@/app/globals.css";
import { PowerIcon } from "lucide-react";

const Page = () => {
  return (
    <div className={"grid w-full grid-rows-3 items-center"}>
      <div className={"text-center"}></div>
      <div className="hero-container row-start-2">
        <div className="environment"></div>
        <div className="hero glitch layers" data-text="WWW.CYBER-LUNA.COM">
          <div>
            <span>WWW.CYBER-LUNA.COM</span>
          </div>
          <div className={"flex h-16 items-end justify-center"}>
            <Link
              href={"/main/eng"}
              className={
                "glowing-effect rounded-full font-bold text-black opacity-70"
              }
            >
              <PowerIcon className={"cursor-pointer"} />
            </Link>
          </div>
        </div>
      </div>
      <div className={"text-center text-green-600"}>
        Please, Press the button to get information.
      </div>
    </div>
  );
};

export default Page;