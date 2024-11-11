import React from "react";

const StatsSection = () => {
  return (
    <div
      className=" bg-blue-500 w-full"
      style={{
        backgroundImage: `url("https://www.shutterstock.com/image-vector/school-seamless-background-education-science-600nw-2185343577.jpg")`,
      }}
    >
      <h1 className=" text-black text-center p-2 text-4xl font-bold">
        Our Journey
      </h1>
      <div className="flex flex-wrap justify-around items-center  text-white text-center py-6 gap-8 ">
        <div className=" w-full mx-1 flex flex-col border-4 p-10 border-black rounded-lg bg-black sm:w-[45%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-3xl font-bold">20+</h1>
          <p className="font-semibold">Qualified Teachers</p>
        </div>
        <div className=" w-full mx-1 flex flex-col border-4 p-10 border-black rounded-lg bg-black sm:w-[45%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-3xl font-bold">600+</h1>
          <p className="font-semibold">Excellent Students</p>
        </div>
        <div className=" w-full mx-1 flex flex-col border-4 p-10 border-black rounded-lg bg-black sm:w-[45%] md:w-[30%] lg:w-[25%]">
          <h1 className="text-3xl font-bold">15+</h1>
          <p className="font-semibold">Years of Excellency</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
