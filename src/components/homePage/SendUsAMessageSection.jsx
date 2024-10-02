import React from "react";
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SendUsAMessageSection = () => {
  return (
    <section>
      <div
        className="mainContainer flex flex-col lg:flex-row w-full flex-wrap"
        style={{ fontFamily: "Quantico", position: "relative" }}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-white z-10"
          style={{
            backgroundImage: 'url("/background.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Contact Details Section */}
        <div className="contactDetails lg:w-[50%] w-full p-8 relative z-20 text-black">
          <div className="items flex flex-col w-[90%] mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-500 mb-6">
              We are here to assist you. Feel free to reach out to us through
              any of the options below.
            </p>

            {/* Location, Phone, and Email */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg p-4">
                <FaLocationDot size={25} />
                <p className="text-lg">Maharajgunj, Kathmandu</p>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg p-4">
                <FaMailBulk size={25} />
                <p className="text-lg">info@shivapuricollege.edu.np</p>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-lg p-4">
                <FaPhone size={25} />
                <p className="text-lg">9841264440, 01-4522877</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="iconsMedia flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                className="p-3 bg-pink-500 hover:bg-pink-600 rounded-full text-white text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-[50%] relative z-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1351.0200167738335!2d85.32891996737155!3d27.730772039855843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193e14ebf05f%3A0x8bcacb8d8768a848!2sShivapuri%20H.%20S.%20School!5e1!3m2!1sen!2snp!4v1727832863807!5m2!1sen!2snp"
            width="100%"
            height="450"
            className="border-none shadow-lg rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Send Message Section */}
      <div className="sendMessage w-full p-8 relative z-20">
        <div
          className="get-in-touch w-full p-6 rounded-lg shadow-lg"
          style={{
            backgroundColor: "#02112a",
          }}
        >
          <h1
            className="text-sm font-bold text-center text-white"
            style={{ fontFamily: "Bungee Hairline" }}
          >
            Contact Us
          </h1>
          <h1
            className="text-xl sm:text-2xl font-bold text-center mb-6 text-yellow-400"
            style={{ fontFamily: "Quantico" }}
          >
            We'd love to hear from you!
          </h1>

          <form className="p-6">
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 h-12 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-200"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 h-12 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-200"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 h-32 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendUsAMessageSection;
