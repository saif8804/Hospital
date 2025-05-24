import React from "react";
import ClinicalExxcellence from "./ClinicalExxcellence";
import ClinicalCard from "./ClinicalCard";

const SecondaryContainer = () => {
  return (
    <div className="py-8 px-48">
      <div>
        <h2 className="text-2xl font-bold">
          Discover Our Centres of Clinical Excellence
        </h2>
        <p className="text-xs pt-3 ">
          Experience world-class healthcare at Apollo's specialized hubs of
          medical innovation. Our state-of-the-art centres deliver unparalleled
          expertise in key specialties and super specialties. Each centre stands
          as a beacon of cutting-edge care, setting new benchmarks in clinical
          outcomes globally.
        </p>
      </div>
      <ClinicalExxcellence />
      <div>
        <ClinicalCard />
      </div>
    </div>
  );
};

export default SecondaryContainer;
