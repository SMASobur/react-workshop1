import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Knitnox</div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            Log In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button - FIXED */}
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
};
