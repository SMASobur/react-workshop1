export const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2 mb-4">
              {/* Logo */}
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xl">K</span>
              </div>
              <span class="text-xl font-bold">KnitNox</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Building the future of web development with modern tools and
              technologies.
            </p>
          </div>

          <div>
            <h4 class="font-bold mb-3 text-white">Product</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-3 text-white">Company</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-3 text-white">Follow Us</h4>
            <div class="flex gap-3 mb-4">
              <a
                href="#"
                class="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span class="text-sm">🐦</span>
              </a>
              <a
                href="#"
                class="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span class="text-sm">💻</span>
              </a>
              <a
                href="https://github.com/SMASobur"
                target="_blank"
                class="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span class="text-sm">🔗</span>
              </a>
              <a
                href="#"
                class="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <span class="text-sm">📷</span>
              </a>
            </div>
            <p class="text-gray-400 text-sm">Subscribe to our newsletter</p>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2026 KnitNox. All rights reserved. Built with ❤️ by Abdus
            Sobur Sikdar
          </p>
        </div>
      </div>
    </footer>
  );
};
