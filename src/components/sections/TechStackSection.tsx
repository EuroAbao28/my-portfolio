import { TECH_STACK } from "@/constants/images";
import Image from "next/image";
import React from "react";
import NumberStamp from "../generics/NumberStamp";
import ParentContainer from "../generics/ParentContainer";

function TechStackSection() {
  return (
    <ParentContainer id="technologies">
      <div className="bg-white grid">
        <NumberStamp number="02" />

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

                <p className="text-center text-gray-700 text-xs sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParentContainer>
  );
}

export default TechStackSection;
