import React from "react";
import "./my.css";
import { PowerIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div
      className={
        "flex h-full select-none items-center justify-center bg-black text-center text-white"
      }
    >
      <section>
        <div className="hero-container">
          <div className="environment"></div>
          <h2 className="hero glitch layers" data-text="WWW.CYBER-LUNA.COM">
            <div>
              <span>WWW.CYBER-LUNA.COM</span>
            </div>
            <div className={"flex h-16 w-full items-end justify-center"}>
              <Link
                href={"/main/eng"}
                className={
                  "glowing-effect rounded-full bg-white font-bold text-black opacity-70"
                }
              >
                <PowerIcon className={"cursor-pointer"} />
              </Link>
            </div>
          </h2>
        </div>
      </section>
      <div></div>
    </div>
  );
};

export default Page;