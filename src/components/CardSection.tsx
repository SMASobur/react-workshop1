import { BarChart, Code, Globe, Shield, Users, Zap } from "lucide-react";
import { Card } from "./Card";

// Datas
const cardData = [
  {
    title: "Lightning Fast",
    description: "Built with modern tools for optimal performance and speed.",
    icon: Zap,
  },
  {
    title: "Secure",
    description: "Enterprise-grade security features to protect your data.",
    icon: Shield,
  },
  {
    title: "Team Friendly",
    description: "Collaborate seamlessly with your team members in real-time.",
    icon: Users,
  },
  {
    title: "Developer Ready",
    description:
      "Clean code and excellent developer experience out of the box.",
    icon: Code,
  },
  {
    title: "Analytics",
    description: "Track and measure your success with powerful analytics.",
    icon: BarChart,
  },
  {
    title: "Global Scale",
    description:
      "Reach users anywhere in the world with global infrastructure.",
    icon: Globe,
  },
];

export const CardSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build exceptional applications
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
