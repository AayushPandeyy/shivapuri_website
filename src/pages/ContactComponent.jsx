import React from "react";
import TopNavBar from "../components/common/TopNavBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ContactHeroSection from "../components/contactPage/ContactHeroSection";
import ContactInfoSection from "../components/contactPage/ContactInfoSection";
import ContactMapSection from "../components/contactPage/ContactMapSection";
import ContactFormSection from "../components/contactPage/ContactFormSection";

const ContactComponent = () => {
  return (
    <div>
      <div className="bg-cover bg-top bg-contact">
        <TopNavBar />
        <Navbar />
        <ContactHeroSection />
        <div className="mainContainer">
          <div className="flex flex-col lg:flex-row">
            <ContactInfoSection />
            <ContactMapSection />
          </div>
          <ContactFormSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactComponent;