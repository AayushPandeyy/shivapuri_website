import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[750px] bg-cover bg-center"
      style={{
        backgroundImage: `url("https://www.setopati.com/uploads/posts/shivapuri%20school%20(8)1648743762.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{" "}
      {/* Overlay */}
      <div className="relative flex flex-col justify-center items-center h-full text-center px-6">
        <h1
          className="text-white text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "Quantico" }}
        >
          Empowering Minds, Shaping Futures
        </h1>
        <p
          className="text-white text-lg md:text-xl mb-8"
          style={{ fontFamily: "Quantico" }}
        >
          Fostering Innovation, Knowledge, and Leadership for a Brighter
          Tomorrow
        </p>
        <div className="flex space-x-4">
          <button className="bg-[#D9252A] hover:bg-transparent border-[2px] border-[#D9252A] text-white font-bold py-3 px-6 rounded shadow-lg">
            SEE PROGRAMS
          </button>
          <button className=" bg-[#0056A7] text-white hover:bg-transparent border-[2px] border-[#0056A7]  hover:text-white font-bold py-3 px-6 rounded shadow-lg">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
