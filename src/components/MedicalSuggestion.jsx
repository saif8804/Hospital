import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const MedicalSuggestion = () => {
  const suggestions = [
    "Book Appointment",
    "Find Hospital",
    "Book Health Checkup",
    "Get Expert  Suggestion",
  ];
  return (
    <div className=" flex gap-1 absolute top-[90%] left-[20%] hover:cursor-pointer">
      {suggestions.map((item, index) => (
        <div 
         className=" flex gap-5 justify-between items-center bg-gray-200 p-2  first:rounded-l-2xl  last:rounded-r-2xl"
         key={index}
         >
          <h2 >{item}</h2>
          <FaArrowCircleRight />
        </div>
      ))}
    </div>
  );
};

export default MedicalSuggestion;