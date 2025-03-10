
import React from "react";
import FadeIn from "./ui-custom/FadeIn";
import Button from "./ui-custom/Button";
import { Mail, MessageSquare, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-htech-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-htech-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-htech-100 rounded-full filter blur-3xl opacity-30 z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="inline-flex items-center rounded-full border border-htech-200 bg-white px-4 py-1.5 text-sm font-medium text-htech-700 mb-4 shadow-sm">
                  Get in Touch
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h3 className="text-3xl md:text-4xl font-bold text-htech-900 mb-6">
                  Ready to transform your workflow?
                </h3>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg text-htech-600 mb-8">
                  Let's discuss how H Tech can help your business grow. Fill out the form and our team will get back to you within 24 hours.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="bg-htech-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-htech-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-htech-900">Email Us</h4>
                      <p className="text-htech-600">contact@htech.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-htech-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-htech-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-htech-900">Call Us</h4>
                      <p className="text-htech-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-htech-100 p-3 rounded-full mr-4">
                      <MessageSquare className="h-6 w-6 text-htech-700" />
                    </div>
                    <div>
                      <h4 className="font-medium text-htech-900">Live Chat</h4>
                      <p className="text-htech-600">Available Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn direction="left" delay={0.4}>
              <div className="bg-white rounded-xl border border-htech-100 shadow-lg p-6 md:p-8">
                <h4 className="text-xl font-semibold text-htech-900 mb-6">
                  Send us a message
                </h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-htech-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="block w-full rounded-md border-htech-300 shadow-sm focus:border-htech-500 focus:ring-htech-500 sm:text-sm py-2.5 px-3"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-htech-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="block w-full rounded-md border-htech-300 shadow-sm focus:border-htech-500 focus:ring-htech-500 sm:text-sm py-2.5 px-3"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-htech-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-md border-htech-300 shadow-sm focus:border-htech-500 focus:ring-htech-500 sm:text-sm py-2.5 px-3"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-htech-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="block w-full rounded-md border-htech-300 shadow-sm focus:border-htech-500 focus:ring-htech-500 sm:text-sm py-2.5 px-3"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-htech-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-htech-300 shadow-sm focus:border-htech-500 focus:ring-htech-500 sm:text-sm py-2.5 px-3"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="privacy-policy"
                      name="privacy-policy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-htech-600 focus:ring-htech-500"
                    />
                    <label htmlFor="privacy-policy" className="ml-2 block text-sm text-htech-600">
                      I agree to the <a href="#" className="text-htech-800 hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <Button fullWidth size="lg" withGlow>
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
