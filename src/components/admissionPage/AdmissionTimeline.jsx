import React from "react";
import {
  FaGraduationCap,
  FaFileAlt,
  FaUserCheck,
  FaCalendarCheck,
  FaUserGraduate,
} from "react-icons/fa";

const AdmissionTimeline = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Application",
      description:
        "Fill out the application form with all required personal and academic information",
      icon: <FaFileAlt className="text-blue-600 text-xl" />,
    },
    {
      id: 2,
      title: "Document Submission",
      description:
        "Submit all academic documents, photos, and other required materials",
      icon: <FaUserCheck className="text-blue-600 text-xl" />,
    },
    {
      id: 3,
      title: "Entrance Exam",
      description:
        "Take the entrance exam to evaluate your academic preparedness",
      icon: <FaGraduationCap className="text-blue-600 text-xl" />,
    },
    {
      id: 4,
      title: "Interview",
      description: "Personal interview with college faculty members",
      icon: <FaUserGraduate className="text-blue-600 text-xl" />,
    },
    {
      id: 5,
      title: "Final Selection",
      description: "Receive admission decision based on overall performance",
      icon: <FaCalendarCheck className="text-blue-600 text-xl" />,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Admission Process
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex relative pb-12">
              {index !== steps.length - 1 && (
                <div className="absolute h-full w-0.5 bg-blue-600 left-6 top-6"></div>
              )}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center relative z-10">
                {step.icon}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionTimeline;
