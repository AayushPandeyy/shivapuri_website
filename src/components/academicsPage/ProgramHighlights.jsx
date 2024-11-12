import React from "react";
import {
  FaGraduationCap,
  FaBook,
  FaUserTie,
  FaChalkboardTeacher,
} from "react-icons/fa";

const ProgramHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Professional Development",
      description:
        "Focus on developing professional skills and business acumen",
      icon: <FaUserTie className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 2,
      title: "Expert Faculty",
      description:
        "Learn from experienced professors and industry professionals",
      icon: (
        <FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-4" />
      ),
    },
    {
      id: 3,
      title: "Comprehensive Curriculum",
      description: "Well-rounded education covering all aspects of business",
      icon: <FaBook className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 4,
      title: "Career Opportunities",
      description:
        "Prepare for diverse career paths in business and management",
      icon: <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Program Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {highlight.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
