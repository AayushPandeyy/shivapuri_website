import React from "react";
import { FaBook, FaKitMedical } from "react-icons/fa6";

const CoursesOfferedSection = () => {
  return (
    <section className="courseOffered flex flex-col gap-4 w-full bg-gradient-to-t from-blue-100 via-purple-100 to-pink-100">
      <div className="mainContainer py-4">
        <div className="header text-center w-[40%] mx-auto mb-10 mt-10">
          <h1 className="mb-4 text-4xl" style={{ fontFamily: "Kinat" }}>
            Bachelors In Business Studies
          </h1>
          <p className="text-gray-500 font-bold">
            Join our Bachelor of Business Studies program to gain the knowledge,
            skills, and experience needed to excel in the world of business.
            With a curriculum designed to provide both theoretical foundations
            and practical expertise, BBS prepares you for a bright future in
            various sectors.
          </p>
        </div>
        <div className="whyChoose bg-white rounded-lg lg:w-[60%] sm:w-[100%] md:w-[80%] mx-auto text-center p-6 mb-10 hover:shadow-lg">
          <h1 className="text-purple-500 text-2xl mb-2">Why Choose BBS?</h1>
          <ul className="space-y-4 text-left text-gray-700 lg:w-[60%] sm:w-[100%] md:w-[80%] mx-auto">
            <li className="flex items-center">
              <span className="bg-purple-500 p-2 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                ✓
              </span>
              Comprehensive business education covering Accounting, Management,
              and Finance.
            </li>
            <li className="flex items-center">
              <span className="bg-purple-500 p-2 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                ✓
              </span>
              Emphasis on real-world application through case studies, projects,
              and internships.
            </li>
            <li className="flex items-center">
              <span className="bg-purple-500 p-2 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                ✓
              </span>
              Strong focus on leadership, problem-solving, and communication
              skills.
            </li>
            <li className="flex items-center">
              <span className="bg-purple-500 p-2 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
                ✓
              </span>
              Multiple career opportunities in banking, marketing, HR, and
              entrepreneurship.
            </li>
          </ul>
        </div>
        <div className="applyNow text-center">
          <a
            href=""
            className="w-44 inline-block text-center  bg-purple-600 rounded-full p-4 text-white font-bold hover:shadow-lg hover:scale-105 transition duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesOfferedSection;
