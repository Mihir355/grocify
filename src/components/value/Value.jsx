import React from "react";
import Heading from "../heading/Heading";
import { FaHeart } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import BasketImage from "../../assets/Grocery Website Assets/basket-full-vegetables.png";

const Value = () => {
  const features = [
    {
      id: 1,
      title: "Trust",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      image: <FaHeart />,
    },
    {
      id: 2,
      title: "Food Safety",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      image: <FaShieldAlt />,
    },
    {
      id: 3,
      title: "Always Fresh",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      image: <FaLeaf />,
    },
    {
      id: 4,
      title: "100% Organic",
      description:
        "It is a long established fact that a reader will be distracted by the readable.",
      image: <PiPlantFill />,
    },
  ];
  return (
    <div>
      <Heading highlight={"Our "} normal={"Values"} />
      <div className="flex md:flex-row flex-col md:gap-x-5 max-w-[1400px] mx-auto">
        {/* left values */}
        <div className="flex flex-col flex-1 gap-y-10 justify-between md:pt-15 md:pb-15 pt-5 pb-5">
          {features.slice(0, 2).map((item) => {
            return (
              <div
                className="flex gap-x-5 md:justify-end mx-auto"
                key={item.id}
              >
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold text-2xl md:flex md:justify-end">
                    {item.title}
                  </span>
                  <p className="md:text-right">{item.description}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-white text-2xl bg-orange-500 rounded-full h-11 w-11 flex justify-center items-center">
                    {item.image}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* center image */}
        <div className="md:flex md:flex-1 hidden">
          <img src={BasketImage} alt="Basket Image" />
        </div>
        {/* right values */}
        <div className="md:flex md:flex-col md:flex-1 md:gap-y-10 md:justify-between md:pt-15 md:pb-15 hidden">
          {features.slice(2, 4).map((item) => {
            return (
              <div className="flex gap-x-5" key={item.id}>
                <div className="flex flex-col justify-center">
                  <div className="text-white text-2xl bg-orange-500 rounded-full h-11 w-11 flex justify-center items-center">
                    {item.image}
                  </div>
                </div>
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold text-2xl">{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* small screen right values */}
        <div className="flex flex-col flex-1 gap-y-10 justify-between md:pt-15 md:pb-15 pt-5 pb-5 md:hidden">
          {features.slice(2, 4).map((item) => {
            return (
              <div
                className="flex gap-x-5 md:justify-end mx-auto"
                key={item.id}
              >
                <div className="flex flex-col gap-y-1">
                  <span className="font-semibold text-2xl md:flex md:justify-end">
                    {item.title}
                  </span>
                  <p className="md:text-right">{item.description}</p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-white text-2xl bg-orange-500 rounded-full h-11 w-11 flex justify-center items-center">
                    {item.image}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Value;
