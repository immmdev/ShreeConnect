import React from 'react';
import { Leaf, Twitter, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';
// Framer motion is intentionally omitted

// Primary: #547C3E (Medium Green)
// Accent: #B3CF8C (Light Green)
// Background: #FFFDA1 (Light Yellow - used for contrast)
// Text: #013220 (Dark Green - used for main body background)

const Footer = () => {
  // Common Class Definitions
  const iconLinkClass = "text-[#B3CF8C] hover:text-[#FFFDA1] transition-all duration-300 transform hover:scale-110";
  const linkClass = "text-sm text-[#B3CF8C] hover:text-[#547C3E] transition-colors duration-200 hover:translate-x-1 inline-block";

  return (
    <footer className="bg-[#013220] text-[#FFFDA1] shadow-2xl border-t-8 border-[#547C3E]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              {/* Using the Primary Green for the logo leaf */}
              {/* <Leaf className="w-8 h-8 text-[#547C3E]" /> */}
              <span className="ml-2 text-2xl font-extrabold tracking-tight">
                श्रीConnect
              </span>
            </div>
            <p className="text-sm text-[#B3CF8C] leading-relaxed">
              The Unified Digital Marketplace for Millets & Pulses, cultivating sustainable supply chains powered by AI.
            </p>
            <div className="flex space-x-5 mt-6">
              <a href="#facebook" aria-label="Facebook" className={iconLinkClass}><Facebook className="w-6 h-6" /></a>
              <a href="#twitter" aria-label="Twitter" className={iconLinkClass}><Twitter className="w-6 h-6" /></a>
              <a href="#linkedin" aria-label="LinkedIn" className={iconLinkClass}><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-[#547C3E]">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Marketplace', 'Community', 'AI'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Policy */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-[#547C3E]">Resources</h3>
            <ul className="space-y-3">
              {['Schemes Policies ', 'Learning Awareness', 'Traceability', 'Analytics Dashboard'].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-[#547C3E]">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 mt-1 text-[#B3CF8C] flex-shrink-0" />
                <span className="text-sm text-[#B3CF8C]">support@shreeconnect.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-[#B3CF8C] flex-shrink-0" />
                <span className="text-sm text-[#B3CF8C]">Agri-Tech Innovation Center, Pune, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="mt-12 border-t border-[#547C3E]/50 pt-8">
          <p className="text-center text-xs sm:text-sm text-[#B3CF8C]">
            &copy; {new Date().getFullYear()} ShreeConnect. All rights reserved. | <a href="#privacy" className="hover:text-[#547C3E] transition-colors">Privacy Policy</a> | <a href="#terms" className="hover:text-[#547C3E] transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
