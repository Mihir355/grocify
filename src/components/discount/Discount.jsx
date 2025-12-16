import React from "react";
import Button from "../button/Button";
import FreshFruits from "../../assets/Grocery Website Assets/fresh-fruits.png";
const Discount = () => {
  return (
    <section
      className="bg-gray-200 bg-no-repeat bg-contain bg-right"
      style={{ backgroundImage: `url(${FreshFruits})` }}
    >
      <div className="md:bg-transparent bg-gray-200 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10">
        <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>
        <div className="max-w-[700px]">
          <h3 className="md:text-7xl text-4xl font-bold">
            First Order Discount!
          </h3>
          <p className="my-6">
            Enjoy an exclusive first order discount on our grocery website! Shop
            free
          </p>
          <Button props={"Get a Discount"} />
        </div>
      </div>
    </section>
  );
};

export default Discount;
