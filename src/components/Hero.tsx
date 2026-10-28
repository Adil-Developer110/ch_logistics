import React, { useState } from 'react';
import { TruckGraphic, TruckDefs } from './TruckArtwork';
import { PhoneCall, MapPin, Gauge } from 'lucide-react';

export const Hero: React.FC = () => {
  const [speedMode, setSpeedMode] = useState<'cruise' | 'rush' | 'night'>('cruise');

  return (
    <section className="relative min-h-[92vh] pt-24 pb-10 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#070b18] via-[#13213f] via-75% to-[#ff8a00]/15">
      <TruckDefs />

      {/* Subtle Starry Background */}
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_15%_25%,#fff_50%,transparent),radial-gradient(1px_1px_at_55%_12%,#fff_50%,transparent),radial-gradient(1.5px_1.5px_at_78%_35%,#fff_50%,transparent),radial-gradient(1px_1px_at_35%_48%,#fff_50%,transparent)] bg-[length:340px_300px] opacity-35 pointer-events-none" />
      <div className="absolute left-1/2 bottom-36 -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-radial from-[#ffd08a] via-[#ff8a00]/30 to-transparent blur-2xl opacity-70 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-4">
        
        {/* Simple Location Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#ffc247] mb-5">
          <MapPin className="w-3.5 h-3.5 text-[#ff8a00]" />
          <span>Atlanta, Georgia · Truck Dispatch</span>
        </div>

        {/* Clean Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-5">
          More Miles.<br />
          <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">
            Better Rates.
          </span> Zero Hassle.
        </h1>

        {/* Short, Simple Description */}
        <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-7">
          We find high-paying loads, negotiate every rate, and handle all paperwork so you can focus on driving.
        </p>

        {/* Primary Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-7">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full font-bold text-sm text-black bg-gradient-to-r from-[#ff8a00] to-[#ffc247] shadow-lg shadow-[#ff8a00]/30 hover:scale-105 transition-all"
          >
            Get Started Free
          </a>
          <a
            href="tel:9122174632"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#ffc247]" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Simple Drive Mode Toggle */}
        <div className="inline-flex items-center gap-2 p-1 rounded-full bg-black/40 border border-white/10 mb-6">
          <span className="text-xs font-medium text-slate-400 pl-3 flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5 text-[#ff8a00]" /> Speed:
          </span>
          <button
            onClick={() => setSpeedMode('cruise')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              speedMode === 'cruise' ? 'bg-[#ff8a00] text-black' : 'text-slate-300 hover:text-white'
            }`}
          >
            Cruise
          </button>
          <button
            onClick={() => setSpeedMode('rush')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              speedMode === 'rush' ? 'bg-[#ff8a00] text-black' : 'text-slate-300 hover:text-white'
            }`}
          >
            Rush
          </button>
          <button
            onClick={() => setSpeedMode('night')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              speedMode === 'night' ? 'bg-[#ff8a00] text-black' : 'text-slate-300 hover:text-white'
            }`}
          >
            Night
          </button>
        </div>

        {/* Clean Key Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium">
          <span>✓ No long-term contract</span>
          <span>✓ 24/7 Dispatch desk</span>
          <span>✓ Georgia based</span>
        </div>

      </div>

      {/* Semi-Truck World Parallax Scene */}
      <div className="relative w-full h-[240px] sm:h-[280px] mt-4 overflow-hidden select-none">
        
        {/* Mountain Silhouette Layer */}
        <div className="absolute left-0 bottom-14 w-[200%] flex animate-pan-mountains opacity-85">
          <svg className="w-1/2 h-[130px] block flex-none" viewBox="0 0 2400 170" preserveAspectRatio="none">
            <g fill="#1a2547">
              <path id="mountain-path" d="M0 170V110L120 60 220 105 360 40 520 115 640 70 800 120 960 55 1100 110 1200 80V170Z" />
              <use href="#mountain-path" x="1200" />
            </g>
          </svg>
          <svg className="w-1/2 h-[130px] block flex-none" viewBox="0 0 2400 170" preserveAspectRatio="none">
            <g fill="#1a2547">
              <use href="#mountain-path" />
              <use href="#mountain-path" x="1200" />
            </g>
          </svg>
        </div>

        {/* City Skyline Layer */}
        <div className="absolute left-0 bottom-12 w-[200%] flex animate-pan-city">
          <svg className="w-1/2 h-[90px] block flex-none" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <g fill="#0e1630">
              <path id="city-path" d="M0 120V60h40V30h50v40h30V20h60v50h40V45h50v75h30V35h60v85h40V55h40V25h50v95h40V50h60V70h50v50h50V40h60v80h40V60h50v60h40V30h50v90h60V70h40v50Z" />
            </g>
          </svg>
          <svg className="w-1/2 h-[90px] block flex-none" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <use href="#city-path" />
          </svg>
        </div>

        {/* Highway Road */}
        <div className="absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-b from-[#1a1e2b] to-[#0a0c13] border-t-2 border-[#3a4258]">
          <div className="absolute left-0 right-0 top-5 h-1 bg-[repeating-linear-gradient(90deg,#ffc247_0_50px,transparent_50px_100px)] animate-road" />
        </div>

        {/* Speed Trails */}
        <div className="absolute bottom-24 h-0.5 w-32 bg-gradient-to-r from-transparent to-white/60 animate-speed-1" />
        <div className="absolute bottom-16 h-0.5 w-24 bg-gradient-to-r from-transparent to-[#ffc247]/70 animate-speed-2" />

        {/* Truck Graphic */}
        <div className="absolute left-1/2 bottom-4 -translate-x-1/2 w-[min(680px,95vw)] overflow-visible animate-truck filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.6)]">
          <TruckGraphic speedMode={speedMode} />
        </div>

      </div>
    </section>
  );
};
