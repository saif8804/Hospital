import React from "react";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    "Discover Apollo",
    "find hospital",
    "Apollo",
    "medical services",
    "health library",
  ];
  return (
    <div className="flex  absolute top-0 left-0 right-0 z-10 justify-center items-center gap-30 text-white hover:bg-white hover:text-black  font-bold text-xs p-4 px-8">
      <div className="flex gap-10 font-bold ml-30 ">
        {navItems.map((item, index) => (
          <div key={index} className="nav-item flex items-center gap-2 cursor-pointer ">
            <h4> {item.toUpperCase()}</h4>
            <IoIosArrowDown />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-10">
        <img
          src="https://www.pikpng.com/pngl/b/54-544828_search-icon-hi-search-icon-png-orange-clipart.png"
          alt="icon"
          className="w-5 h-5 cursor-pointer"
        />
        <select className="border rounded px-2 py-1">
          {SUPPORTED_LANGUAGES.map((lang) => {
            return (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            );
          })}{" "}
        </select>
      </div>
    </div>
  );
};

export default Navbar;