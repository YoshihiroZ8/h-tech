
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-900 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900 opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-white">
              <span className="text-blue-400">H</span> Tech
            </h2>
            <p className="text-blue-200 mb-6">
              Custom software solutions for individuals and small/medium businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Automation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} H Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
