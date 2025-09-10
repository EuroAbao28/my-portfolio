import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-[1fr_14px_minmax(0,1100px)_14px_1fr] sm:grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr]">
      <div className="bg-white"></div>
      <div className="border-x border-gray-300"></div>

      <div className="bg-white pb-6 flex flex-col justify-center items-center">
        <img
          src="/catjumping.gif"
          alt="Funny GIF"
          className="w-16 rounded-lg"
        />

        <p className="text-center text-xs sm:text-base">
          © {new Date().getFullYear()} Euro Abao. All rights reserved.
        </p>
      </div>

      <div className="border-x border-gray-300"></div>
      <div className="bg-white"></div>
    </footer>
  );
}

export default Footer;
