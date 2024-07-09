"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-start gap-2 sm:mt-10">
      {/* 메인 */}
      <div className={"flex w-full flex-col gap-2 p-2 sm:w-[800px]"}>
        {/* 첫번째 박스*/}
        <div
          className={
            "flex w-full items-center justify-between gap-2 rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:cursor-pointer hover:ring-green-400"
          }
        >
          <div>
            <div className={"text-2xl"}>
              <p className="font-bold text-yellow-500 sm:text-3xl">
                정보보안 전문가 / 프로그래머
              </p>

              <p className="font-bold text-white sm:text-3xl">이병호</p>
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
        {/* 두번째 박스*/}
        <div
          className={
            "flex w-full flex-col items-center justify-between gap-2 rounded-lg bg-black bg-opacity-50 shadow-md sm:flex-row"
          }
        >
          <div
            className={
              "w-full rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:cursor-pointer hover:ring-green-400"
            }
          >
            <p className={"font-bold text-white"}>정보보안</p>

            <p className={"text-sm font-bold text-white underline"}>
              취약점 분석 및 침해사고 대응 주력
            </p>
            <br />
            <p className={"font-bold text-white"}>이글루시큐리티</p>
            <p className={"text-white"}>2019.03 ~ 2020.03 : 해외기술팀</p>
            <p className={"text-xs text-white"}>- 일본지사 취약점 점검</p>
            <p className={"text-xs text-white"}>- 한국지사 취약점 점검</p>
            <br />
            <p className={"text-white"}>
              2020.03 ~ 2021.03 : 가급 국가기관 사이버안전센터
            </p>
            <p className={"text-xs text-white"}>- 사고대응 및 침해사고 예방</p>
            <p className={"text-xs text-white"}>- 산하기관 웹 취약점 점검</p>
            <p className={"text-xs text-white"}>
              - 보안현황 하위기관 전파 및 교육
            </p>
            <br />
            <p className={"text-white"}>2021.03 ~ 2022.05 : S-OIL 보안관제팀</p>
            <p className={"text-xs text-white"}>- 보안관제 및 침해사고 예방</p>
            <p className={"text-xs text-white"}>- 정보보안 인텔리전스 활동</p>
            <br />
            <p className={"font-bold text-white"}>그라비티</p>
            <p className={"text-white"}>2022.05 ~ 2024.03 : 정보보안Unit</p>
            <p className={"text-xs text-white"}>- 대외 취약점 분석</p>
            <p className={"text-xs text-white"}>- EDR/백신/CloudFlare 운영</p>
            <p className={"text-xs text-white"}>- 침해사고 대응 및 분석</p>
            <p className={"text-xs text-white"}>- 정보보안 인텔리전스 활동</p>
            <br />
            <p className={"font-bold text-white"}>사이버루나</p>
            <p className={"text-white"}>2024.03 ~ 2024.12 : 그레이 해커</p>
          </div>
          <div
            className={
              "h-full w-full rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:cursor-pointer hover:ring-green-400"
            }
          >
            <p className={"font-bold text-white"}>프로그래밍</p>
            <br />
            <p className={"font-bold text-white"}>사이버루나</p>
            <p className={"text-white"}>
              2018.08 ~ 2018.12 : 스마트 팜 제어 시스템
            </p>
            <p className={"text-white"}>
              2019.01 ~ 2019.03 : 악성프로그램 탐지 프로그램
            </p>
            <p className={"text-xs text-white"}>
              - 악성프로그램 정적 분석 프로그램
            </p>
            <br />
            <p className={"text-white"}>2021.03 ~ 2022.05 : SOC Helper</p>
            <p className={"text-xs text-white"}>
              - FireEye SIEM IOC 데이터 정제 툴
            </p>
            <br />
            <p className={"text-white"}>2022.01 ~ 2022.03 : 정보보안메일링</p>
            <p className={"text-xs text-white"}>
              - 정보보안 조기경보 인텔리전스 시스템
            </p>
            <br />

            <p className={"text-white"}>
              2022.05 ~ 2022.12 : CrowdStrike Assist
            </p>
            <p className={"text-xs text-white"}> - EDR 분석 보조 시스템</p>

            <br />
            <p className={"text-white"}>2023.01 ~ 2023.06 : SSLM</p>
            <p className={"text-xs text-white"}>- SSL/TLS 인증서 관리 시스템</p>

            <br />
            <p className={"text-white"}>2023.06 ~ 2025.12 : AIRA</p>
            <p className={"text-xs text-white"}>
              - 美정부기관 AI 질병 탐지 시스템
            </p>
            <br />

            <p className={"text-white"}>2024.06 ~ 2025.12 : 리치에이블</p>
            <p className={"text-xs text-white"}> - 금융 SNS 플랫폼</p>
          </div>
        </div>
        {/* 세번째 박스*/}
        <div
          className={
            "flex h-full w-full items-center justify-between gap-2 rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:cursor-pointer hover:ring-green-400"
          }
        >
          <p className={"font-bold text-white"}>
            처음 만나는 언덕 뒤의 거대한 언덕을 항상 생각하라.
          </p>
        </div>
        {/* 네번째 박스*/}
        <div
          className={
            "hidden h-full w-full items-center justify-between gap-2 rounded-lg bg-black bg-opacity-50 p-4 shadow-md ring-2 transition hover:cursor-pointer hover:ring-green-400 sm:flex sm:flex-col"
          }
        >
          <div className={"p-5 text-center font-bold text-white"}>스킬정보</div>
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

            <div className={"font-bold text-white"}>주력언어</div>
          </div>
          <div className={"flex w-full items-center justify-end gap-5 p-6"}>
            <div className={"font-bold text-white"}>운영경험</div>

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
            <div
              className={
                "flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 text-2xl font-bold"
              }
            >
              DRM
            </div>
            <div
              className={
                "flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 text-2xl font-bold"
              }
            >
              SIEM
            </div>
            <div
              className={
                "flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 text-2xl font-bold"
              }
            >
              백신
            </div>
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
            <div className={"font-bold text-white"}>사용경험</div>
          </div>
        </div>
      </div>
    </div>
  );
}