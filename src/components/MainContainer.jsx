import React from "react";
import VideoConatiner from "./VideoConatiner";
import Searchbar from "./Searchbar";
import MedicalSuggestion from "./MedicalSuggestion";

const MainContainer = () => {
  return (
    <div className="w-screen relative ">
      <VideoConatiner />
       <Searchbar />
       <MedicalSuggestion />
    </div>
  );
};

export default MainContainer;
