import { Outlet, Link, useLocation } from "react-router";
import { Monitor, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import aztechLogo from "../../assets/aztech_logo.svg";

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-['Inter',_sans-serif] flex flex-col">
      {!isHomePage && (
        <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              <Link to="/" className="flex items-center gap-2 h-full">
                <img src={aztechLogo} alt="AZTECH logo" className="h-full w-auto" />
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                      isActive(item.href) ? "text-blue-500" : "text-neutral-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/get-quote"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-sm transition-colors"
                >
                  Get a Quote
                </Link>
              </nav>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-neutral-400 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-neutral-900 border-b border-neutral-800">
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? "bg-neutral-800 text-blue-500"
                        : "text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/get-quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium text-base transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </header>
      )}

      <main className={`flex-grow ${isHomePage ? "" : "pt-20"}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <Link
                to="/"
                className="inline-flex items-center rounded-xl bg-white px-4 py-3 shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
              >
                <img src={aztechLogo} alt="AZTECH logo" className="h-10 w-auto" />
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Professional supplier of high-quality LED display solutions for events, advertising, and commercial spaces across the UAE.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-neutral-400 hover:text-blue-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-blue-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-blue-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-neutral-400 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-['Poppins',_sans-serif] font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-neutral-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-['Poppins',_sans-serif] font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-3">
                <li><Link to="/products" className="text-neutral-400 hover:text-blue-400 text-sm transition-colors">Indoor LED Screens</Link></li>
                <li><Link to="/products" className="text-neutral-400 hover:text-blue-400 text-sm transition-colors">Outdoor LED Screens</Link></li>
                <li><Link to="/products" className="text-neutral-400 hover:text-blue-400 text-sm transition-colors">Rental LED Displays</Link></li>
                <li><Link to="/products" className="text-neutral-400 hover:text-blue-400 text-sm transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-['Poppins',_sans-serif] font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-neutral-400">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Business Bay, Dubai, United Arab Emirates</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-400">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-neutral-400">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>info@ledscreenuae.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} AZTECH. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-neutral-500 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="#" className="text-neutral-500 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
