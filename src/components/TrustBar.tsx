import React from 'react';
import { MapPin, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#0b1220] border-y border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 text-xs sm:text-sm text-slate-300 font-medium">
          
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#ff8a00]" />
            <span>Atlanta, Georgia · Serving Carriers Nationwide</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ff8a00]" />
            <span>No Long-Term Contracts</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#ff8a00]" />
            <span>24/7 Dedicated Support</span>
          </div>

          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#ff8a00]" />
            <span>Better Rates Per Mile</span>
          </div>

        </div>
      </div>
    </div>
  );
};
