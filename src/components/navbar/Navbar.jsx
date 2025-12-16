import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { TbMenu4 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const displayMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white">
        <nav className="max-w-[1400px] flex justify-between h-[14vh] items-center px-20 mx-auto">
          {/* logo */}
          <Link to="/" className="text-3xl">
            Gr<span className="text-orange-500 font-semibold">O</span>cify
          </Link>
          {/* nav options */}
          <ul className="md:flex hidden gap-x-15">
            <li className="font-semibold hover:text-orange-400">
              <a href="#">About Us</a>
            </li>
            <li className="font-semibold hover:text-orange-400">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold hover:text-orange-400">
              <a href="#">Process</a>
            </li>
            <li className="font-semibold hover:text-orange-400">
              <a href="#">Contact Us</a>
            </li>
          </ul>
          {/* third section */}
          <div className="flex gap-x-5">
            <div className="md:flex hidden border-2 p-1 border-amber-500 rounded-full">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search"
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="flex border-2 text-white bg-gradient-to-b from-red-800 to-orange-500 rounded-full h-10 w-10 justify-center items-center cursor-pointer">
                <IoSearch />
              </button>
            </div>
            <a href="#" className="text-2xl flex items-center">
              <FaHeart />
            </a>
            <a href="#" className="text-2xl flex items-center ">
              <IoBag />
            </a>
            <a
              href="#"
              className="text-2xl flex items-center md:hidden"
              onClick={displayMenu}
            >
              {menu ? <TbMenu4 /> : <FiMenu />}
            </a>
          </div>
          {/* Mobile Section */}
          <ul
            className={`md:hidden flex flex-col items-center gap-y-10 bg-orange-400/50 backdrop-blur-xl p-15 transform -translate-x-1/2 transition-all duration-500 ${
              menu ? "left-1/2" : "-left-full"
            }  absolute top-30 rounded-2xl`}
          >
            <li className="font-semibold hover:text-orange-500">
              <a href="#">About Us</a>
            </li>
            <li className="font-semibold hover:text-orange-500">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold hover:text-orange-500">
              <a href="#">Process</a>
            </li>
            <li className="font-semibold hover:text-orange-500">
              <a href="#">Contact Us</a>
            </li>
            <li className="flex md:hidden border-2 p-1 border-amber-500 rounded-full">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Search"
                className="flex-1 h-[5vh] px-3 focus:outline-none"
              />
              <button className="flex border-2 text-white bg-gradient-to-b from-red-800 to-orange-500 rounded-full h-10 w-10 justify-center items-center cursor-pointer">
                <IoSearch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
