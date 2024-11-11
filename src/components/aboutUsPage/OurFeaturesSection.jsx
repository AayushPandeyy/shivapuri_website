import React from "react";
import {
  FaChalkboardTeacher,
  FaUtensils,
  FaWater,
  FaClock,
  FaClipboardList,
  FaBookOpen,
  FaLaptop,
  FaUsers,
  FaPlane,
} from "react-icons/fa";

const OurFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Fully Digitalized Classrooms",
      description:
        "Experience state-of-the-art digital classrooms equipped with the latest technology to enhance learning.",
      icon: (
        <FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-4" />
      ),
    },
    {
      id: 2,
      title: "Modern & Hygienic Cafeteria",
      description:
        "Enjoy nutritious and hygienic meals in our modern cafeteria, ensuring the well-being of all students.",
      icon: <FaUtensils className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 3,
      title: "Clean Drinking Water",
      description:
        "Access to clean and safe drinking water throughout the campus to keep you hydrated and healthy.",
      icon: <FaWater className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 4,
      title: "Flexible Classes",
      description:
        "Benefit from flexible class schedules that accommodate diverse learning needs and lifestyles.",
      icon: <FaClock className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 5,
      title: "Progress Test",
      description:
        "Regular progress tests to monitor and support your academic growth and understanding.",
      icon: <FaClipboardList className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 6,
      title: "Extra Tuition Classes",
      description:
        "Access additional tuition classes to reinforce learning and ensure academic excellence.",
      icon: <FaBookOpen className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 7,
      title: "Digital Training",
      description:
        "Engage in digital training programs that prepare you for the modern workforce and technological advancements.",
      icon: <FaLaptop className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 8,
      title: "Extracurricular Activities",
      description:
        "Participate in a variety of extracurricular activities that foster personal growth and teamwork.",
      icon: <FaUsers className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
    {
      id: 9,
      title: "Educational Tour",
      description:
        "Expand your horizons with educational tours that provide real-world learning experiences.",
      icon: <FaPlane className="text-5xl text-blue-600 mx-auto mb-4" />,
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeaturesSection;
