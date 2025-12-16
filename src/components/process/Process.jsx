import React from "react";
import Heading from "../heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlant, PiFactory, PiMedal, PiTruck } from "react-icons/pi";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <PiMedal />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <PiTruck />,
  },
];

const Process = () => {
  const renderSteps = steps.map((item) => (
    <div
      key={item.id}
      className={`flex-1 ${item.id % 2 === 0 ? "md:-mt-100" : ""}`}
    >
      <span className="flex w-18 h-18 mx-auto text-8xl text-white justify-center items-center rounded-full bg-gray-900 outline-[3px] outline-offset-7 outline-zinc-800 outline-dotted">
        {item.number}
      </span>

      <div className="flex items-center gap-x-5 mt-10">
        <span className="flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full">
          {item.icon}
        </span>
        <div className="flex-1">
          <h4 className="text-zinc-800 text-2xl font-bold">{item.title}</h4>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <div className="w-fit mr-auto">
          <Heading highlight={"Our "} normal={"Process"} />
        </div>

        <div className="flex flex-col md:flex-row mt-20 md:mt-65 gap-y-16 md:gap-y-0 items-center justify-center">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;
