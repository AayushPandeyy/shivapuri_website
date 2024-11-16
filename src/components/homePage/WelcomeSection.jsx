import React from "react";

const WelcomeSection = () => {
  return (
    <div className="flex justify-center items-center p-4 mt-10 mb-10 w-[70%] mx-auto">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="mb-4 text-gray-500 font-bold">
          Shivapuri College, founded in 2009 at Maharajgunj, Kathmandu, Nepal,
          is a renowned educational institution affiliated with Tribhuvan
          University. The college offers a Bachelor of Business Studies (BBS)
          program, which is designed to develop competent business professionals
          equipped to meet the challenges of the modern business world.
        </p>
        <img
          src="https://www.pngitem.com/pimgs/b/332-3322444_facsimile-png-download-fake-signature-transparent-background-png.png"
          className="h-20 w-20"
          alt=""
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
