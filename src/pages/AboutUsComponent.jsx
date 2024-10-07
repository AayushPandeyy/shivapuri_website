import React from "react";
import TopNavBar from "../components/common/TopNavBar";
import Navbar from "../components/common/Navbar";
import AboutUsHeroSection from "../components/aboutUsPage/AboutUsHeroSection";
import bg from "../assets/image-8.jpeg";
import OurMissionSection from "../components/aboutUsPage/OurMIssionSection";
import OurFeaturesSection from "../components/aboutUsPage/OurFeaturesSection";
import Footer from "../components/common/Footer";
import MessageFromThePrincipalSection from "../components/aboutUsPage/MessageFromThePrincipalSection";

const AboutUsComponent = () => {
  return (
    <div>
      <div
        className="bg-cover bg-top"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <TopNavBar />
        <Navbar />
        <AboutUsHeroSection></AboutUsHeroSection>
      </div>
      <MessageFromThePrincipalSection></MessageFromThePrincipalSection>
      <OurMissionSection></OurMissionSection>
      <OurFeaturesSection></OurFeaturesSection>
      <Footer></Footer>
    </div>
  );
};

export default AboutUsComponent;
