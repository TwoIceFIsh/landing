import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"flex h-full flex-col"}>
      {/* 상단 메뉴바 */}
      <div
        className={
          "flex h-[80px] w-full flex-row items-center justify-between bg-black bg-gradient-to-bl from-black to-purple-950 px-20"
        }
      >
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={60}
          height={60}
          className={"rounded-full opacity-80"}
        />
        <div className={"flex gap-6 font-bold text-white"}>
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
        <div>
          <div>ss</div>
        </div>
      </div>
      {/* 본문 */}
      <div className="flex h-full flex-col items-center justify-center bg-black bg-gradient-to-bl from-black to-purple-950">
        <div className="mb-4 mt-20 flex flex-col gap-4 sm:w-[860px]">
          <div
            className={
              "flex w-full items-center justify-between gap-4 rounded-lg bg-black bg-opacity-50 p-6 px-4 py-1 shadow-md"
            }
          >
            <div>
              <div>
                <p className="text-3xl font-bold text-yellow-500">
                  정보보안 전문가 / 프로그래머
                </p>

                <p className="text-3xl font-bold text-white">이병호</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  kingelip@cyber-luna.com
                </p>
              </div>
            </div>
            <div>
              <Image src={"/user.png"} alt={"user"} width={80} height={80} />
            </div>
          </div>
          <div className={"flex justify-between gap-2"}>
            <div className={"rounded-lg bg-black bg-opacity-50 p-4 shadow-md"}>
              <p className={"font-bold text-white"}>정보보안</p>
              <br />
              <p className={"font-bold text-white"}>이글루시큐리티</p>
              <p className={"text-white"}>2019.03 ~ 2020.03 : 해외기술팀</p>
              <p className={"text-white"}>
                2020.03 ~ 2021.03 : 가급 국가기관 사이버안전센터
              </p>
              <p className={"text-white"}>
                2021.03 ~ 2022.05 : S-OIL 보안관제팀
              </p>
              <br />
              <p className={"font-bold text-white"}>그라비티</p>
              <p className={"text-white"}>2022.05 ~ 2024.03 : 정보보안Unit</p>
              <br />
              <p className={"font-bold text-white"}>사이버루나</p>
              <p className={"text-white"}>2024.03 ~ 2024.12 : 그레이 해커</p>
            </div>
            <div className={"rounded-lg bg-black bg-opacity-50 p-4 shadow-md"}>
              <p className={"font-bold text-white"}>프로그래밍</p>
              <br />
              <p className={"font-bold text-white"}>사이버루나</p>
              <p className={"text-white"}>
                2018.08 ~ 2018.12 : 스마트 팜 제어 시스템
              </p>
              <br />
              <p className={"text-white"}>
                2019.01 ~ 2019.03 : 악성프로그램 탐지 프로그램
              </p>
              <br />

              <p className={"text-white"}>
                2021.03 ~ 2022.05 : 보안관제 분석 보조 시스템
              </p>
              <br />
              <p className={"text-white"}>
                2022.01 ~ 2022.03 : 정보보안 메일링 시스템
              </p>

              <p className={"text-white"}>
                2022.05 ~ 2022.12 : EDR 분석 시스템
              </p>
              <br />
              <p className={"text-white"}>
                2023.01 ~ 2023.06 : SSL/TLS 인증서 관리 시스템
              </p>
              <p className={"text-white"}>
                2023.06 ~ 2025.12 : 美정부기관 AI 질병 탐지 시스템
              </p>
            </div>
          </div>
          <div
            className={"w-full rounded-lg bg-black bg-opacity-50 p-4 shadow-md"}
          >
            <p className={"font-bold text-white"}>
              처음 만나는 언덕 뒤의 거대한 언덕을 항상 생각하라.
            </p>
          </div>
        </div>
        <div className={"hidden sm:block sm:w-[860px]"}>
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