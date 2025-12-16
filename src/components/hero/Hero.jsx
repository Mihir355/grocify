import React from "react";
import Grocery from "../../assets/Grocery Website Assets/grocery.png";
import Button from "../button/Button";
const Hero = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-20 mx-auto flex md:flex-row flex-col justify-center md:gap-x-5 gap-y-5">
        <div className="flex flex-1 flex-col gap-y-5 justify-center">
          <span className="bg-orange-100 rounded-full px-5 py-2 text-orange-800 max-w-fit">
            Export Best Quality...
          </span>
          <h1 className="text-5xl font-bold md:text-7xl">
            Tasty Organic <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> In Your City
          </h1>
          <p>
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button props={"Shop Now"} />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <img src={Grocery} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
