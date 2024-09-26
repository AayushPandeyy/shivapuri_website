import React from "react";
import Navbar from "../components/homePage/Navbar";
import TopNavBar from "../components/homePage/TopNavBar";
import HeroSection from "../components/homePage/HeroSection";
import WelcomeSection from "../components/homePage/WelcomeSection";
import CoursesOfferedSection from "../components/homePage/CoursesOfferedSection";

const HomeComponent = () => {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <HeroSection></HeroSection>
      <WelcomeSection></WelcomeSection>
      <div className="divider border-[1px] border-black w-full mb-10"></div>
      <CoursesOfferedSection></CoursesOfferedSection>
    </div>
  );
};

export default HomeComponent;
