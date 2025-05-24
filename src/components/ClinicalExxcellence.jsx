import React from "react";
import { CgAdd } from "react-icons/cg";


const ClinicalExxcellence = () => {
  const excellence = [
    "cardiac sciences",
    "oncology",
    "neurosciences",
    "orthopaedics",
    "gastroenterology",
    "transplant",
  ];
  return (
    <div className="flex justify-between items-center pt-8 ">
     <div className="flex gap-5  ">
         {excellence.map((item, index) => {
        return <div className="border-1 p-1 px-2 rounded-full text-xs hover:bg-cyan-700 cursor-pointer">{item.toUpperCase()}</div>;
      })}
     </div>
     <CgAdd className="text-3xl hover:bg-cyan-700 rounded-full"/>
     <div>
       
     </div>
    </div>
  );
};

export default ClinicalExxcellence;
