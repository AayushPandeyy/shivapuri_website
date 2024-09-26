import React from "react";

const StatsSection = () => {
  return (
    <div
      className="h-64 bg-blue-500 mb-10 w-full"
      style={{
        backgroundImage: `url("https://www.shutterstock.com/image-vector/school-seamless-background-education-science-600nw-2185343577.jpg")`,
      }}
    >
      <h1
        className=" text-black text-center p-2 text-3xl"
        style={{ fontFamily: "Quantico" }}
      >
        Our Journey
      </h1>
      <div className="stats flex flex-wrap justify-around items-center h-40 text-white text-center">
        <div className="stat1 flex flex-col border-4 p-10 border-black rounded-lg bg-black w-[20%]">
          <h1 className="text-3xl" style={{ fontFamily: "Quantico" }}>
            20+
          </h1>
          <p>Teachers</p>
        </div>
        <div className="stat1 flex flex-col border-4 p-10 border-black rounded-lg bg-black w-[20%]">
          <h1 className="text-3xl" style={{ fontFamily: "Quantico" }}>
            600+
          </h1>
          <p>Students</p>
        </div>
        <div className="stat1 flex flex-col border-4 p-10 border-black rounded-lg bg-black w-[20%]">
          <h1 className="text-3xl" style={{ fontFamily: "Quantico" }}>
            10+
          </h1>
          <p>Years of Excellency</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
