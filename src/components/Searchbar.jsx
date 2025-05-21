import React from "react";

const Searchbar = () => {
  return (
    <div className="absolute top-[80%] left-[20%] text-white">
      <div className=" flex justify-between items-center border-1 border-blue-200 rounded-xl overflow-hidden w-188 h-[30px] ">
        <input
          className="w-188 h-[30px] rounded-xl border-hidden outline-none px-2 "
          type="text"
          placeholder="search for doctors and specialities"
        />
        <img
          src="https://www.pikpng.com/pngl/b/54-544828_search-icon-hi-search-icon-png-orange-clipart.png"
          alt="icon"
          className="w-5 h-5 mx-2 cursor-pointer"
        />
      </div>
       
    </div>
  );
};

export default Searchbar;
