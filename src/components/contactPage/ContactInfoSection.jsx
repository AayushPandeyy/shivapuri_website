import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaMailBulk, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactInfoSection = () => {
  return (
    <div className="contactDetails lg:w-[50%] w-full p-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#0056A7] border-b-2 border-[#0056A7] pb-4">
          Contact Information
        </h1>

        <div className="space-y-6">
          <ContactInfoItem
            icon={<FaLocationDot className="text-blue-600" size={25} />}
            title="Our Location"
            text="Maharajgunj, Kathmandu"
          />
          <ContactInfoItem
            icon={<FaMailBulk className="text-blue-600" size={25} />}
            title="Email Address"
            text="info@shivapuricollege.edu.np"
          />
          <ContactInfoItem
            icon={<FaPhone className="text-blue-600" size={25} />}
            title="Phone Number"
            text="9841264440, 01-4522877"
          />
        </div>

        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Follow Us On
          </h3>
          <div className="flex gap-4">
            <SocialMediaIcon
              href="https://facebook.com"
              icon={<FaFacebook size={20} />}
            />
            <SocialMediaIcon
              href="https://instagram.com"
              icon={<FaInstagram size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, text }) => {
  return (
    <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition-transform duration-300">
      <div className="p-3 bg-blue-50 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const SocialMediaIcon = ({ href, icon }) => {
  return (
    <a
      href={href}
      className="p-3 bg-gray-100 hover:bg-blue-400 hover:text-white text-gray-600 rounded-full transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default ContactInfoSection;
