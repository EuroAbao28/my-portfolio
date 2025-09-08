"use client";

import React, { useState } from "react";
import { LuMenu } from "react-icons/lu";
import SideNavMenu from "./modals/SideNavMenu";
import { LINKS } from "@/constants/generics";

function NavigationBar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <nav className="grid grid-cols-[1fr_14px_minmax(0,1100px)_14px_1fr] sm:grid-cols-[1fr_24px_minmax(0,1100px)_24px_1fr] md:grid-cols-[1fr_40px_minmax(0,1100px)_40px_1fr] border-b border-gray-300 sticky top-0 z-20">
      <div className="bg-white"></div>
      <div className="border-x border-gray-300"></div>

      <div className="bg-white">
        <div className="flex justify-between items-center min-[600px]:mt-10 min-[600px]:border-t border-gray-300">
          <h1 className="text-2xl font-bold ml-2">EA</h1>

          {/* large view */}
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

          {/* burger menu */}
          <div
            onClick={() => setIsSideMenuOpen(true)}
            className="hidden max-[600px]:block p-4 text-xl hover:bg-gray-50">
            <LuMenu />
          </div>

          <SideNavMenu
            navItems={LINKS}
            isOpen={isSideMenuOpen}
            onClose={() => setIsSideMenuOpen(false)}
          />
        </div>
      </div>

      <div className="border-x border-gray-300"></div>
      <div className="bg-white"></div>
    </nav>
  );
}

export default NavigationBar;
