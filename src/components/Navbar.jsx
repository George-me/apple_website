import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const NavBar = () => {
  return (
    <header className="w-full py-5 px-5">
      <nav className="flex justify-between lg:justify-around ">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex max-sm:hidden">
          {navLists.map((nav, index) => (
            <div
              key={index}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-baseline">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
