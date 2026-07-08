interface HeroProps {
  title?: string;
  description?: string;
}

export const Hero = ({
  title = "Welcome to KnitNox",
  description = "Build amazing applications with modern tools and best practices",
}: HeroProps) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>

        {/* Description */}
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
            Get Started
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
