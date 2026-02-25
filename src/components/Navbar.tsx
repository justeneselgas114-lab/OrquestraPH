import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';
import { WhatsAppButton } from './WhatsAppButton';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinkClass = (isScrolled: boolean) => cn(
    "transition-colors text-sm font-medium cursor-pointer",
    isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-200 hover:text-white"
  );

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'bg-white/70 backdrop-blur-lg border-b border-slate-200/50 shadow-sm py-3' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="https://i.postimg.cc/hGvyPKfc/Purple-Modern-Artificial-Intelligence-Logo.png" alt="OrquestraPH Logo" className="w-14 h-14 rounded-lg object-cover" />
          <span className={cn("text-xl font-bold tracking-tighter transition-colors duration-300", isScrolled ? "text-slate-900" : "text-white")}>Orquestra<span className="text-indigo-500">PH</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={navLinkClass(isScrolled)}>Home</a>
          <a onClick={() => scrollToSection('reality')} className={navLinkClass(isScrolled)}>The Reality</a>
          <a onClick={() => scrollToSection('system')} className={navLinkClass(isScrolled)}>The Solution</a>
          <a onClick={() => scrollToSection('process')} className={navLinkClass(isScrolled)}>Process</a>
          <a onClick={() => scrollToSection('testimonials')} className={navLinkClass(isScrolled)}>Testimonials</a>
          <a onClick={() => scrollToSection('portfolio')} className={navLinkClass(isScrolled)}>Portfolio</a>
          <a onClick={() => scrollToSection('audit-form')} className={navLinkClass(isScrolled)}>Claim Free Audit</a>
          <div className="flex items-center gap-4">
            <Button size="sm" onClick={() => scrollToSection('discovery')} className="bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] border-none">Book Discovery Call</Button>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button 
            className={cn(
              "p-2 rounded-lg transition-all duration-200",
              isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-5 flex flex-col justify-center">
              <span className={cn(
                "absolute h-0.5 w-6 bg-current transition-all duration-300",
                mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              )}></span>
              <span className={cn(
                "h-0.5 w-6 bg-current transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )}></span>
              <span className={cn(
                "absolute h-0.5 w-6 bg-current transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              )}></span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 300,
                duration: 0.4
              }}
              className="lg:hidden absolute top-full right-6 mt-4 w-72 bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl z-50 overflow-hidden"
            >
              {/* Enhanced Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-transparent backdrop-blur-xl"></div>
              
              {/* Additional glass layer for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 to-transparent backdrop-blur-sm"></div>
              
              {/* Menu Content */}
              <div className="relative z-10 p-6">
                {/* Navigation Links */}
                <nav className="space-y-1">
                  <a 
                    onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} 
                    className="flex items-center px-4 py-3 text-slate-900 hover:text-white hover:bg-blue-600/70 backdrop-blur-md rounded-xl transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="relative z-10">Home</span>
                  </a>
                  <a 
                    onClick={() => { scrollToSection('reality'); setMobileMenuOpen(false); }} 
                    className="flex items-center px-4 py-3 text-slate-900 hover:text-white hover:bg-blue-600/70 backdrop-blur-md rounded-xl transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="relative z-10">The Reality</span>
                  </a>
                  <a 
                    onClick={() => { scrollToSection('system'); setMobileMenuOpen(false); }} 
                    className="flex items-center px-4 py-3 text-slate-900 hover:text-white hover:bg-blue-600/70 backdrop-blur-md rounded-xl transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="relative z-10">The Solution</span>
                  </a>
                  <a 
                    onClick={() => { scrollToSection('process'); setMobileMenuOpen(false); }} 
                    className="flex items-center px-4 py-3 text-slate-900 hover:text-white hover:bg-blue-600/70 backdrop-blur-md rounded-xl transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="relative z-10">Process</span>
                  </a>
                  <a 
                    onClick={() => { scrollToSection('testimonials'); setMobileMenuOpen(false); }} 
                    className="flex items-center px-4 py-3 text-slate-900 hover:text-white hover:bg-blue-600/70 backdrop-blur-md rounded-xl transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="relative z-10">Testimonials</span>
                  </a>
                  <a 
                    onClick={() => { scrollToSection('portfolio'); setMobileMenuOpen(false); }} 
                    className="flex items-center px-4 py-3 text-slate-900 hover:text-white hover:bg-blue-600/70 backdrop-blur-md rounded-xl transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="relative z-10">Portfolio</span>
                  </a>
                  <a 
                    onClick={() => { scrollToSection('audit-form'); setMobileMenuOpen(false); }} 
                    className="flex items-center px-4 py-3 text-slate-900 hover:text-white hover:bg-blue-600/70 backdrop-blur-md rounded-xl transition-all duration-300 group font-medium shadow-sm hover:shadow-md"
                  >
                    <span className="relative z-10">Claim Free Audit</span>
                  </a>
                </nav>
                
                {/* CTA Section */}
                <div className="mt-6 pt-6 border-t border-white/30 space-y-3">
                  <Button 
                    size="md" 
                    onClick={() => { scrollToSection('discovery'); setMobileMenuOpen(false); }} 
                    className="w-full bg-blue-600/80 backdrop-blur-md hover:bg-blue-700/80 text-white shadow-lg hover:shadow-xl border border-white/20"
                  >
                    Book Discovery Call
                  </Button>
                  <WhatsAppButton 
                    phoneNumber="09638296973" 
                    className="w-full bg-green-600/80 backdrop-blur-md hover:bg-green-700/80 shadow-lg hover:shadow-xl border border-white/20" 
                    onClick={() => setMobileMenuOpen(false)} 
                  >
                    WhatsApp Us
                  </WhatsAppButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
