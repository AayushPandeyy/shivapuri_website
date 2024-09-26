import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="bg-gray-800 text-gray-300">
      {/* Social Icons */}
      <div className="flex  justify-between items-center">
        <div className="flex gap-4 p-4">
          <a
            href="https://x.com/AayushxMUFC"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/AayushPandeyy"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
        <div>
          <a
            href=""
            className="bg-[#D9252A] text-white border-2 border-[#D9252A] hover:bg-transparent hover:text-white font-bold py-3 px-6"
          >
            Apply Now
          </a>
        </div>
      </div>
      {/* Contact Info */}
    </div>
  );
};

export default TopNavBar;
