import React, { useState } from "react";
import logo from "../../assets/collegeLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className=" shadow-lg w-full"
      style={{
        backgroundColor: "#0056A7",
        fontFamily: "Oswald",
        fontWeight: "bold",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-20  ">
          <div
            className="hidden md:flex gap-2 items-center"
            style={{ fontFamily: "Kanit" }}
          >
            <a
              href="/home"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium"
            >
              About Us
            </a>
            <a
              href="/skills"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium"
            >
              Academics
            </a>
            <img className="rounded-full h-20 w-20" src={logo} alt="" />
            <a
              href="/projects"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium"
            >
              Admission
            </a>
            <a
              href="/gallery"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>
          <div className="burger flex justify-between md:hidden items-center w-full">
            <img src={logo} alt="" className="h-20 w-20" />
            <div className=" md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none "
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden ">
          <div
            className="space-y-1 px-2 pb-3 sm:px-3"
            style={{ fontFamily: "Kanit" }}
          >
            <a
              href="/home"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#projects"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Academics
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Admission
            </a>
            <a
              href="#gallery"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
