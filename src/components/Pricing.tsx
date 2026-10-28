import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0b1220] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff8a00] mb-2 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Clear Fees. <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">No Hidden Contracts.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We only get paid when you get paid. Pay a simple percentage per completed load with zero setup fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Owner-Operator */}
          <div className="bg-[#05070d] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Owner-Operator</h3>
              <p className="text-xs text-slate-400 mb-6">For single truck drivers seeking higher RPM</p>
              
              <div className="text-4xl font-heading font-extrabold text-white mb-6">
                6% <span className="text-sm font-normal text-slate-400">/ per load</span>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Strategic load sourcing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Aggressive rate negotiation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Rate confirmations & paperwork</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Invoicing & factoring setup</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-all"
            >
              <span>Choose Owner-Op</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Small Fleet (2-5 Trucks) Featured */}
          <div className="bg-gradient-to-b from-[#1c1306] via-[#0b1220] to-[#0b1220] rounded-3xl p-8 border-2 border-[#ff8a00] shadow-2xl shadow-[#ff8a00]/15 flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ff8a00] to-[#ffc247] text-black text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Small Fleet (2-5 Trucks)</h3>
              <p className="text-xs text-[#ffc247] mb-6">Dedicated dispatcher & volume rate discount</p>

              <div className="text-4xl font-heading font-extrabold text-[#ffc247] mb-6">
                5% <span className="text-sm font-normal text-slate-400">/ per load</span>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-200">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ffc247]" />
                  <span>Everything in Owner-Operator</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ffc247]" />
                  <span>Dedicated assigned dispatcher desk</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ffc247]" />
                  <span>100% Detention & TONU claims</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ffc247]" />
                  <span>Multi-truck route planning</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff8a00] to-[#ffc247] text-black font-bold text-xs shadow-lg shadow-[#ff8a00]/30 hover:scale-[1.02] transition-all"
            >
              <span>Get Small Fleet Rates</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Growing Fleet (6+ Trucks) */}
          <div className="bg-[#05070d] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">Growing Fleet (6+ Trucks)</h3>
              <p className="text-xs text-slate-400 mb-6">Custom volume pricing & dedicated logistics team</p>

              <div className="text-4xl font-heading font-extrabold text-white mb-6">
                Custom <span className="text-sm font-normal text-slate-400">volume rate</span>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Volume dispatch fee discount</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Dedicated multi-line dispatch team</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Weekly revenue & lane reporting</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#ff8a00]" />
                  <span>Custom broker contract bidding</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-all"
            >
              <span>Talk to Fleet Manager</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
