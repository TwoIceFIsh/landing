import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={"flex h-full flex-col"}>
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
      <div className="relative">
        <Image
          src={"/bg.jpg"}
          alt={"bg"}
          width={1920}
          height={1080}
          className={"w-full"}
        />
        <div className="absolute left-20 right-20 top-20 flex flex-col items-start justify-center gap-4">
          <div
            className={
              "flex w-full flex-col gap-4 rounded-lg bg-black bg-opacity-50 px-4 py-1 shadow-md"
            }
          >
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
          <div className={"flex w-full justify-between gap-2"}>
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
                2023.06 ~ 2025.12 : 미 정부기관 AI 질병 탐지 시스템
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
      </div>
      <div
        className={"h-full w-full bg-gradient-to-b from-black to-purple-950"}
      >
        s
      </div>
    </div>
  );
}