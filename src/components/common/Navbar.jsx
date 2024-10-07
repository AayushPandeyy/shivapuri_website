import React, { useState } from "react";
import logo from "../../assets/collegeLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="relative w-full"
      style={{
        fontFamily: "Oswald",
        fontWeight: "bold",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>{" "}
        <div
          className="relative flex justify-center h-20 z-10
         "
        >
          <div
            className="hidden md:flex gap-2 items-center"
            style={{ fontFamily: "Kanit" }}
          >
            <a
              href="/"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium "
            >
              Home
            </a>
            <Link
              to="/about-us"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium "
            >
              About Us
            </Link>
            <Link
              href="/skills"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium "
            >
              Academics
            </Link>
            <img
              className="rounded-full h-20 w-20 mx-10 object-contain"
              src={logo}
              alt=""
            />
            <Link
              href="/projects"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium "
            >
              Admission
            </Link>
            <Link
              href="/gallery"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium "
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-red-500  px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </Link>
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
            <Link
              href="/"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="#projects"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Academics
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Admission
            </Link>
            <Link
              href="#gallery"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:text-red-500  px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
