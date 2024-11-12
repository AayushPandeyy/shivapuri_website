import React from "react";

const CourseStructure = () => {
  const yearData = [
    {
      year: "First Year",
      courses: [
        "English",
        "Business Studies",
        "Micro Economics",
        "Cost and Management Accountancy",
        "Principles of Management",
      ],
    },
    {
      year: "Second Year",
      courses: [
        "Business Communication",
        "Macro Economics",
        "Cost and Management Accounting",
        "Fundamentals of Marketing",
        "Fundamentals of Human Resource Management",
      ],
    },
    {
      year: "Third Year",
      courses: [
        "Business Environment Strategy",
        "Fundamental of Financial Management",
        "Business Law",
        "Taxation and Auditing",
        "Organizational Behavior",
      ],
    },
    {
      year: "Fourth Year",
      courses: [
        "Entrepreneurship and Enterprise Development",
        "Business Research Methods-50/Final Project-50",
        "Concentration I",
        "Concentration II",
      ],
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Course Structure
          <span className="block text-xl text-gray-600 mt-2">
            (4 year program)
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yearData.map((year, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 ">{year.year}</h3>
              <ul className="space-y-3">
                {year.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start">
                    <span className="mr-2  font-medium">
                      {courseIndex + 1}.
                    </span>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;
