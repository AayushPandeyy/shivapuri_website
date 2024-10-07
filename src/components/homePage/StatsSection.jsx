import React from "react";

const StatsSection = () => {
  return (
    <div
      className=" bg-blue-500 w-full"
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
      <div className="flex flex-wrap justify-around items-center  text-white text-center py-6 gap-8 ">
        <div className=" w-full mx-1 flex flex-col border-4 p-10 border-black rounded-lg bg-black sm:w-[45%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-3xl" style={{ fontFamily: "Quantico" }}>
            20+
          </h1>
          <p>Qualified Teachers</p>
        </div>
        <div className=" w-full mx-1 flex flex-col border-4 p-10 border-black rounded-lg bg-black sm:w-[45%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-3xl" style={{ fontFamily: "Quantico" }}>
            600+
          </h1>
          <p>Excellent Students</p>
        </div>
        <div className=" w-full mx-1 flex flex-col border-4 p-10 border-black rounded-lg bg-black sm:w-[45%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-3xl" style={{ fontFamily: "Quantico" }}>
            15+
          </h1>
          <p>Years of Excellency</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
