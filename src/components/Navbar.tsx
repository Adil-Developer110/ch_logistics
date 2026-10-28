import React, { useState } from 'react';
import { Phone, Menu, X, Truck, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05070d]/85 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single Element Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8a00] to-[#ffc247] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#ff8a00]/25 group-hover:scale-105 transition-transform">
              <Truck className="w-5 h-5 text-black" />
            </div>
            <span className="font-heading">CH <span className="text-[#ff8a00]">Logistics</span></span>
          </a>

          {/* Zone 2: Clean 4-5 Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Services</a>
            <a href="#calculator" className="hover:text-[#ffc247] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span>Rate Calculator</span>
            </a>
            <a href="#how" className="hover:text-white transition-colors whitespace-nowrap shrink-0">How It Works</a>
            <a href="#location" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Location</a>
            <a href="#ai-assistant" className="hover:text-[#ffc247] transition-colors whitespace-nowrap shrink-0">
              <span>AI Dispatcher</span>
            </a>
            <a href="#pricing" className="hover:text-white transition-colors whitespace-nowrap shrink-0">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors whitespace-nowrap shrink-0">FAQ</a>
          </div>

          {/* Zone 3: 1 Primary Action + Quick Call */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a 
              href="tel:9122174632" 
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff8a00]" />
              <span>(912) 217-4632</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#ff8a00] to-[#ffc247] hover:shadow-lg hover:shadow-[#ff8a00]/30 hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a 
              href="tel:+14045550199" 
              className="p-2 rounded-full bg-[#ff8a00]/20 text-[#ff8a00] border border-[#ff8a00]/30"
              aria-label="Call CH Logistics"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-200">
          <a 
            href="#services" 
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-[#ff8a00]"
          >
            Services
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-[#ffc247] hover:text-[#ff8a00]"
          >
            Rate Calculator
          </a>
          <a 
            href="#how" 
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-[#ff8a00]"
          >
            How It Works
          </a>
          <a 
            href="#ai-assistant" 
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-[#ffc247] hover:text-[#ff8a00]"
          >
            AI Dispatch Assistant
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-[#ff8a00]"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-[#ff8a00]"
          >
            FAQ
          </a>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a 
              href="tel:9122174632" 
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-[#ff8a00]" />
              Call (912) 217-4632
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#ff8a00] to-[#ffc247] text-sm font-bold text-black shadow-lg shadow-[#ff8a00]/30"
            >
              Request Free Dispatch Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
