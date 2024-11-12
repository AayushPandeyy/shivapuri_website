import React from "react";
import TopNavBar from "../components/common/TopNavBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AcademicsHeroSection from "../components/academicsPage/AcademicsHeroSection";
import ProgramOverviewSection from "../components/academicsPage/ProgramOverviewSection";
import ProgramHighlights from "../components/academicsPage/ProgramHighlights";
import CourseStructure from "../components/academicsPage/CourseStructure";

const AcademicsComponent = () => {
  return (
    <div>
      <div className="bg-cover bg-top bg-academics">
        <TopNavBar />
        <Navbar />
        <AcademicsHeroSection />
        <ProgramOverviewSection />
        <ProgramHighlights />
        <CourseStructure />
      </div>
      <Footer />
    </div>
  );
};

export default AcademicsComponent;
