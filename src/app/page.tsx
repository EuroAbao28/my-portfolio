"use client";

import { images, TECH_STACK } from "@/constants/images";
import { PROJECTS } from "@/constants/projects";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebook, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  LuBookOpen,
  LuCalendarDays,
  LuLink,
  LuMail,
  LuMenu,
  LuPhone,
  LuPickaxe,
} from "react-icons/lu";

const LINKS = ["home", "projects", "contact"];

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 9px, rgba(83, 83, 83, 0.2) 9px, rgba(83, 83, 83, 0.2) 10px)",
        backgroundPosition: "center center",
      }}
      className="text-slate-950 bg-gray-50/10">
      {/* nav */}
      <section className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] border-b border-gray-300 sticky top-0 z-20">
        <div className="bg-white"></div>
        <div className="border-x border-gray-300"></div>

        <div className="bg-white">
          <div className="flex justify-between items-center min-[600px]:mt-10 min-[600px]:border-t border-gray-300">
            <h1 className="text-2xl font-bold ml-2">EA</h1>

            <ul className="max-[600px]:hidden flex">
              {LINKS.map((item, index) => (
                <li
                  key={index}
                  className=" hover:bg-gray-50 cursor-pointer capitalize">
                  <a href={`#${item}`}>
                    <p className="px-6 py-4">{item}</p>
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden max-[600px]:block p-4 text-xl hover:bg-gray-50">
              <LuMenu />
            </div>
          </div>
        </div>

        <div className="border-x border-gray-300"></div>
        <div className="bg-white"></div>
      </section>

      {/* separator */}
      <div className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] bg-transparent border-b border-gray-300 h-10">
        <div className="bg-white"></div>

        <div className="border-x border-gray-300"></div>

        <div></div>

        <div className="border-x border-gray-300"></div>

        <div className="bg-white"></div>
      </div>

      {/* hero */}
      <section
        id="home"
        className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
        <div className="bg-white"></div>
        <div className="border-x border-gray-300"></div>

        <div className="bg-white py-16 ">
          <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-12 border-y border-gray-300">
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

              <p className="mt-6 border-t border-gray-300 text-sm md:text-base">
                I mix caffeine with creativity. Whether it’s fine-tuning pixels
                on the frontend or wiring up logic on the backend, I enjoy
                building things that are fun, functional, and a little magical.
                ✨
              </p>

              <div className="mt-6 border-t min-[1003px]:border-b border-gray-300 flex gap-4">
                <Link
                  href="/"
                  className="text-3xl border-x border-gray-300 text-blue-700">
                  <FaLinkedin />
                </Link>
                <Link
                  href="/"
                  className="text-3xl border-x border-gray-300 text-gray-900">
                  <FaGithub />
                </Link>

                <Link
                  href="/"
                  className="text-3xl border-x border-gray-300 text-blue-600">
                  <FaFacebook />
                </Link>
                <Link
                  href="/"
                  className="text-3xl border-x border-gray-300 text-amber-500">
                  <FaFileAlt />
                </Link>
              </div>
            </div>

            <div className="max-md:hidden sm:w-[14rem] md:w-[16rem] lg:w-[22rem] aspect-square overflow-hidden border-l border-gray-300">
              <div className="grid grid-cols-[24px_1fr_24px] grid-rows-[24px_1fr_24px] h-full">
                <div></div>
                <div className="border-x border-gray-300"></div>
                <div></div>

                <div className="border-y border-gray-300"></div>
                <div className="overflow-hidden border border-gray-300 relative">
                  <div className="absolute w-2 h-2 bg-white rounded-full top-3 left-3 z-10"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full top-3 right-3 z-10"></div>

                  <Image
                    src={images.avatar}
                    alt="avatar"
                    className="-translate-y-6"
                  />

                  <div className="absolute w-2 h-2 bg-white rounded-full bottom-3 left-3 z-10"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full bottom-3 right-3 z-10"></div>
                </div>
                <div className="border-y border-gray-300"></div>

                <div></div>
                <div className="border-x border-gray-300"></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-x border-gray-300"></div>
        <div className="bg-white"></div>
      </section>

      {/* separator */}
      <div className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] bg-transparent border-y border-gray-300 h-10">
        <div className="bg-white"></div>

        <div className="border-x border-gray-300"></div>

        <div></div>

        <div className="border-x border-gray-300"></div>

        <div className="bg-white"></div>
      </div>

      {/* tech stack */}
      <section className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
        <div className="bg-white"></div>
        <div className="border-x border-gray-300"></div>

        <div className="bg-white grid">
          <h1
            className="text-[12rem] font-bold row-start-1 col-start-1 -mt-18 ml-1 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 9px, rgba(83,83,83,0.25) 9px, rgba(83,83,83,0.25) 10px)",
              backgroundPosition: "center center",
            }}>
            01
          </h1>

          <div className="py-16 col-start-1 row-start-1">
            <h3 className="font-bold text-2xl border-y border-r-gray-300 bg-white">
              Tech Stack:
            </h3>

            <div className="mt-6 border-y border-gray-300 grid max-[575px]:grid-cols-3 max-[667px]:grid-cols-4 max-[770px]:grid-cols-5 max-[1000px]:grid-cols-6  grid-cols-8 gap-4 p-4">
              {TECH_STACK.map((item, index) => (
                <div key={index} className="gap-2 border border-gray-300">
                  <div className="bg grid grid-cols-[14px_1fr_14px] grid-rows-[14px_1fr_14px] md:grid-cols-[20px_1fr_20px] md:grid-rows-[20px_1fr_20px] border-b border-gray-300">
                    <div></div>
                    <div className="border-x border-gray-300"></div>
                    <div></div>

                    <div
                      className="border-y border-gray-300
                    "></div>
                    <div className="border border-gray-300">
                      <Image src={item.icon} alt="icon" />
                    </div>
                    <div
                      className="border-y border-gray-300
                    "></div>

                    <div></div>
                    <div className="border-x border-gray-300"></div>
                    <div></div>
                  </div>

                  <p className="text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-x border-gray-300"></div>
        <div className="bg-white"></div>
      </section>

      {/* separator */}
      <div className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] bg-transparent border-y border-gray-300 h-10">
        <div className="bg-white"></div>

        <div className="border-x border-gray-300"></div>

        <div></div>

        <div className="border-x border-gray-300"></div>

        <div className="bg-white"></div>
      </div>

      {/* projects */}
      <section
        id="projects"
        className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
        <div className="bg-white"></div>
        <div className="border-x border-gray-300"></div>

        <div className="bg-white grid">
          <h1
            className="text-[12rem] font-bold row-start-1 col-start-1 -mt-18 ml-1 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 9px, rgba(83,83,83,0.25) 9px, rgba(83,83,83,0.25) 10px)",
              backgroundPosition: "center center",
            }}>
            02
          </h1>

          <div className="py-16 col-start-1 row-start-1">
            <h3 className="font-bold text-2xl border-y border-r-gray-300 bg-white">
              Personal Projects:
            </h3>

            <div className="grid max-[620px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 p-4 gap-4">
              {PROJECTS.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-300 group transition-all">
                  <div className="h-36 overflow-hidden border-b border-gray-300">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  <div className="space-y-4 p-4">
                    <p className="text-base lg:text-xl font-medium">
                      {item.title}
                    </p>

                    <p className="line-clamp-2 text-gray-700 text-sm mt-4">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech_stack_img.map((img, index) => (
                        <div
                          key={index}
                          className="w-8 p-1 border border-gray-300">
                          <Image
                            src={img}
                            alt="icon"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    <button className="flex items-center gap-4 bg-gray-950 text-white px-4 py-2 text-sm hover:gap-6 transition-all duration-500 cursor-pointer uppercase">
                      View Details
                      <BsArrowRight className="-mt-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-x border-gray-300"></div>
        <div className="bg-white"></div>
      </section>

      {/* separator */}
      <div className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] bg-transparent border-y border-gray-300 h-10">
        <div className="bg-white"></div>

        <div className="border-x border-gray-300"></div>

        <div></div>

        <div className="border-x border-gray-300"></div>

        <div className="bg-white"></div>
      </div>

      {/* contact */}
      <section
        id="contact"
        className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
        <div className="bg-white"></div>
        <div className="border-x border-gray-300"></div>

        <div className="bg-white grid">
          <h1
            className="text-[12rem] font-bold row-start-1 col-start-1 -mt-18 ml-1 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 9px, rgba(83,83,83,0.25) 9px, rgba(83,83,83,0.25) 10px)",
              backgroundPosition: "center center",
            }}>
            03
          </h1>

          <div className="py-16 col-start-1 row-start-1">
            <h3 className="font-bold text-2xl border-y border-r-gray-300 bg-white">
              Contact
            </h3>

            <div className="mt-6 flex max-[940px]:flex-col gap-6 min-[940px]:gap-12 border-y border-gray-300">
              <div className="border-r border-gray-300">
                <h1 className="font-bold text-6xl border-b border-gray-300">
                  Get in touch
                </h1>

                <div className="mt-6 border-y border-gray-300 flex">
                  <div className="text-xl  w-14">
                    <div className=" border-r border-gray-300 w-fit p-1">
                      <LuPhone />
                    </div>
                  </div>
                  <p className="border-l border-gray-300 flex-1">
                    +69693037581
                  </p>
                </div>

                <div className="mt-6 border-y border-gray-300 flex">
                  <div className="text-xl  w-14">
                    <div className=" border-r border-gray-300 w-fit p-1">
                      <LuMail />
                    </div>
                  </div>
                  <p className="border-l border-gray-300 flex-1">
                    abaoeuro2002@gmail.com
                  </p>
                </div>
              </div>

              <form className="grid grid-cols-[24px_1fr_24px_1fr_24px] grid-rows-[24px_minmax(24px,1fr)_24px] max-sm:grid-cols-[14px_1fr_14px_1fr_14px] max-sm:grid-rows-[14px_1fr_14px] flex-1 min-[940px]:border-l max-[940px]:border-t border-gray-300">
                {/* 1st row */}
                <div></div>
                <div className="border-x border-gray-300"></div>
                <div></div>
                <div className="border-x border-gray-300"></div>
                <div></div>

                {/* 2nd row */}
                <div className="border-y border-gray-300"></div>
                <div className="col-span-3 flex flex-col">
                  <div className="grid min-[640px]:grid-cols-[minmax(40px,1fr)_24px_minmax(40px,1fr)]">
                    <input
                      type="text"
                      placeholder="Name"
                      className="p-2 min-[640px]:border-b border-x border-t border-gray-300"
                    />
                    <div className="min-[640px]:border-y border-gray-300"></div>
                    <input
                      type="text"
                      placeholder="Email"
                      className="p-2 border-t border-x border-b border-gray-300"
                    />
                  </div>

                  <div className="max-sm:h-[14px] h-6 border-x border-gray-300 grid grid-cols-[1fr_24px_1fr] max-sm:grid-cols-[1fr_14px_1fr]">
                    <div className="border-r border-gray-300"></div>
                    <div></div>
                    <div className="border-l border-gray-300"></div>
                  </div>

                  <textarea
                    name=""
                    placeholder="Write a message..."
                    className="flex-1 border border-gray-300 min-h-32 w-full p-2"></textarea>

                  <div className="max-sm:h-[14px] h-6 border-x border-b border-gray-300 grid grid-cols-[1fr_24px_1fr]">
                    <div></div>
                    <div></div>
                    <div className=" sm:border-l border-gray-300 "></div>
                  </div>

                  <div className="border-x border-b border-gray-300 grid min-[640px]:grid-cols-[1fr_24px_1fr]">
                    <div></div>
                    <div></div>
                    <div className="border-l border-gray-300">
                      <button className="bg-slate-950 text-white p-2 w-full cursor-pointer">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-y border-gray-300"></div>

                {/* 3rd row */}
                <div className="max-sm:border-b border-gray-300"></div>
                <div className="col-span-3 border-x border-gray-300 grid grid-cols-[1fr_24px_1fr] max-sm:border-b">
                  <div></div>
                  <div></div>
                  <div className="sm:border-l border-gray-300 "></div>
                </div>
                <div className="max-sm:border-b border-gray-300"></div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-x border-gray-300"></div>
        <div className="bg-white"></div>
      </section>

      {/* separator */}
      <div className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] bg-transparent border-y border-gray-300 h-10">
        <div className="bg-white"></div>

        <div className="border-x border-gray-300"></div>

        <div></div>

        <div className="border-x border-gray-300"></div>

        <div className="bg-white"></div>
      </div>

      {/* footer */}
      <div className="grid grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
        <div className="bg-white"></div>
        <div className="border-x border-gray-300"></div>

        <div className="bg-white py-16">
          <p className="text-center">Footer</p>
        </div>

        <div className="border-x border-gray-300"></div>
        <div className="bg-white"></div>
      </div>
    </div>
  );
}
