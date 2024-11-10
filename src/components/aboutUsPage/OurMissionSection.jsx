import React from "react";
import image from "../../assets/goal.png";

const OurMissionSection = () => {
  return (
    <section className="bg-gray-100 py-16 w-full">
      <div className="container mx-auto px-6 md:px-12 text-start">
        <h2
          className="text-4xl font-bold text-gray-800 mb-6"
          style={{ fontFamily: "Quantico" }}
        >
          Our Mission
        </h2>
        <div className="flex justify-between items-center w-full ">
          <p className="text-lg text-gray-600 w-[80%] text-start">
            Shivapuri College, founded in 2009 at Maharajgunj, Kathmandu, Nepal,
            is a renowned educational institution affiliated to Tribhuvan
            University. The college offers a Bachelor of Business Studies
            Dibakar Durdarshi (BBS) program, which is designed College Chief to
            develop competent business professionals equipped to meet the
            challenges of the modern business world. Shivapuri College is
            committed to creating a supportive and intellectually stimulating
            environment for its students. The institution prides itself on a
            team of experienced and dedicated faculty members who are passionate
            about delivering high-quality education. The college also emphasizes
            the importance of practical experience, incorporating internships,
            workshops, and industry visits into the program. State-of-the-art
            facilities, including modern classrooms, well-equipped computer
            labs, and a resourceful library support the academic and
            extracurricular needs of students. In addition to academic
            excellence, Shivapuri College strongly focuses on the holistic
            development of its students. Various student support services, such
            as counseling and career guidance, are available to help students
            achieve their personal and professional goals. With a mission to
            create future leaders and innovators in the business world,
            Shivapuri College stands as a cornerstone of quality education and
            student success in Kathmandu.
          </p>
          <img
            src={image}
            alt=""
            className="w-56 h-56 object-contain rounded-full"
          />
        </div>

        {/* Image Grid */}
      </div>
    </section>
  );
};

export default OurMissionSection;
