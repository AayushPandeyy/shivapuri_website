import React from "react";

const AboutUsHeroSection = () => {
  return (
    <div className="relative w-full h-[400px] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{" "}
      {/* Overlay */}
      <div className="relative flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
