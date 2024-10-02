import React from "react";
import Navbar from "../components/homePage/Navbar";
import TopNavBar from "../components/homePage/TopNavBar";
import HeroSection from "../components/homePage/HeroSection";
import WelcomeSection from "../components/homePage/WelcomeSection";
import CoursesOfferedSection from "../components/homePage/CoursesOfferedSection";
import StatsSection from "../components/homePage/StatsSection";
import WhyChoosUsSection from "../components/homePage/WhyChoosUsSection";
import TestimonialsSection from "../components/homePage/TestimonialsSection";
import SendUsAMessageSection from "../components/homePage/SendUsAMessageSection";

const HomeComponent = () => {
  return (
    <div>
      <TopNavBar />
      <Navbar />
      <HeroSection></HeroSection>
      <WelcomeSection></WelcomeSection>
      <StatsSection></StatsSection>
      <CoursesOfferedSection></CoursesOfferedSection>
      <WhyChoosUsSection></WhyChoosUsSection>
      <TestimonialsSection></TestimonialsSection>
      <SendUsAMessageSection></SendUsAMessageSection>
    </div>
  );
};

export default HomeComponent;
