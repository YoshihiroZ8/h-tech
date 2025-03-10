
import React from "react";
import FadeIn from "./ui-custom/FadeIn";
import Button from "./ui-custom/Button";
import { CheckCircle } from "lucide-react";

const AboutSection: React.FC = () => {
  const benefits = [
    "Intuitive design philosophy focused on simplicity",
    "Built with cutting-edge technology for optimal performance",
    "Designed for seamless integration with your workflow",
    "Constantly improved based on user feedback and needs",
    "Exceptional customer support available 24/7"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-full h-1/2 bg-gradient-to-b from-htech-50 to-transparent z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="inline-flex items-center rounded-full border border-htech-200 bg-white px-4 py-1.5 text-sm font-medium text-htech-700 mb-4 shadow-sm">
                About H Tech
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-bold text-htech-900 mb-6">
                We're redefining what's possible with digital tools
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-htech-600 mb-6">
                H Tech was founded with a clear mission: to create intuitive, powerful software that helps businesses thrive in the digital age. Our team of experts combines deep technical knowledge with a genuine understanding of user needs.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-htech-600 mb-8">
                We believe in designing tools that work for you, not the other way around. Through thoughtful design and continuous innovation, we're building solutions that make complex tasks simple.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-htech-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-htech-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <Button>Learn More About Us</Button>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-htech-100 to-htech-200 rounded-2xl blur opacity-30"></div>
                <div className="relative overflow-hidden rounded-xl border border-htech-200 bg-white shadow-xl">
                  <div className="h-2 bg-gradient-to-r from-htech-400 to-htech-600"></div>
                  <div className="p-1">
                    <img
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                      alt="H Tech Dashboard Interface"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-htech-100 rounded-full filter blur-xl opacity-70"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
