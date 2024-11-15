import React from "react";
import {
  FaGraduationCap,
  FaFileAlt,
  FaUserCheck,
  FaUserGraduate,
} from "react-icons/fa";

const AdmissionRequirements = () => {
  const requirements = [
    {
      id: 1,
      title: "Academic Qualification",
      description: "Grade 12 Passed or Equivalent",
      icon: <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 2,
      title: "Application",
      description: "Complete Application Form with all details",
      icon: <FaFileAlt className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 3,
      title: "Documents",
      description: "All Academic Documents and Passport Size Photo",
      icon: <FaUserCheck className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 4,
      title: "Selection Process",
      description: "Entrance Exam/Interview",
      icon: <FaUserGraduate className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
  ];
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Admission Requirements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((requirement) => (
            <div
              key={requirement.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {requirement.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {requirement.title}
              </h3>
              <p className="text-gray-600">{requirement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionRequirements;
