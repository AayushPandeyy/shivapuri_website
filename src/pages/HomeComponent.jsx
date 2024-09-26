import React from "react";
import Navbar from "../components/homePage/Navbar";
import TopNavBar from "../components/homePage/TopNavBar";
import HeroSection from "../components/homePage/HeroSection";
import WelcomeSection from "../components/homePage/WelcomeSection";
import CoursesOfferedSection from "../components/homePage/CoursesOfferedSection";
import StatsSection from "../components/homePage/StatsSection";

const HomeComponent = () => {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <HeroSection></HeroSection>
      <WelcomeSection></WelcomeSection>
      <StatsSection></StatsSection>
      <CoursesOfferedSection></CoursesOfferedSection>
    </div>
  );
};

export default HomeComponent;