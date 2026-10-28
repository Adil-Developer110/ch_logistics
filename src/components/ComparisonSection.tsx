import React from 'react';
import { X, Check, DollarSign, Clock, FileText, AlertTriangle, ArrowUpRight } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#05070d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff8a00] mb-2 block">
            Why CH Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Stop Leaving <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">Money on the Road</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Compare driving on your own vs. partnering with an expert dispatch team dedicated to maximizing your gross revenue.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid md:grid-[#0b1220] grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Without Dispatcher */}
          <div className="rounded-3xl p-8 bg-[#0b1220]/60 border border-white/10 hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Without a Dispatcher</h3>
                  <p className="text-xs text-slate-400">Self-dispatching & searching load boards alone</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>3-4 Hours Wasted Daily:</strong> Scouring DAT, Truckstop, and 12+ load boards while driving.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Low Ball Broker Offers:</strong> Settling for cheap $2.00/mile freight with high deadhead miles.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Paperwork Headaches:</strong> Filling COI forms, carrier packets, and Rate-Cons at truck stops.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Uncollected Detention:</strong> Losing money on 4-hour dock delays with no TONU or layover pay.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/5 text-xs text-slate-500 text-center font-mono">
              Estimated Average RPM: $2.05 / mile
            </div>
          </div>

          {/* Card 2: With CH Logistics */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-[#1c1306] via-[#0b1220] to-[#0b1220] border-2 border-[#ff8a00] shadow-2xl shadow-[#ff8a00]/10 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Tag */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff8a00] to-[#ffc247] text-black text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
              Recommended for Max Profit
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff8a00] to-[#ffc247] flex items-center justify-center text-black font-extrabold shadow-lg shadow-[#ff8a00]/30">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">With CH Logistics</h3>
                  <p className="text-xs text-[#ffc247]">Dedicated 24/7 Atlanta Dispatch Desk</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-200 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#ff8a00]/20 text-[#ffc247] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Premium Direct Freight:</strong> Access to high-paying broker relationships and top spot loads.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#ff8a00]/20 text-[#ffc247] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Aggressive Rate Negotiation:</strong> We push for top dollar on every single load confirmation.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#ff8a00]/20 text-[#ffc247] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>Full Office Administration:</strong> We handle setups, COI requests, invoicing, and factoring paperwork.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#ff8a00]/20 text-[#ffc247] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span><strong>100% Detention & TONU Recovery:</strong> We chase down every dollar you're owed for dock waiting time.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Average Achieved RPM</span>
                <span className="text-xl font-heading font-bold text-[#ffc247]">$2.55 - $3.20 / mile</span>
              </div>
              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-black bg-[#ff8a00] hover:bg-[#ffc247] transition-colors"
              >
                <span>Partner Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
