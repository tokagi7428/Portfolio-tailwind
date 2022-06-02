import React from "react";

function Aboutme() {
  return (
    <div
      id="aboutme"
      className="flex align-center lg:max-w-6xl mx-auto flex-wrap mt-20"
    >
      <div className="mx-auto">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
          alt=""
        />
      </div>
      <div className="flex flex-col w-2/4 mx-auto">
        <h1 className="font-bold text-xl lg:text-5xl my-6">Why You Hire Us?</h1>
        <p className="text-gray-500 max-w-8xl ">
          Proin ipsum arcu, lobortis id ullamcorper nec, vehicula eget magna.
          Sed ut malesuada magna, eget lacinia sapien. Nam molestie non ex sit
          amet ornare. Nunc in pellentesque ipsum, vel vulputate sapien.
          Suspendisse potenti. Aliquam elementum felis purus, quis vulputate
          libero semper nec. Morbi tincidunt maximus nisl vel placerat.
          Curabitur at ligula ac diam elementum hendrerit. Suspendisse nec metus
          eu est laoreet hendrerit vitae non ipsum. Nam faucibus elementum arcu,
          eget eleifend tortor.
        </p>
        <a
          href="#readmore"
          className="my-6 bg-amber-500 w-max p-2 px-4 rounded-full text-white"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default Aboutme;
