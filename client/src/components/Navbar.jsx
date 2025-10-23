import React, { useState } from 'react';
import { Menu, X, Leaf, ShoppingCart, LayoutDashboard, MessageCircle, BookOpen, Home, LogIn, Users } from 'lucide-react';
// Framer motion has been removed

// Using the defined color palette:
// Primary: #547C3E (Medium Green)
// Accent: #B3CF8C (Light Green)
// Background: #FFFDA1 (Light Yellow)
// Text: #013220 (Dark Green)

const navItems = [
  { name: 'Home', href: '/', icon: Home, isActive: true }, // Mocked active state for example
  { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
  { name: 'Communities', href: '/community', icon: MessageCircle },
  { name: 'Learning Hub', href: '/learning-awareness', icon: BookOpen },
  { name: 'Policy & Schemes', href: '/schemes-policies', icon: Users },
  { name: 'Dashboard', href: '/analytics-dashboard', icon: LayoutDashboard },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Common Class Definitions
  // Note: All animations are now handled by Tailwind's transition-all and hover classes.
  const primaryButtonClass = "px-4 py-2 font-semibold text-white bg-[#547C3E] rounded-xl transition-all duration-300 shadow-md hover:bg-[#013220] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#B3CF8C]/50";
  const baseLinkClass = "text-[#013220] font-medium transition-all duration-300 pb-1";
  const activeLinkClass = (isActive) => 
    isActive 
      ? "text-[#547C3E] border-b-2 border-[#547C3E] font-bold" 
      : "text-[#013220] border-b-2 border-transparent hover:text-[#547C3E] hover:border-[#B3CF8C]";

  return (
    // Initial entrance animation removed, sticking to pure Tailwind classes
    <header
      className="bg-[#FFFDA1] shadow-lg sticky top-0 z-50 border-b border-[#B3CF8C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            {/* <Leaf className="w-9 h-9 text-[#547C3E] shadow-sm" /> */}
            <span style={{fontFamily:"revert-layer"}} className="ml-3 text-3xl font-extrabold tracking-tight text-[#013220] cursor-pointer">
             श्रीConnect
            </span>
          </div>

          {/* Desktop Navigation Links (with active state and hover) */}
          <nav className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <a // Changed from motion.a
                key={item.name}
                href={item.href} // Placeholder for React Router Link
                className={`${baseLinkClass} ${activeLinkClass(item.isActive)} hover:scale-[1.03]`} // Added simple scale hover effect
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Login/Signup Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a // Changed from motion.a
              href="/login" // Placeholder for React Router Link
              className={primaryButtonClass}
              // Hover and tap effects now pure CSS via classes
            >
              <LogIn className="inline-block w-4 h-4 mr-1 mb-0.5" />
              Login / Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#013220] hover:bg-[#B3CF8C]/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#547C3E] transition-all duration-300"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-7 w-7 text-[#547C3E]" /> : <Menu className="h-7 w-7 text-[#013220]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel: Uses conditional max-height and transition-all for smooth, pure CSS collapse/expand */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen border-t border-[#B3CF8C] pb-3 shadow-inner' : 'max-h-0'
        }`}
      >
        <nav className="px-2 pt-2 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href} // Placeholder for React Router Link
              className={`flex items-center px-4 py-3 text-base font-medium ${item.isActive ? 'bg-[#B3CF8C]/50 text-[#013220] font-bold' : 'text-[#013220]'} hover:bg-[#B3CF8C] rounded-xl transition-colors duration-200`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-4 text-[#547C3E]" />
              {item.name}
            </a>
          ))}
          
          <a 
            href="/login" // Placeholder for React Router Link
            className="flex items-center justify-center w-full pt-4"
          >
            <button className={primaryButtonClass + " w-full flex items-center justify-center"}>
              <LogIn className="inline-block w-4 h-4 mr-2" />
              Login / Register
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
