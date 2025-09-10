import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import ParentContainer from "../generics/ParentContainer";

function HeroSection() {
  return (
    <ParentContainer id="home">
      <div className="bg-white sm:py-16 ">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-12 sm:border-y border-gray-300">
          <div className="flex-1 md:border-r border-gray-300 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold border-b lg:border-t border-gray-300">
              Euro Abao
            </h1>
            <p
              className="font-bold text-white bg-slate-950 w-fit px-1 transform -skew-x-12 ml-1 mt-1 text-sm md:text-base"
              style={{
                boxShadow: "1px 1px 0 #ffffff, 5px 5px 0 #94a3b8",
              }}>
              Full-Stack Dev 🚀
            </p>

            <div className="mt-6 border-t border-gray-300 text-sm md:text-base text-gray-700 relative">
              <img
                src="/cat.gif"
                alt="Funny GIF"
                className="w-14 absolute right-6 -top-[39px]"
              />
              I mix caffeine with creativity. Whether it’s fine-tuning pixels on
              the frontend or wiring up logic on the backend, I enjoy building
              things that are fun, functional, and a little magical. ✨
            </div>

            <div className="mt-6 border-t min-[1003px]:border-b border-gray-300 flex gap-4">
              <Link
                href="https://www.linkedin.com/in/euroabao-dev/"
                target="_blank"
                className="text-3xl border-x border-gray-300 text-blue-700">
                <FaLinkedin />
              </Link>

              <Link
                href="https://github.com/EuroAbao28"
                target="_blank"
                className="text-3xl border-x border-gray-300 text-gray-900">
                <FaGithub />
              </Link>

              <Link
                href="https://www.facebook.com/euro.abao/"
                target="_blank"
                className="text-3xl border-x border-gray-300 text-blue-600">
                <FaFacebook />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="text-3xl border-x border-gray-300 text-amber-500">
                <FaFileAlt />
              </a>
            </div>
          </div>

          <div className="max-md:hidden sm:w-[14rem] md:w-[16rem] lg:w-[22rem] aspect-square overflow-hidden border-l border-gray-300">
            <div className="grid grid-cols-[24px_1fr_24px] grid-rows-[24px_1fr_24px] h-full">
              <div></div>
              <div className="border-x border-gray-300"></div>
              <div></div>

              <div className="border-y border-gray-300"></div>
              <div className="overflow-hidden border border-gray-300">
                <Image
                  src={images.avatar}
                  alt="avatar"
                  className="-translate-y-6"
                />
              </div>
              <div className="border-y border-gray-300"></div>

              <div></div>
              <div className="border-x border-gray-300"></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </ParentContainer>
  );
}

export default HeroSection;
