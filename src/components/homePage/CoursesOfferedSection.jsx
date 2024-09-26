import React from "react";
import { FaKitMedical } from "react-icons/fa6";

const CoursesOfferedSection = () => {
  return (
    <div className="coursesOffered">
      <h1
        className="text-center text-[40px] mb-8"
        style={{ fontFamily: "Quantico" }}
      >
        Courses Offered
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-8 p-4">
        {/* Course Card */}
        <div className="w-full h-80 sm:w-[45%] md:w-[30%] lg:w-[25%] p-4 border-black text-center flex flex-col justify-center items-center hover:shadow-2xl hover:scale-105 transition duration-500 shadow-lg bg-white rounded-lg">
          <h1 className="text-4xl mb-2">Medical Courses</h1>
          <p className="mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            laudantium tempora maxime aspernatur rerum quibusdam iusto animi
            mollitia perferendis. Commodi?
          </p>
          <button className="bg-transparent border-black border-[2px] text-black hover:bg-[#D9252A] hover:text-black font-bold py-3 px-6 rounded">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesOfferedSection;
