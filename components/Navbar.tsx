"use client";
import { useState } from "react";
import Image from "next/image";

import { navLinks } from "../app/uiux/constants/index.js";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative w-full py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/icons/logo.svg" alt="BankEase" width={34} height={34} />
          <h1 className="ml-2 text-2xl font-ibm-plex-serif font-bold text-white">BankEase</h1>
        </div>

        <ul className="list-none hidden flex-1 items-center justify-end sm:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer font-poppins text-[15px] font-medium transition-colors ${
                active === nav.title ? "text-white" : "text-gray-400 hover:text-gray-200"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <Image
            src={toggle ? "/icons/close.svg" : "/icons/menu.svg"}
            alt="menu"
            width={28}
            height={28}
            className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-0 top-14 z-50 min-w-[220px] flex-col rounded-2xl border border-white/10 bg-gray-900/95 p-6 shadow-elevated backdrop-blur-xl`}
          >
            <ul className="list-none flex flex-1 flex-col items-center justify-center">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-poppins text-[16px] font-medium ${
                    active === nav.title ? "text-white" : "text-gray-400"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
