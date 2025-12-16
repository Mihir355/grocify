import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <ul className="flex md:flex-1 md:flex-row md:gap-x-10 max-w-[1400px] mx-auto flex-col">
      {props.array.map((value) => {
        return (
          <li id={value.id} key={value.id}>
            <div className=" flex flex-col gap-y-2 p-5 w-100 ">
              <img
                src={value.image}
                alt={`${value.title} image`}
                className="min-h-[30vh]"
              />
              <div className="flex flex-col bg-gray-200 p-5 gap-y-2 rounded-b-2xl">
                <p className="font-bold text-2xl">{value.title}</p>
                <p>{value.description}</p>
                <Link
                  to={`${value.path}`}
                  className="bg-gradient-to-b from-orange-500 to-orange-600 text-orange-100 px-5 py-2 rounded-2xl w-fit cursor-pointer"
                >
                  See All
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
