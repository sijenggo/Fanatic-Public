import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


