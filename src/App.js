import React from 'react';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CourseInfo from './components/CourseInfo';
import FolioSection from './components/FolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CourseEnrollment from "./components/CourseEnrollment";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <HomeSection />
        <AboutSection />
        <ServicesSection />
          <CourseInfo />
          <CourseEnrollment />
        <FolioSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </div>
  );
}

export default App;
