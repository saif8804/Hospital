import React, { useState } from "react";
import { NAV_DROPDOWNS, SUPPORTED_LANGUAGES } from "../utils/constant";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { name: "Discover Apollo", path: "/discover" },
    { name: "find hospital", path: "/find" },
    { name: "Apollo", path: "/apollo" },
    { name: "medical services", path: "/medical" },
    { name: "health library", path: "/library" },
  ];

  return (
    <div className="flex absolute top-0 left-0 right-0 z-10 justify-center items-center gap-30 text-white hover:bg-white hover:text-black font-bold text-xs p-4 px-8">
      <div className="flex gap-10 font-bold ml-30">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="nav-item flex items-center gap-2 cursor-pointer relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h4>{item.name.toUpperCase()}</h4>
            <IoIosArrowDown />
            {hoveredIndex === index && (
              <div className="absolute top-9 left-0 right-0 mt-0 bg-white text-black rounded overflow-y-hidden shadow-lg w-[140px] py-2 z-20">
                {(NAV_DROPDOWNS[item.name] || []).map((topic, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {topic.label}
                  </div>
                ))}
              </div>
            )}
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
          })}
        </select>
      </div>
    </div>
  );
};

export default Navbar;