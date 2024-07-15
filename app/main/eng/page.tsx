"use client";

import Image from "next/image";
import { ExternalLinkIcon, LockIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import "./my.css";
import Header from "@/app/main/eng/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start gap-2 bg-gradient-to-bl from-black to-green-950">
      {/* Main */}
      <Header />
      <h2 className="hero glitch layers p-2" data-text="WWW.CYBER-LUNA.COM">
        <div>
          <span>WWW.CYBER-LUNA.COM</span>
        </div>
      </h2>

      <div className={"flex w-full flex-col gap-2 p-2 sm:w-[800px]"}>
        {/* First Box */}
        <div
          className={
            "flex w-full items-center justify-between gap-2 rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:cursor-pointer hover:ring-green-400"
          }
        >
          <div>
            <div className={"text-2xl"}>
              <p className="font-bold text-yellow-500 sm:text-3xl">
                Information Security Specialist / Programmer
              </p>

              <p className="font-bold text-white sm:text-3xl">Aiden Lee</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white">
                kingelip@cyber-luna.com
              </p>
            </div>
          </div>
          <div>
            <Image
              src={"/user.webp"}
              alt={"user"}
              width={80}
              height={80}
              className={"rounded-full border-4 border-green-500"}
            />
          </div>
        </div>
        {/* Second Box */}
        <div
          className={
            "flex w-full flex-col items-start justify-between gap-2 rounded-lg bg-black bg-opacity-50 shadow-md sm:flex-row"
          }
        >
          <div
            className={
              "w-full rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:ring-green-400"
            }
          >
            <p className={"font-bold text-white"}>Information Security</p>

            <p className={"text-sm font-bold text-white underline"}>
              Specializing in Vulnerability Analysis and Incident Response
            </p>
            <br />
            <p className={"font-bold text-white"}>Igloo Security</p>
            <p className={"text-white"}>
              2019.03 ~ 2020.03: Overseas Technology Team
            </p>
            <Description>Vulnerability Assessment in Japan Branch</Description>
            <Description>Vulnerability Assessment in Korea Branch</Description>
            <br />
            <p className={"text-white"}>
              2020.03 ~ 2021.03: National Cyber Security Center
            </p>
            <Description>Incident Response and Prevention</Description>
            <Description>
              Web Vulnerability Assessment for Subordinate Agencies
            </Description>
            <Description>
              Security Status Dissemination and Education for Subordinate
              Agencies
            </Description>
            <br />
            <p className={"text-white"}>
              2021.03 ~ 2022.05: S-OIL Security Monitoring Team
            </p>
            <Description>
              Security Monitoring and Incident Prevention
            </Description>
            <Description>
              Information Security Intelligence Activities
            </Description>
            <br />
            <p className={"font-bold text-white"}>Gravity</p>
            <p className={"text-white"}>
              2022.05 ~ 2024.03: Information Security Unit
            </p>
            <Description>External Vulnerability Analysis</Description>
            <Description>EDR/Antivirus/CloudFlare Operation</Description>
            <Description>Incident Response and Analysis</Description>
            <Description>
              Information Security Intelligence Activities
            </Description>
            <br />
            <p className={"font-bold text-white"}>Cyber Luna</p>
            <p className={"text-white"}>2024.03 ~ 2024.12: Grey Hacker</p>
            <Description>Confidential Activities</Description>
          </div>
          <div
            className={
              "h-full w-full rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:ring-green-400"
            }
          >
            <p className={"font-bold text-white"}>
              Programming (Full Stack/Infrastructure)
            </p>
            <p className={"text-sm font-bold text-white underline"}>
              Specializing in Planning and Developing Web Interface-Based
              Services
            </p>
            <br />
            <p className={"font-bold text-white"}>Cyber Luna</p>
            <p className={"text-white"}>2018.08 ~ 2018.12: iFarm</p>
            <Description
              href={
                "https://github.com/TwoIceFIsh/old_WEB-Control-devices-by-Web-Controller"
              }
            >
              Smart Farm Control System
            </Description>
            <p className={"text-white"}>2019.01 ~ 2019.03: MalQ</p>
            <Description href={"https://github.com/TwoIceFIsh/old_PE_Viewer"}>
              Malware Static Analysis Program
            </Description>
            <br />
            <p className={"text-white"}>2021.03 ~ 2022.05: SOC Helper</p>
            <Description>FireEye SIEM IOC Data Refinement Tool</Description>
            <br />
            <p className={"text-white"}>
              2022.01 ~ 2022.03: Information Security Mailing
            </p>
            <Description href={"https://github.com/TwoIceFIsh/RSS-Boho"}>
              Information Security Early Warning Intelligence System
            </Description>
            <br />

            <p className={"text-white"}>
              2022.05 ~ 2022.12: CrowdStrike Assist
            </p>
            <Description
              href={"https://gitlab.cyber-luna.com/cyber-luna/crowdstrike"}
            >
              EDR Analysis Support Tool
            </Description>

            <br />
            <p className={"text-white"}>2023.01 ~ 2023.04: C-Checker</p>
            <Description
              href={"https://github.com/TwoIceFIsh/cloudflare-dns-checker"}
            >
              CloudFlare DNS Management System
            </Description>
            <p className={"text-white"}>2023.04 ~ 2023.08: RAW Log Parser</p>
            <Description href={"https://gitlab.cyber-luna.com/drm/logparser"}>
              Firewall Log Parsing System
            </Description>
            <p className={"text-white"}>2023.08 ~ 2023.12: SSLM</p>
            <Description href={"https://github.com/TwoIceFIsh/sslm"}>
              SSL/TLS Certificate Management System
            </Description>

            <br />
            <p className={"text-white"}>2023.06 ~ 2025.12: AIRA</p>
            <Description
              href={"https://gitlab.cyber-luna.com/ecodetect.ai/web-server"}
            >
              US Government AI Disease Detection System
            </Description>
            <br />

            <p className={"text-white"}>2024.06 ~ 2025.12: Richable</p>
            <Description
              href={"https://github.com/TwoIceFIsh/richable-web-server"}
            >
              Financial SNS Platform
            </Description>
          </div>
        </div>
        {/* Third Box */}
        <div
          className={
            "flex h-full w-full items-center justify-between gap-2 rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:ring-green-400"
          }
        >
          <p className={"font-bold text-white"}>
            Always think of the giant hill behind the first hill you meet.
          </p>
        </div>
        {/* Fourth Box */}
        <div
          className={
            "hidden h-full w-full items-center justify-between gap-2 rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:ring-green-400 sm:flex sm:flex-col"
          }
        >
          <div className={"p-5 text-center font-bold text-white"}>
            Skill Information
          </div>
          <div className={"flex w-full items-center gap-5 p-2"}>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image
                src={"/TypeScript.svg"}
                alt={"aws"}
                width={60}
                height={60}
              />
            </div>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image src={"/Python.svg"} alt={"aws"} width={60} height={60} />
            </div>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image src={"/Next.js.svg"} alt={"aws"} width={60} height={60} />
            </div>

            <div className={"flex rounded-full bg-white p-4"}>
              <Image src={"/React.svg"} alt={"aws"} width={60} height={60} />
            </div>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image
                src={"/Tailwind CSS.svg"}
                alt={"aws"}
                width={60}
                height={60}
              />
            </div>

            <div className={"font-bold text-white"}>Main Languages</div>
          </div>
          <div className={"flex w-full items-center justify-end gap-5 p-6"}>
            <div className={"font-bold text-white"}>Operational Experience</div>

            <div className={"flex rounded-full bg-white p-4"}>
              <Image
                src={"/crowdstrike.png"}
                className={"shrink-0"}
                alt={"aws"}
                width={60}
                height={60}
              />
            </div>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image
                src={"/Cloudflare.svg"}
                alt={"aws"}
                width={60}
                height={60}
              />
            </div>
            <Logo>DRM</Logo>
            <Logo>SIEM</Logo>
            <Logo>VACCINE</Logo>
          </div>
          <div className={"flex w-full items-center justify-start gap-5 p-2"}>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image src={"/AWS.svg"} alt={"aws"} width={60} height={60} />
            </div>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image src={"/Argo CD.svg"} alt={"aws"} width={60} height={60} />
            </div>
            <div className={"flex rounded-full bg-white p-4"}>
              <Image src={"/Jenkins.svg"} alt={"aws"} width={60} height={60} />
            </div>
            <div className={"font-bold text-white"}>Experience</div>
          </div>
        </div>
      </div>
      <h2 className="hero glitch layers p-2" data-text="WWW.CYBER-LUNA.COM">
        <div>
          <span>WWW.CYBER-LUNA.COM</span>
        </div>
      </h2>
    </div>
  );
}

interface DescriptionProps {
  children: React.ReactNode;
  href?: string;
}

const Description = ({ children, href = "#" }: DescriptionProps) => {
  return (
    <>
      {href !== "#" ? (
        <Link href={href}>
          <div className={"text-sm text-white hover:underline"}>
            <div className={"flex items-center gap-2"}>
              <div>- {children}</div>
              <ExternalLinkIcon className={"h-3 w-3"} />
            </div>
          </div>
        </Link>
      ) : (
        <div className={"text-sm text-white"}>
          <div className={"flex items-center gap-2"}>
            <div>- {children}</div>
            <LockIcon className={"h-3 w-3"} />
          </div>
        </div>
      )}
    </>
  );
};

interface logoProps {
  children: React.ReactNode;
}

const Logo = ({ children }: logoProps) => {
  return (
    <div
      className={
        "flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 text-2xl font-bold"
      }
    >
      {children}
    </div>
  );
};