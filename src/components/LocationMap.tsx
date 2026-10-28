import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Building2 } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const fullAddress = "1001 S Main St, Ste 600, Kalispell, MT 59901-1498, Montana, United States";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const iframeEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="py-24 bg-[#0b1220] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a00]/10 border border-[#ff8a00]/30 text-xs font-semibold text-[#ffc247] mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#ff8a00]" />
            <span>LLC Registered Headquarters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Our Official <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">Location</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            CH Logistics LLC corporate headquarters located in Kalispell, Montana, serving carriers and owner-operators nationwide.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#05070d] rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff8a00] to-[#ffc247] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#ff8a00]/30">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">CH Logistics LLC</h3>
                  <span className="text-xs text-[#ffc247]">Montana Registered Office 🇺🇸</span>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-5 text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff8a00] mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Street Address</span>
                    <span className="text-white font-semibold">1001 S Main St, Ste 600</span>
                    <span className="text-slate-300 block text-xs">Kalispell, MT 59901-1498</span>
                    <span className="text-slate-400 block text-xs">Montana, United States 🇺🇸</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff8a00]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Dispatch Desk Phone</span>
                    <a href="tel:9122174632" className="text-white font-bold hover:text-[#ffc247] transition-colors">
                      (912) 217-4632
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff8a00]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Official Email</span>
                    <a href="mailto:martinac@brakexfirm.com" className="text-white font-semibold hover:text-[#ffc247] transition-colors">
                      martinac@brakexfirm.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff8a00]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Operating Hours</span>
                    <span className="text-white font-semibold">24/7/365 Dedicated Dispatch Desk</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#ff8a00] to-[#ffc247] text-black font-bold text-xs hover:shadow-lg hover:shadow-[#ff8a00]/30 transition-all text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="tel:9122174632"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-[#ff8a00]" />
                <span>Call Desk</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Iframe (7 cols) */}
          <div className="lg:col-span-7 bg-[#05070d] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative min-h-[380px] flex flex-col">
            
            {/* Top Bar for Map Box */}
            <div className="px-6 py-3 bg-[#070b18] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                <MapPin className="w-4 h-4 text-[#ff8a00]" />
                <span>Kalispell, MT Headquarters Map</span>
              </div>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#ffc247] hover:underline flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map Embed Iframe */}
            <div className="flex-1 w-full h-full min-h-[350px] relative bg-[#121929]">
              <iframe
                title="CH Logistics LLC Kalispell MT Map Location"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={iframeEmbedUrl}
                className="w-full h-full min-h-[350px]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
