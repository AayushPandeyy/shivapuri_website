import React from "react";
import logo from "../../assets/collegeLogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#262626]">
      <div className="footer flex flex-col gap-4 justify-center items-center w-full p-4">
        <img src={logo} alt="" className="w-20 h-20" />
        <div className="links flex gap-8 text-gray-400 text-lg flex-wrap">
          <a href="" className="hover:text-gray-600">
            About Us
          </a>
          <a href="" className="hover:text-gray-600">
            Academics
          </a>
          <a href="" className="hover:text-gray-600">
            Admission
          </a>
          <a href="" className="hover:text-gray-600">
            Gallery
          </a>
          <a href="" className="hover:text-gray-600">
            Contact
          </a>
        </div>
        <div className="flex gap-4 p-4">
          <a
            href="https://x.com/AayushxMUFC"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href="https://github.com/AayushPandeyy"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-gray-400">2024 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
