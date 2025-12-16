import React from "react";

const Banner = ({ title, bgImage }) => {
  return (
    <div
      className=" mt-25 h-[50vh] flex justify-center items-center bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h3 className="p-5 text-5xl text-gray-500 bg-white font-semibold rounded-lg">
        {title}
      </h3>
    </div>
  );
};

export default Banner;
