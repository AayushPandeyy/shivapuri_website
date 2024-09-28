import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaHeart,
  FaBuilding,
  FaMapMarkerAlt,
  FaDollarSign,
  FaAward,
  FaUserGraduate,
  FaBriefcase,
} from "react-icons/fa";

const WhyChoosUsSection = () => {
  const iconMap = {
    FaGraduationCap: <FaGraduationCap />,
    FaChalkboardTeacher: <FaChalkboardTeacher />,
    FaUsers: <FaUsers />,
    FaHeart: <FaHeart />,
    FaBuilding: <FaBuilding />,
    FaMapMarkerAlt: <FaMapMarkerAlt />,
    FaDollarSign: <FaDollarSign />,
    FaAward: <FaAward />,
    FaUserGraduate: <FaUserGraduate />,
    FaBriefcase: <FaBriefcase />,
  };
  const whyChooseUs = [
    {
      title: "Experienced Faculty",
      subtitle:
        "Learn from the Best: Our faculty members bring a wealth of knowledge and expertise, ensuring you get the best education possible.",
      icon: "FaGraduationCap",
    },
    {
      title: "Practical Learning Opportunities",
      subtitle:
        "Hands-On Experience: We emphasize practical learning through internships, projects, and real-world applications, preparing you for the job market.",
      icon: "FaChalkboardTeacher",
    },
    {
      title: "Positive Learning Environment",
      subtitle:
        "Supportive Atmosphere: Our campus fosters a welcoming and inclusive environment where every student can thrive and succeed.",
      icon: "FaUsers",
    },
    {
      title: "Holistic Development",
      subtitle:
        "Growth Beyond Academics: We focus on developing well-rounded individuals by encouraging extracurricular activities, leadership, and personal growth.",
      icon: "FaHeart",
    },
    {
      title: "Modern Facilities",
      subtitle:
        "State-of-the-Art Infrastructure: Enjoy access to modern labs, libraries, and learning spaces equipped with the latest technology.",
      icon: "FaBuilding",
    },
    {
      title: "Centrally Located",
      subtitle:
        "Convenient Location: Situated in the heart of the city, our campus is easily accessible, making your daily commute hassle-free.",
      icon: "FaMapMarkerAlt",
    },
    {
      title: "Affordable Tuition Fees",
      subtitle:
        "Affordable Education: We offer quality education at a cost-effective price, ensuring that financial constraints don't hold you back.",
      icon: "FaDollarSign",
    },
    {
      title: "Scholarship Opportunities",
      subtitle:
        "Rewarding Excellence: We provide various scholarships based on merit and need, helping students achieve their academic goals.",
      icon: "FaAward",
    },
    {
      title: "Career Counseling and Training",
      subtitle:
        "Guidance for Success: Our career counselors offer personalized advice and training to help you navigate your career path with confidence.",
      icon: "FaUserGraduate",
    },
    {
      title: "Career Support",
      subtitle:
        "Your Future, Our Priority: We assist you with job placements, internships, and networking opportunities, ensuring a smooth transition into your career.",
      icon: "FaBriefcase",
    },
  ];
  return (
    <section>
      <div className="mainContainer flex flex-col">
        <div className="title mt-10">
          <h1 className="text-4xl text-center mb-20">Why Choose Us?</h1>
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {whyChooseUs.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="card hover:shadow-lg hover:scale-105 transition duration-200 p-2 rounded-md h-52 w-52 bg-white flex flex-col  justify-center items-center text-center mb-4 text-5xl text-blue-500"
            >
              {iconMap[item.icon]}
              <h1 className="text-xl font-bold text-black">{item.title}</h1>
            </div>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap justify-center mb-20">
          {whyChooseUs.slice(5, 10).map((item, index) => (
            <div
              key={index + 5}
              className="card hover:shadow-lg hover:scale-105 transition duration-200 p-2 rounded-md h-52 w-52 bg-white flex flex-col  justify-center items-center text-center mb-4 text-5xl text-blue-500"
            >
              {iconMap[item.icon]}
              <h1 className="text-xl font-bold text-black">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosUsSection;
