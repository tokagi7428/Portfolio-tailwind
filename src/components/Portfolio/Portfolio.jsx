import React from "react";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col align-center max-w-7xl mx-auto my-28 "
    >
      <div className="text-center my-10 max-w-md lg:max-w-xl mx-auto ">
        <h1 className="text-4xl font-bold my-4">Portfolio</h1>
        <p className="text-gray-500">
          When unknow printer took a gallery of type and scramblted it to make a
          type specimen book
        </p>
      </div>
      <div className="flex align-center justify-center relative gap-8 flex-wrap mx-autos">
        <div className="relative max-w-xs pb-10 rounded-xl shadow mx-auto">
          <img
            className="max-w-xs mx-auto"
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
            alt=""
          />
          <div className="m-3 mb-8">
            <h1 className="my-4 font-bold text-xl">Forest</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              ipsum culpa provident, sequi rerum veritatis
            </p>
          </div>
          <a
            href="#readmore"
            className="m-5 font-semibold bg-amber-300 p-2 px-6 rounded-full hover:bg-amber-500 hover:text-white"
          >
            Read More
          </a>
        </div>
        <div className="relative max-w-xs pb-10 rounded-xl shadow mx-auto">
          <img
            className="max-w-xs"
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
            alt=""
          />
          <div className="m-3 mb-8">
            <h1 className="my-4 font-bold text-xl">Forest</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              ipsum culpa provident, sequi rerum veritatis
            </p>
          </div>
          <a
            href="#readmore"
            className="m-5 font-semibold bg-amber-300 p-2 px-6 rounded-full hover:bg-amber-500 hover:text-white"
          >
            Read More
          </a>
        </div>
        <div className="relative max-w-xs max-w-xs pb-10 rounded-xl shadow mx-auto">
          <img
            className="max-w-xs"
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
            alt=""
          />
          <div className="m-3 mb-8">
            <h1 className="my-4 font-bold text-xl">Forest</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              ipsum culpa provident, sequi rerum veritatis
            </p>
          </div>
          <a
            href="#readmore"
            className="m-5 font-semibold bg-amber-300 p-2 px-6 rounded-full hover:bg-amber-500 hover:text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
