import { ParentContainerProps } from "@/types";
import React from "react";

function ParentContainer({ id, children }: ParentContainerProps) {
  return (
    <section
      id={id}
      className="grid grid-cols-[1fr_14px_minmax(0,1100px)_14px_1fr] sm:grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] scroll-mt-[92px] min-[900px]:scroll-mt-[137px]">
      <div className="bg-white"></div>
      <div className="border-x border-gray-300"></div>

      {/* children here */}
      {children}

      <div className="border-x border-gray-300"></div>
      <div className="bg-white"></div>
    </section>
  );
}

export default ParentContainer;
