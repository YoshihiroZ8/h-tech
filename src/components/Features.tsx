
import React from "react";
import FadeIn from "./ui-custom/FadeIn";
import { 
  Zap, 
  Shield, 
  BarChart2, 
  Clock, 
  Globe, 
  Users, 
  Terminal, 
  Cloud,
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
      <div className="bg-white p-6 rounded-xl border border-htech-100 shadow-sm h-full flex flex-col">
        <div className="p-3 bg-htech-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-htech-900 mb-2">{title}</h3>
        <p className="text-htech-600 text-sm flex-grow">{description}</p>
      </div>
    </FadeIn>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BarChart2 className="h-6 w-6 text-htech-700" />,
      title: "Advanced Analytics",
      description: "Gain deep insights with our comprehensive analytics suite. Track performance and monitor growth in real-time."
    },
    {
      icon: <Shield className="h-6 w-6 text-htech-700" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols ensure your data is always protected. SOC 2 Type II compliant."
    },
    {
      icon: <Zap className="h-6 w-6 text-htech-700" />,
      title: "Lightning Fast",
      description: "Optimized for speed with 99.9% uptime. Experience lightning-fast performance across all devices."
    },
    {
      icon: <Clock className="h-6 w-6 text-htech-700" />,
      title: "Time Saving",
      description: "Automation tools that save you hours every week. Streamline workflows and eliminate repetitive tasks."
    },
    {
      icon: <Globe className="h-6 w-6 text-htech-700" />,
      title: "Global Scaling",
      description: "Scale seamlessly across regions. Support for multiple languages and currencies built-in."
    },
    {
      icon: <Users className="h-6 w-6 text-htech-700" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools keep your team in sync. Edit, comment, and share instantaneously."
    },
    {
      icon: <Terminal className="h-6 w-6 text-htech-700" />,
      title: "Developer API",
      description: "Robust API for custom integrations. Extend functionality to meet your specific business needs."
    },
    {
      icon: <Cloud className="h-6 w-6 text-htech-700" />,
      title: "Cloud Storage",
      description: "Unlimited secure cloud storage with automatic backups. Never worry about losing your data again."
    },
    {
      icon: <Server className="h-6 w-6 text-htech-700" />,
      title: "Dedicated Infrastructure",
      description: "Enterprise-grade infrastructure ensures reliability and performance at any scale."
    }
  ];

  return (
    <section id="features" className="py-24 bg-htech-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-htech-100 to-transparent opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-htech-100 to-transparent opacity-70 blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="inline-flex items-center rounded-full border border-htech-200 bg-white px-4 py-1.5 text-sm font-medium text-htech-700 mb-4 shadow-sm">
              Why Choose H Tech
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="text-3xl md:text-4xl font-bold text-htech-900 mb-6">
              Technology that makes a difference
            </h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-htech-600">
              Our suite of powerful features is designed to help you work smarter, not harder. Experience the perfect balance of simplicity and power.
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
