
import React from "react";
import FadeIn from "./ui-custom/FadeIn";
import { 
  Code, 
  Shield, 
  Smartphone, 
  Clock, 
  Globe, 
  Users, 
  Laptop, 
  Database,
  Server 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <FadeIn delay={delay} className="card-hover">
      <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-800 shadow-sm h-full flex flex-col">
        <div className="p-3 bg-blue-800/50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-200 text-sm flex-grow">{description}</p>
      </div>
    </FadeIn>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-blue-300" />,
      title: "Custom Web Applications",
      description: "Tailored web applications designed to match your specific business requirements and workflows."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-300" />,
      title: "Secure Development",
      description: "Built with security in mind, ensuring your data and your customers' information stays protected."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-300" />,
      title: "Mobile Solutions",
      description: "Responsive mobile applications that work seamlessly across all devices and platforms."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-300" />,
      title: "Efficient Processes",
      description: "Automation tools that streamline your workflows and save valuable time and resources."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-300" />,
      title: "E-commerce Solutions",
      description: "Powerful online stores that help you sell your products and services globally."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-300" />,
      title: "Collaborative Tools",
      description: "Team collaboration platforms that enhance communication and productivity in your business."
    },
    {
      icon: <Laptop className="h-6 w-6 text-blue-300" />,
      title: "Intuitive Interfaces",
      description: "User-friendly designs that make technology accessible to everyone in your organization."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-300" />,
      title: "Data Management",
      description: "Robust database solutions that organize and protect your valuable business data."
    },
    {
      icon: <Server className="h-6 w-6 text-blue-300" />,
      title: "Scalable Infrastructure",
      description: "Cloud-based systems that grow with your business without requiring constant redesigns."
    }
  ];

  return (
    <section id="features" className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-blue-800 to-transparent opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-800 to-transparent opacity-10 blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="inline-flex items-center rounded-full border border-blue-800 bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-300 mb-4 shadow-sm">
              Our Services
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Custom software solutions for your business needs
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-blue-200">
              We offer a comprehensive range of custom software development services designed specifically for individuals and small/medium businesses.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
