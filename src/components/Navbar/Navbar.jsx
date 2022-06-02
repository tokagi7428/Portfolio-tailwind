import React from "react";

function Navbar() {
  return (
    <div
      className="flex justify-between p-10 px-20 shadow flex-wrap w-full"
      id="home"
    >
      <div>
        <h1 className="text-4xl font-bold">Portfolio</h1>
      </div>
      <ul className="flex space-x-8 align-center justify-center text-lg font-semibold">
        <li className="hover:text-red-500 hover:border-b-2 hover:border-indigo-600 text-green-500">
          <a href="#banner">Home</a>
        </li>
        <li className="hover:text-red-500 hover:border-b-2 hover:border-indigo-600">
          <a href="#service">Service</a>
        </li>
        <li className="hover:text-red-500 hover:border-b-2 hover:border-indigo-600">
          <a href="#aboutme">About me</a>
        </li>
        <li className="hover:text-red-500 hover:border-b-2 hover:border-indigo-600">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="hover:text-red-500 hover:border-b-2 hover:border-indigo-600">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
