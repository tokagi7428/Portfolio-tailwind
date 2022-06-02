import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex max-w-7xl mx-auto align-center my-20 flex-wrap lg:flex md:flex"
    >
      <div className="lg:max-w-md  mx-auto max-w-xs">
        <h1 className="font-bold text-xl my-2">Tanatip</h1>
        <p className="text-gray-400 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe fugit
          quasi suscipit iure quibusdam ex?
        </p>
        <div className="flex w-8 my-5">
          <img
            className="rounded-full mx-2"
            src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451__340.png"
            alt=""
          />
          <img
            className="rounded-full mr-2"
            src="https://cdn.pixabay.com/photo/2017/10/04/11/58/facebook-2815970__340.jpg"
            alt=""
          />
          <img
            className="rounded-full "
            src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080__340.png"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-md  mx-auto">
        <h1 className="my-2 font-bold text-xl">Contact</h1>
        <p className="my-2">093-xxx-xxxx</p>
        <p className="my-2">firstman131@hotmail.com</p>
        <p className="my-2">Bankok</p>
      </div>
    </div>
  );
}

export default Contact;
