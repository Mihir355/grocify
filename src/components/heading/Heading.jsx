import React from "react";

const Heading = (props) => {
  return (
    <div className="w-fit mx-auto mb-10">
      <div className=" text-3xl md:text-4xl font-bold pb-2">
        <span className="text-orange-500">{props.highlight}</span>
        {props.normal}
      </div>
      <div className="bg-orange-500 w-25 md:w-30 h-1 rounded-2xl ml-auto"></div>
    </div>
  );
};

export default Heading;
