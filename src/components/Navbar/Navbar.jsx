import React, { useState } from "react";
import "./navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="flex justify-between items-center p-10 px-20 shadow flex-wrap max-w-full mx-auto"
      id="home"
    >
      <div>
        <h1 className="lg:text-4xl text-3xl font-bold">Portfolio</h1>
      </div>
      <div className="mobile icon">
        <section className="flex lg:hidden md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pluse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pluse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pluse bg-gray-600"></span>
          </div>
          <div
            className={isOpen ? "showMenu " : "hideMenu"}
            onClick={() => setIsOpen(false)}
          >
            <div className="CROSS-ICON block absolute top-0 right-0 px-8 py-8">
              {""}
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="">
              <section className="flex lg:hidden md:hidden">
                <div
                  className={isOpen ? "hidden" : "HAMBURGER-ICON space-y-2"}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-8 animate-pluse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pluse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pluse bg-gray-600"></span>
                </div>
                <div
                  className={isOpen ? "showMenu shadow" : "hideMenu"}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="CROSS-ICON block absolute top-0 right-0 px-8 py-8">
                    {""}
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>

                  <ul className="mobile flex flex-col absolute left-6 top-0 text-lg md:2xl text-gray-500">
                    <li className="block mt-8 ">
                      <a href="#banner">Home</a>
                    </li>
                    <li className="block mt-8 l">
                      <a href="#service">Service</a>
                    </li>
                    <li className="block mt-8 ">
                      <a href="#aboutme">About me</a>
                    </li>
                    <li className="block mt-8 ">
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="block mt-8 ">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <ul className="desktop flex md:flex lg:flex hidden space-x-8 align-center justify-center text-lg font-semibold">
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
