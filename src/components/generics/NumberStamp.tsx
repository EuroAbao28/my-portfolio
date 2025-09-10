import React from "react";

function NumberStamp({ number }: { number: string }) {
  return (
    <h1
      className="text-[10rem] md:text-[12rem] -mt-12 md:-mt-18 font-bold row-start-1 col-start-1 ml-1 text-transparent bg-clip-text"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 9px, rgba(83,83,83,0.25) 9px, rgba(83,83,83,0.25) 10px)",
        backgroundPosition: "center center",
      }}>
      {number}
    </h1>
  );
}

export default NumberStamp;
