import React from "react";

const WelcomeSection = () => {
  return (
    <div className="flex justify-center items-center p-4 mt-10 mb-10 w-[70%] mx-auto">
      <div className="flex flex-col justify-center items-center h-full text-center px-6">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ fontFamily: "Quantico" }}
        >
          Welcome
        </h1>
        <p style={{ fontFamily: "Yusei Magic" }} className="mb-4">
          Shivapuri College is a renowned educational institution located in
          Nepal, dedicated to providing quality higher education. Known for its
          diverse academic programs, the college fosters a vibrant learning
          environment that encourages critical thinking and creativity. With a
          team of experienced faculty members, modern facilities, and a focus on
          holistic development, Shivapuri College prepares students to excel in
          their chosen fields and contribute positively to society. The college
          also emphasizes extracurricular activities, promoting a well-rounded
          educational experience that helps students build essential life
          skills.
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
