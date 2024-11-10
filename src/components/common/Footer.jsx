import React from "react";
import logo from "../../assets/collegeLogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#262626]">
      <div className="footer flex flex-col gap-2 justify-center items-center w-full p-4">
        <Link to="/">
          <img src={logo} alt="" className="w-20 h-20" />
        </Link>
        <div className="links flex gap-8 text-gray-400 text-lg flex-wrap">
          <Link to="/about-us" className="hover:text-gray-600">
            About Us
          </Link>
          <Link className="hover:text-gray-600">Academics</Link>
          <Link className="hover:text-gray-600">Admission</Link>
          <Link className="hover:text-gray-600">Gallery</Link>
          <Link className="hover:text-gray-600">Contact</Link>
        </div>

        <p className="text-gray-400">&#169; 2024 Shivapuri College</p>
        <p className="text-gray-400">All Rights Reserved</p>
        <div className="flex gap-4 pt-4">
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
      </div>
    </footer>
  );
};

export default Footer;
