"use client";

import Image from "next/image";
import { useRef } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const mainRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const messageRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="flex flex-col gap-12 md:gap-20">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow-md py-4">
        <div className="container flex justify-end px-4 md:px-6 space-x-4">
          <button onClick={() => scrollToSection(mainRef)} className="text-gray-700 dark:text-gray-300">
            Home
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="text-gray-700 dark:text-gray-300">
            Projects
          </button>
          <button onClick={() => scrollToSection(aboutRef)} className="text-gray-700 dark:text-gray-300">
            About
          </button>
          <button onClick={() => scrollToSection(messageRef)} className="text-gray-700 dark:text-gray-300">
            Contact
          </button>
        </div>
      </header>

      <section ref={mainRef} className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800">
        <div className="flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Jinseo Kim
                  </h1>
                  <br></br>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400"></p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    팀 폭시(Team FOXI)의 게임 기획&디렉터 김진서입니다.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[550px] lg:order-last">
                <Image
                  alt="Jinseo Kim"
                  className="rounded-xl object-contain"
                  layout="fill"
                  src="/profile.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={projectsRef} className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projects
            </h2>
            <br></br>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              게임 프로젝트 쇼케이스
            </p>
            <br></br>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg text-center">
              <div className="relative w-full h-[300px]">
                <Image
                  alt="PaperTale Project"
                  className="rounded-md object-cover"
                  layout="fill"
                  src="/papertale.jpg"
                />
              </div>
              <h3 className="text-lg font-semibold">페이퍼테일(PaperTale)</h3>
              <p className="text-gray-500 dark:text-gray-400">
                스와이프 조작으로 몰려오는 적들을 처치하는 디펜스 게임
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg text-center">
              <div className="relative w-full h-[300px]">
                <Image
                  alt="AAAK"
                  className="rounded-md object-cover"
                  layout="fill"
                  src="/jump.JPG"
                />
              </div>
              <h3 className="text-lg font-semibold">악!(AAAK)</h3>
              <p className="text-gray-500 dark:text-gray-400">
                플레이어의 목소리 크기를 인식해 점프하는 플랫포머 게임
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-lg text-center">
              <div className="relative w-full h-[300px]">
                <Image
                  alt="Serious Game"
                  className="rounded-md object-cover"
                  layout="fill"
                  src="/serious.JPG"
                />
              </div>
              <h3 className="text-lg font-semibold">(미정)</h3>
              <p className="text-gray-500 dark:text-gray-400">
                60~70대 연령층을 위한 기능성 게임
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Experienced Game Developer and Producer
                </h2>
                <br></br>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  게임 산업에서 12년 이상의 경험을 가진 김진서는 게임 개발, 프로젝트 관리 및 크리에이티브 디렉팅 분야에서 그의 기술을 연마했다. 그는 혁신적인 아이디어에 활기를 불어넣기 위해 재능 있는 팀들과 긴밀히 협력하면서 성공적이고 비평가들의 호평을 받은 타이틀을 제공한 검증된 실적을 가지고 있다.
                </p>
                <br></br>
                
                <p>by. Chat GPT</p>
              </div>
            </div>
            <div className="relative w-full h-[500px] lg:order-last">
              <Image
                alt="About Jinseo Kim"
                className="rounded-xl object-contain"
                layout="fill"
                src="/crunch.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={messageRef} className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                프로젝트 문의는 하루 이내에 답변해드립니다.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <Input placeholder="성명" type="text" />
                <Input placeholder="이메일" type="email" />
                <Textarea placeholder="내용" rows={4} />
                <Button type="submit">제출</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
