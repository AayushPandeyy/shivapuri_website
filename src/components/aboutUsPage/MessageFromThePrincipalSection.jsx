import React from "react";
import image from "../../assets/principal.jpg";

const MessageFromThePrincipalSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Message From the Principal
        </h2>
        <div className="flex">
          <img
            src={image}
            alt=""
            className="rounded-full w-56 h-56 object-contain"
          />

          <p className="text-lg text-gray-600 mb-12 w-[70%] mx-auto text-start">
            Shivapuri College, founded in 2009 at Maharajgunj, Kathmandu, Nepal,
            is a renowned educational institution affiliated to Tribhuvan
            University. The college offers a Bachelor of Business Studies (BBS)
            program, which is designed to develop competent business
            professionals equipped to meet the challenges of the modern business
            world. Shivapuri College is committed to creating a supportive and
            intellectually stimulating environment for its students. The
            institution prides itself on a team of experienced and dedicated
            faculty members who are passionate about delivering high-quality
            education. The college also emphasizes the importance of practical
            experience, incorporating internships, workshops, and industry
            visits into the program. State-of-the-art facilities, including
            modern classrooms, well-equipped computer labs, and a resourceful
            library support the academic and extracurricular needs of students.
            In addition to academic excellence, Shivapuri College strongly
            focuses on the holistic development of its students. Various student
            support services, such as counseling and career guidance, are
            available to help students achieve their personal and professional
            goals. With a mission to create future leaders and innovators in the
            business world, Shivapuri College stands as a cornerstone of quality
            education and student success in Kathmandu.
          </p>
        </div>

        {/* Image Grid */}
      </div>
    </section>
  );
};

export default MessageFromThePrincipalSection;
