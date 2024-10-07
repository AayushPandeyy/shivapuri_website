import React from "react";
import image1 from "../../assets/image-4.jpg";
import image2 from "../../assets/image-2.jpg";
import image3 from "../../assets/image-3.jpg";
import image4 from "../../assets/image-5.jpg";
import image5 from "../../assets/image-6.jpg";

const OurMissionSection = () => {
  const images = [image1, image2, image3];
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-12 w-[70%] mx-auto">
          At Shivapuri College, our mission is to empower future business
          leaders by providing a comprehensive and dynamic education through the
          Bachelor of Business Studies (BBS) program. We strive to cultivate a
          learning environment that fosters critical thinking, practical skills,
          and ethical values. Our goal is to prepare students to excel in the
          ever-evolving business world, equipped with the knowledge, confidence,
          and adaptability needed to contribute meaningfully to society and the
          global economy. We are committed to academic excellence, professional
          development, and creating a community of lifelong learners.
        </p>

        {/* Image Grid */}
      </div>
    </section>
  );
};

export default OurMissionSection;
