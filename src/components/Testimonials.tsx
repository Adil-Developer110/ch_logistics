import React from 'react';
import { Star, Quote, Award, ThumbsUp, Users } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "My rate per mile jumped from $2.10 to $2.75 within 3 weeks of joining CH Logistics. All rate-cons and factoring paperwork are handled before I even pull off the lot.",
      author: "Marcus T.",
      role: "Dry Van Owner-Operator",
      location: "Atlanta, GA",
      badge: "+$0.65 RPM Boost"
    },
    {
      quote: "They always pick up the phone at 2:00 AM when a receiver gives me trouble at the dock. True 24/7 dispatchers who actually care about drivers.",
      author: "Derrick V.",
      role: "Reefer Fleet (3 Trucks)",
      location: "Macon, GA",
      badge: "24/7 Support"
    },
    {
      quote: "No long-term contract lock-in gave me the confidence to try them, but their aggressive rate negotiations and zero deadhead strategy made me stay permanently.",
      author: "Carlos M.",
      role: "Flatbed Carrier",
      location: "Savannah, GA",
      badge: "Zero Deadhead"
    }
  ];

  return (
    <section className="py-24 bg-[#05070d] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff8a00] mb-2 block">
            Carrier Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Drivers Who <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">Trust CH Logistics</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Read real feedback from owner-operators and fleet owners rolling on Georgia and US freight lanes.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#0b1220] rounded-3xl p-8 border border-white/10 hover:border-[#ff8a00]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#ffc247]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffc247]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#ffc247] bg-[#ff8a00]/10 border border-[#ff8a00]/20 px-2.5 py-0.5 rounded-full">
                    {rev.badge}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8a00] to-[#ffc247] text-black font-extrabold flex items-center justify-center text-sm font-heading">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">{rev.author}</h4>
                  <span className="text-xs text-slate-400 block">{rev.role} · {rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Numbers Bar */}
        <div className="bg-gradient-to-r from-[#0b1220] via-[#151c30] to-[#0b1220] rounded-3xl p-8 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#ffc247] mb-1">12,500+</div>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Loads Booked</span>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#ffc247] mb-1">+18.4%</div>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Average Rate Boost</span>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#ffc247] mb-1">240+</div>
            <span className="text-xs text-slate-400 uppercase tracking-wider">Active Carriers</span>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#ffc247] mb-1">99.8%</div>
            <span className="text-xs text-slate-400 uppercase tracking-wider">On-Time Payouts</span>
          </div>
        </div>

      </div>
    </section>
  );
};
