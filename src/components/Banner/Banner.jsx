import React from "react";

function Banner() {
  return (
    <div
      id="banner"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-28  mt-32 max-w-full items-center"
    >
      <div className="flex flex-col justify-center items-center p-10  w-full mx-auto">
        <h1 className="font-bold text-4xl">I am Creative</h1>
        <h1 className="font-bold text-4xl m-2 text-amber-400">Web Devolper</h1>
        <p className="text-gray-500 text-lg mb-3">
          My name's Tanatip, Currently i'm a student, Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Est quos maxime saepe iure laudantium
          commodi beatae esse odit quo velit.
        </p>
        <button className="flex self-start bg-amber-400 shadow p-2 px-6 rounded-full text-white hover:bg-amber-500 hover:text-gray-500">
          HIRE ME
        </button>
      </div>
      <div className="flex align-center max-w-full mx-auto ">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/01/11/25/avatar-1300331__340.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
