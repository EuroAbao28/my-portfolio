import React from "react";
import { LuMail, LuPhone } from "react-icons/lu";

function ContactSection() {
  return (
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
            Contact:
          </h3>

          <div className="mt-6 flex max-[940px]:flex-col gap-6 min-[940px]:gap-12 border-y border-gray-300">
            <div className="min-[940px]:border-r border-gray-300">
              <h1 className="font-bold text-5xl md:text-6xl border-b border-gray-300">
                Get in touch
              </h1>

              <div className="mt-6 border-y border-gray-300 flex">
                <div className="text-xl  w-14">
                  <div className=" border-r border-gray-300 w-fit p-1">
                    <LuPhone />
                  </div>
                </div>
                <p className="border-l border-gray-300 flex-1">+69693037581</p>
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
              <div></div>
              <div className="col-span-3 border-x border-gray-300 grid grid-cols-[1fr_24px_1fr]">
                <div></div>
                <div></div>
                <div className="sm:border-l border-gray-300 "></div>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-x border-gray-300"></div>
      <div className="bg-white"></div>
    </section>
  );
}

export default ContactSection;
