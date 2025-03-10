
import React from "react";
import Button from "./ui-custom/Button";
import AnimatedText from "./ui-custom/AnimatedText";
import FadeIn from "./ui-custom/FadeIn";
import { ArrowRight, BarChart2, Zap, Shield } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzODQ1NUEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] z-0 opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-htech-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute -bottom-60 -left-40 w-96 h-96 bg-htech-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
      
      <div className="container px-4 md:px-6 z-10 py-10">
        <div className="flex flex-col items-center text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-htech-200 bg-white px-3 py-1 text-sm text-htech-700 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-htech-500 mr-2"></span>
              <span>Introducing H Tech 1.0</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-htech-900 mb-6 leading-tight max-w-4xl">
              <AnimatedText text="The Smartest Way to Manage Your Digital Assets" delay={0.3} />
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-htech-600 mb-8 max-w-2xl">
              An intuitive platform designed to simplify complex workflows and boost productivity for modern teams.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" withGlow className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              <div className="flex items-center space-x-2 px-4 py-3 bg-white shadow-sm rounded-lg border border-htech-100">
                <BarChart2 className="h-5 w-5 text-htech-500" />
                <span className="text-sm font-medium text-htech-700">Advanced Analytics</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-3 bg-white shadow-sm rounded-lg border border-htech-100">
                <Zap className="h-5 w-5 text-htech-500" />
                <span className="text-sm font-medium text-htech-700">Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-3 bg-white shadow-sm rounded-lg border border-htech-100">
                <Shield className="h-5 w-5 text-htech-500" />
                <span className="text-sm font-medium text-htech-700">Enterprise Security</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.8} className="mt-16">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-htech-200 shadow-2xl shadow-htech-100/50">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="H Tech Dashboard" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out" 
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
