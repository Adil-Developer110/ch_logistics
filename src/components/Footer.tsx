import React from 'react';
import { Truck, Phone, Mail, MapPin, Facebook } from 'lucide-react';

const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.88 2.896 2.896 0 0 1-2.892-2.88 2.896 2.896 0 0 1 2.892-2.88c.28 0 .55.04.805.114V9.387a6.28 6.28 0 0 0-.805-.052 6.337 6.337 0 0 0-6.337 6.337 6.337 6.337 0 0 0 6.337 6.337 6.337 6.337 0 0 0 6.337-6.337V8.654a8.211 8.211 0 0 0 4.779 1.513V6.722a4.793 4.793 0 0 1-1.002-.036z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070d] border-t border-white/10 text-slate-400 text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-xl font-bold font-heading text-white">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff8a00] to-[#ffc247] flex items-center justify-center text-black font-extrabold">
                <Truck className="w-4 h-4 text-black" />
              </div>
              <span>CH <span className="text-[#ff8a00]">Logistics</span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Truck dispatch services for owner-operators and small fleets. Higher rates per mile, zero long-term contracts, and 24/7 support.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61595741751436&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/40 text-xs text-slate-300 hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
              </a>

              <a
                href="https://www.tiktok.com/@ch.logistics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-xs text-slate-300 hover:text-white transition-all"
              >
                <TikTokIcon className="w-4 h-4 text-[#ff2a5f]" />
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-white text-sm block mb-3">Quick Navigation</span>
            <a href="#services" className="block text-slate-400 hover:text-white transition-colors">Dispatch Services</a>
            <a href="#calculator" className="block text-[#ffc247] hover:text-[#ff8a00] transition-colors">Rate Estimator</a>
            <a href="#how" className="block text-slate-400 hover:text-white transition-colors">How It Works</a>
            <a href="#ai-assistant" className="block text-[#ffc247] hover:text-[#ff8a00] transition-colors">AI Dispatch Assistant</a>
            <a href="#pricing" className="block text-slate-400 hover:text-white transition-colors">Transparent Pricing</a>
            <a href="#faq" className="block text-slate-400 hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Direct Contact */}
          <div className="space-y-2 text-xs">
            <span className="font-bold text-white text-sm block mb-3">Dispatch Desk</span>
            <a href="tel:9122174632" className="block text-slate-300 hover:text-[#ffc247] font-semibold transition-colors">
              📞 Call: (912) 217-4632
            </a>
            <a
              href="https://wa.me/923137958854?text=Hi%20CH%20Logistics%20Dispatch,%20I'm%20looking%20for%20loads%20for%20my%20truck!"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[#25D366] hover:underline font-semibold transition-colors"
            >
              💬 WhatsApp: 03137958854
            </a>
            <a href="mailto:martinac@brakexfirm.com" className="block text-slate-300 hover:text-[#ffc247] transition-colors">
              ✉️ martinac@brakexfirm.com
            </a>
            <span className="block text-slate-500 pt-2">
              📍 1001 S Main St, Ste 600, Kalispell, MT 59901 🇺🇸
            </span>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} CH Logistics. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=61595741751436&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Facebook</a>
            <a href="https://www.tiktok.com/@ch.logistics" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">TikTok</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
