
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutSection from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Add scroll reveal effect for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll(".fade-in-section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
