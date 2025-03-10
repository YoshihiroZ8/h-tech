
import React from "react";
import FadeIn from "./ui-custom/FadeIn";
import Button from "./ui-custom/Button";
import { CheckCircle } from "lucide-react";

const AboutSection: React.FC = () => {
  const benefits = [
    "Tailored solutions designed specifically for your business needs",
    "Transparent development process with regular updates",
    "Scalable architecture that grows with your business",
    "User-friendly interfaces designed for your team",
    "Ongoing support and maintenance after launch"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-full h-1/2 bg-gradient-to-b from-blue-950 to-transparent z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <h2 className="inline-flex items-center rounded-full border border-blue-800 bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-300 mb-4 shadow-sm">
                About H Tech
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We build custom software for your specific needs
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-blue-200 mb-6">
                H Tech specializes in creating custom software solutions that help individuals and small/medium businesses overcome their unique challenges. We believe every business deserves technology that works for them, not against them.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-blue-200 mb-8">
                Our team combines technical expertise with a deep understanding of business processes to deliver solutions that increase efficiency, reduce costs, and help you grow.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-blue-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <Button>Learn More About Our Process</Button>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl blur opacity-10"></div>
                <div className="relative overflow-hidden rounded-xl border border-blue-800 bg-blue-900/30 shadow-xl">
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                  <div className="p-1">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070"
                      alt="H Tech Software Development Process"
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-blue-900 rounded-full filter blur-xl opacity-20"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
