import React from "react";

const Button = ({ props }) => {
  return (
    <button className="bg-gradient-to-b from-orange-500 to-orange-600 text-orange-100 px-5 py-2 rounded-2xl w-fit cursor-pointer">
      {props}
    </button>
  );
};

export default Button;
