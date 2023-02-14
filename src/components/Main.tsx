import React from "react";

const Main = () => {
  return (
    <main className=" ">
      <div className="flex flex-col gap-8 items-center p-4 py-[160px] rounded-bl-[10vh] main-bg-img">
        <h1 className="font-semibold text-white text-4xl text-center">
          A modern publishing platform
        </h1>
        <p className="text-white text-md text-center">
          Grow your audience and build your online brand
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-white text-light-red py-3 px-6 rounded-[100vh] font-semibold text-lg"
          >
            Start for Free
          </a>
          <a
            href="#"
            className="text-white bg-transparent border-[2px] border-white py-3 px-6 rounded-[100vh] font-semibold text-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
