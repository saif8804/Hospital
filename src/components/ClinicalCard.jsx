import React from "react";

const cardData = [
  {
    name: "Cardiac Sciences",
    description:
      " Apollo's cardiac sciences department is at the forefront of cardia care in india and beyond, offering a comprehensive range of services from advance diagnostics and minimall",
    img: "https://irisind.in/clinics/wp-content/uploads/2025/02/1.png",
  },
  {
    name: "oncology",
    description:
      "Apollo cancer care department provides comprehensive and compassionate care for patients battling cancer. our multidisciplinary team of oncologists, surgeons.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8jmzhR1aFAgi-0HxYVoc0eeBZTh6sNe-yQ&s",
  },
  {
    name: "Neurosciences",
    description:
      "Apollo's neurosciences department offers comprehensive care for conditions affecting the brain, spinal cord, and nerves. Our team of expert neurologists, neurosurgeons",
    img: "https://www.duny.edu/wp-content/uploads/2024/02/neuroscience-scaled.jpg",
  },
  {
    name: "gastroenterology",
    description:
      "Apollo institute of gastroentrology is a pioneer in digestive and hepatobiliary care in india , setting benchmarks in trust , innovation and excellence As the nation leading.",
    img: "https://www.healixhospitals.com/tinyimages/Colorectal%20Surgery-Healix%20Hospitals.jpg",
  },
  {
    name: "orthopaedics",
    description:
      "Apollo orthopaedics department provides state-of-the art care for a wide range of musculoskeletal conditions, from sports injuries and joint replacements to spinal disorders",
    img: "https://media.istockphoto.com/id/1479961383/photo/treatment-for-knee-injuries-anatomical-model-of-human-knee-joint-on-doctor-table-in.jpg?s=612x612&w=0&k=20&c=ei_PyfcDe929uORfpFR7vRgA7me-FUhFDIu1C1g6L7g=",
  },
  {
    name: "Transplants",
    description:
      "Apollo's transplant program offers hope and healing for patients in need of organ transplants. our team of expert transplant surgeon and specialists.",
    img: "https://www.shutterstock.com/image-photo/doctor-planning-marking-patients-hairline-600nw-2595671125.jpg",
  },
];

const ClinicalCard = () => {
  return (
    <div className="flex gap-10 mt-5 overflow-x-auto no-scrollbar ">
      {cardData.map((data, index) => {
        return (
          <div >
            <div className=" flex   mt-8 h-[300px] w-[800px]  bg-white justify-between rounded-2xl shadow-2xl hover:border-1 hover:border-cyan-700">
            <div className="pt-2 px-8 w-1/2">
              <h2 className="text-xl">{data.name}</h2>
              <p className="pt-2">{data.description}</p>
            </div>
            <div className=" mt-2 mb-2 mx-4  w-1/2 ">
              <img
                className="w-full h-[280px] rounded-xl"
                src={data.img}
                alt="cardiac sciences"
              />
            </div>
          </div>
          </div>
          
        );
      })}
    </div>
  );
};

export default ClinicalCard;
