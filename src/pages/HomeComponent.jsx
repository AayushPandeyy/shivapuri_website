import React from "react";
import Navbar from "../components/common/Navbar";
import TopNavBar from "../components/common/TopNavBar";
import HeroSection from "../components/homePage/HeroSection";
import WelcomeSection from "../components/homePage/WelcomeSection";
import CoursesOfferedSection from "../components/homePage/CoursesOfferedSection";
import StatsSection from "../components/homePage/StatsSection";
import WhyChoosUsSection from "../components/homePage/WhyChoosUsSection";
import TestimonialsSection from "../components/homePage/TestimonialsSection";
import SendUsAMessageSection from "../components/homePage/SendUsAMessageSection";
import Footer from "../components/common/Footer";
import bg from "../assets/image-7.jpg";

const HomeComponent = () => {
  return (
    <div>
      <div
        className="bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <TopNavBar />
        <Navbar />
        <HeroSection></HeroSection>
      </div>
      <WelcomeSection></WelcomeSection>
      <CoursesOfferedSection></CoursesOfferedSection>
      <StatsSection></StatsSection>
      <WhyChoosUsSection></WhyChoosUsSection>
      <TestimonialsSection></TestimonialsSection>
      <SendUsAMessageSection></SendUsAMessageSection>
      <Footer></Footer>
    </div>
  );
};

export default HomeComponent;
