import React from "react";

function Service() {
  return (
    <div
      id="service"
      className="flex flex-col justify-center items-center mt-40 p-10 max-w-full flex-wrap relative mx-auto"
    >
      <div className="text-center max-w-full">
        <h1 className="text-5xl my-5 font-bold">
          <span className="text-amber-500">S</span>ervice
        </h1>
        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          magnam!
        </p>
      </div>
      <div className="grid grid-cols-1 mx-auto  items-center mt-20 mx-10 lg:grid-cols-3 md:grid-cols-2 relative max-w-7xl mx-auto gap-4">
        <div className="flex flex-col items-center shadow p-5 py-20 h-full hover:border-amber-300 hover:border-2 hover:border-dashed hover:bg-gray-100 justify-center max-w-7xl mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2014/08/14/11/15/diamond-417896__340.png"
            alt=""
            className="w-20"
          />
          <h1 className="font-bold text-xl my-5">Web Solution</h1>
          <p className="w-3/4 text-gray-500 text-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi
            itaque officiis. Sapiente, ea excepturi. Natus debitis vero illum
            fugiat?
          </p>
          <a
            href="#readmore"
            className="mt-5 font-semibold bg-amber-300 p-2 px-6 rounded-full hover:bg-amber-500 hover:text-white"
          >
            Read More
          </a>
        </div>
        <div className="flex flex-col items-center shadow p-5 py-20 h-full hover:border-amber-300 hover:border-2 hover:border-dashed hover:bg-gray-100 max-w-7xl mx-auto">
          <img
            src="https://media.istockphoto.com/photos/light-bulb-picture-id1174074113?b=1&k=20&m=1174074113&s=170667a&w=0&h=K1bv1G701VimzlodfqRyO9s7lacozZe1k4XkHNOY3vw="
            alt=""
            className="w-20"
          />
          <h1 className="font-bold lg:text-xl my-5 text-md">
            {" "}
            Strategy & Research
          </h1>
          <p className="w-3/4 text-gray-500 text-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi
            itaque officiis. Sapiente, ea excepturi. Natus debitis vero illum
            fugiat?
          </p>
          <a
            href="#readmore"
            className="mt-5 font-semibold bg-amber-300 p-2 px-6 rounded-full hover:bg-amber-500 hover:text-white"
          >
            Read More
          </a>
        </div>
        <div className="flex flex-col items-center shadow p-5 py-20 h-full hover:border-amber-300 hover:border-2 hover:border-dashed hover:bg-gray-100 max-w-full md:max-w-7xl lg:max-w-7xl mx-auto">
          <img
            src="https://cdn.pixabay.com/photo/2019/02/26/09/19/calender-4021509__480.png"
            alt=""
            className="w-20"
          />
          <h1 className="font-bold text-md lg:text-xl my-5">Web Development</h1>
          <p className="w-3/4 text-gray-500 text-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi
            itaque officiis. Sapiente, ea excepturi. Natus debitis vero illum
            fugiat?
          </p>
          <a
            href="#readmore"
            className="mt-5 font-semibold bg-amber-300 p-2 px-6 rounded-full hover:bg-amber-500 hover:text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
