import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "../pages/HomeComponent";
import AboutUsComponent from "../pages/AboutUsComponent";
import AcademicsComponent from "../pages/AcademicsComponent";
import AdmissionComponent from "../pages/AdmissionComponent";
import ContactComponent from "../pages/ContactComponent";
import ScrollToTop from "./ScrollToTop";

const RouterComponent = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/about-us" element={<AboutUsComponent />}></Route>
        <Route path="/academics" element={<AcademicsComponent />}></Route>
        <Route path="/admission" element={<AdmissionComponent />}></Route>
        <Route path="/contact" element={<ContactComponent />}></Route>
      </Routes>
    </div>
  );
};

export default RouterComponent;
