import React, { useState } from 'react';
import { TruckGraphic } from './TruckArtwork';
import { UserCheck, Search, DollarSign, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Quick Onboarding',
      icon: <UserCheck className="w-5 h-5 text-[#ff8a00]" />,
      desc: 'Send us your active MC/DOT authority, insurance COI, and W-9. We set up your profile and identify your top target lanes within 10 minutes.',
      details: '✓ Zero long-term contract lock-in\n✓ Instant carrier setup with top brokers\n✓ Customized rate goals based on your equipment',
    },
    {
      num: '02',
      title: 'We Find & Negotiate Loads',
      icon: <Search className="w-5 h-5 text-[#ff8a00]" />,
      desc: 'Our dispatchers aggressively scan premium load boards and direct broker contacts, pushing for top dollar rate confirmations before booking.',
      details: '✓ Every rate negotiated for max RPM\n✓ Minimal deadhead distance planned\n✓ You approve every load before booking',
    },
    {
      num: '03',
      title: 'Drive & Get Paid Fast',
      icon: <DollarSign className="w-5 h-5 text-[#ff8a00]" />,
      desc: 'You focus on safe driving. We handle check-calls, detention claims, BOL paperwork, invoicing, and quick-pay factoring follow-up.',
      details: '✓ 24/7 dispatcher support on the road\n✓ 100% detention and TONU fee recovery\n✓ Same-day / next-day factoring ready',
    },
  ];

  // Truck position percentage along the step line
  const truckPositionPercent = activeStep === 0 ? 15 : activeStep === 1 ? 50 : 85;

  return (
    <section id="how" className="py-24 bg-[#0b1220] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff8a00] mb-2 block">
            Seamless Onboarding
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Three Steps, <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">One Smooth Road</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Getting started with CH Logistics is fast, simple, and requires no upfront fees or binding contracts.
          </p>
        </div>

        {/* Animated Road & Truck Progress Bar */}
        <div className="relative mb-16 bg-[#05070d] rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Road Strip Background */}
          <div className="relative h-20 bg-gradient-to-r from-[#0c1426] via-[#17233f] to-[#0c1426] rounded-2xl overflow-hidden flex items-center">
            
            {/* Center Yellow Road Stripes */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-[repeating-linear-gradient(90deg,#ffc247_0_40px,transparent_40px_80px)] animate-road" />

            {/* Step Checkpoints along the Road */}
            <div className="absolute left-[15%] -translate-x-1/2 flex flex-col items-center">
              <button
                onClick={() => setActiveStep(0)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all z-10 ${
                  activeStep === 0 ? 'bg-[#ff8a00] text-black shadow-lg shadow-[#ff8a00]/50 scale-125' : 'bg-white/10 text-slate-300 border border-white/20'
                }`}
              >
                1
              </button>
              <span className="text-[11px] font-semibold text-slate-300 mt-1 whitespace-nowrap">1. Onboard</span>
            </div>

            <div className="absolute left-[50%] -translate-x-1/2 flex flex-col items-center">
              <button
                onClick={() => setActiveStep(1)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all z-10 ${
                  activeStep === 1 ? 'bg-[#ff8a00] text-black shadow-lg shadow-[#ff8a00]/50 scale-125' : 'bg-white/10 text-slate-300 border border-white/20'
                }`}
              >
                2
              </button>
              <span className="text-[11px] font-semibold text-slate-300 mt-1 whitespace-nowrap">2. Find & Book</span>
            </div>

            <div className="absolute left-[85%] -translate-x-1/2 flex flex-col items-center">
              <button
                onClick={() => setActiveStep(2)}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all z-10 ${
                  activeStep === 2 ? 'bg-[#ff8a00] text-black shadow-lg shadow-[#ff8a00]/50 scale-125' : 'bg-white/10 text-slate-300 border border-white/20'
                }`}
              >
                3
              </button>
              <span className="text-[11px] font-semibold text-slate-300 mt-1 whitespace-nowrap">3. Get Paid</span>
            </div>

            {/* Moving Truck Graphic */}
            <div
              className="absolute bottom-2 w-48 sm:w-60 transition-all duration-700 ease-out pointer-events-none"
              style={{ left: `calc(${truckPositionPercent}% - 90px)` }}
            >
              <TruckGraphic speedMode="rush" />
            </div>

          </div>

        </div>

        {/* Step Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                activeStep === idx
                  ? 'bg-gradient-to-b from-[#1c1306] via-[#0b1220] to-[#0b1220] border-[#ff8a00] shadow-xl shadow-[#ff8a00]/15 -translate-y-2'
                  : 'bg-[#05070d] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-heading font-extrabold text-[#ff8a00]/40">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-1.5 font-mono whitespace-pre-line">
                {step.details}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
