import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col gap-3">
      
      {/* WhatsApp Action */}
      <a
        href="https://wa.me/923137958854?text=Hi%20CH%20Logistics%20Dispatch,%20I'm%20looking%20for%20loads%20for%20my%20truck!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-transform duration-200 border-2 border-white/20 group"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        <span className="absolute right-16 bg-black/80 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          WhatsApp Dispatch
        </span>
      </a>

      {/* Quick Phone Call Action */}
      <a
        href="tel:9122174632"
        aria-label="Call Dispatch Line"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#ff8a00] to-[#ffc247] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200 border-2 border-black/20 group"
      >
        <Phone className="w-6 h-6 stroke-[2.5]" />
        <span className="absolute right-16 bg-black/80 text-white text-xs font-semibold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Call (912) 217-4632
        </span>
      </a>

    </div>
  );
};
