import React from "react";
import TopNavBar from "../components/common/TopNavBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AdmissionHeroSection from "../components/admissionPage/AdmissionHeroSection";
import AdmissionCTA from "../components/admissionPage/AdmissionCTA";
import AdmissionTimeline from "../components/admissionPage/AdmissionTimeline";
import AdmissionRequirements from "../components/admissionPage/AdmissionRequirements";
import AdmissionOverview from "../components/admissionPage/AdmissionOverview";

const AdmissionComponent = () => {
  return (
    <div>
      <div className="bg-cover bg-top bg-admission">
        <TopNavBar />
        <Navbar />
        <AdmissionHeroSection />
        <AdmissionOverview />
        <AdmissionRequirements />
        <AdmissionTimeline />
        <AdmissionCTA />
      </div>
      <Footer />
    </div>
  );
};

export default AdmissionComponent;
