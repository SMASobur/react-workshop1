import { ComponentType, SVGProps } from "react";

interface CardProps {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const Card = ({ title, description, icon: Icon }: CardProps) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      {/* Icon */}
      <div className="mb-4">
        <Icon className="w-12 h-12 text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
