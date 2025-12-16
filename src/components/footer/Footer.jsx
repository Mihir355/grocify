import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className=" flex flex-wrapgap-y-10  max-w-[1400px] mx-auto px-10">
        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl">
            Gr<span className="text-orange-500 font-semibold">O</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2025 &copy; All Rights Reserved</p>
        </div>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-semibold">Company</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zince-800">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zince-800">
              FAQ'S
            </a>
          </li>
        </ul>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-semibold">Support</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zince-800">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zince-800">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zince-800">
              Contact us
            </a>
          </li>
        </ul>
        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-semibold">
            Stay Connected
          </h5>
          <p className="mt-6 text-zinc-600">
            Questions or Feedback?
            <br />
            We'd love to hear them.
          </p>
          <div className="flex bg-white p-1 rounded-lg mt-6">
            <input
              className="flex-1 h-[5vh] pl-4 focus:outline-none"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email Address"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
