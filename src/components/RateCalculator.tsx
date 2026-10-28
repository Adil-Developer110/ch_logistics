import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Truck, Sparkles, ArrowRight } from 'lucide-react';

export const RateCalculator: React.FC = () => {
  const [equipment, setEquipment] = useState<'dry_van' | 'reefer' | 'flatbed' | 'box_truck' | 'power_only'>('dry_van');
  const [milesPerWeek, setMilesPerWeek] = useState<number>(2400);
  const [currentRpm, setCurrentRpm] = useState<number>(2.10);
  const [truckCount, setTruckCount] = useState<number>(1);

  // Rate boost per mile estimation based on equipment benchmark
  const rpmBoostMap = {
    dry_van: 0.45,
    reefer: 0.55,
    flatbed: 0.60,
    box_truck: 0.40,
    power_only: 0.35,
  };

  const boost = rpmBoostMap[equipment];
  const newRpm = +(currentRpm + boost).toFixed(2);
  
  // Dispatch Fee Rate: 6% for 1 truck, 5% for 2+ trucks
  const feeRate = truckCount >= 2 ? 0.05 : 0.06;

  const currentWeeklyGross = milesPerWeek * currentRpm * truckCount;
  const newWeeklyGross = milesPerWeek * newRpm * truckCount;
  const weeklyFee = newWeeklyGross * feeRate;
  const netWeeklyGross = newWeeklyGross - weeklyFee;

  const weeklyGain = netWeeklyGross - currentWeeklyGross;
  const monthlyGain = weeklyGain * 4.33; // Average weeks in a month
  const yearlyGain = monthlyGain * 12;

  return (
    <section id="calculator" className="py-24 bg-[#0b1220] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff8a00]/10 border border-[#ff8a00]/30 text-xs font-semibold text-[#ffc247] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Profit Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Calculate Your <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">Rate Increase</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            See how much extra gross revenue and net profit your truck or fleet can generate with CH Logistics expert dispatchers.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#05070d] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Equipment Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                1. Select Equipment Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'dry_van', label: 'Dry Van', icon: '📦' },
                  { id: 'reefer', label: 'Reefer', icon: '❄️' },
                  { id: 'flatbed', label: 'Flatbed', icon: '🏗️' },
                  { id: 'box_truck', label: 'Box Truck', icon: '🚚' },
                  { id: 'power_only', label: 'Power Only', icon: '🚛' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setEquipment(item.id as any)}
                    className={`flex items-center gap-2 p-3 rounded-2xl border text-xs font-semibold transition-all ${
                      equipment === item.id
                        ? 'bg-[#ff8a00]/15 border-[#ff8a00] text-white shadow-lg shadow-[#ff8a00]/20'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Miles Per Week Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Average Weekly Miles Per Truck
                </label>
                <span className="text-sm font-mono font-bold text-[#ffc247] bg-[#ff8a00]/10 px-3 py-1 rounded-full border border-[#ff8a00]/20">
                  {milesPerWeek.toLocaleString()} miles / wk
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="4000"
                step="100"
                value={milesPerWeek}
                onChange={(e) => setMilesPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff8a00]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>1,000 mi</span>
                <span>2,500 mi</span>
                <span>4,000 mi</span>
              </div>
            </div>

            {/* 3. Current Rate Per Mile */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Your Current Average Rate Per Mile (RPM)
                </label>
                <span className="text-sm font-mono font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  ${currentRpm.toFixed(2)} / mile
                </span>
              </div>
              <input
                type="range"
                min="1.50"
                max="3.50"
                step="0.05"
                value={currentRpm}
                onChange={(e) => setCurrentRpm(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff8a00]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>$1.50/mi</span>
                <span>$2.50/mi</span>
                <span>$3.50/mi</span>
              </div>
            </div>

            {/* 4. Fleet Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  4. Number of Trucks in Fleet
                </label>
                <span className="text-sm font-mono font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {truckCount} {truckCount === 1 ? 'Truck' : 'Trucks'} ({feeRate * 100}% dispatch fee)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={truckCount}
                onChange={(e) => setTruckCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#ff8a00]"
              />
            </div>

          </div>

          {/* Results Output Column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#181206] to-[#0d1424] rounded-2xl p-6 border-2 border-[#ff8a00]/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#ffc247]" />
                  <span className="font-heading font-bold text-white text-base">CH Logistics Impact</span>
                </div>
                <span className="text-xs font-semibold text-[#ffc247] bg-[#ff8a00]/20 px-2.5 py-0.5 rounded-full">
                  Target RPM: ${newRpm.toFixed(2)}/mi
                </span>
              </div>

              {/* Comparison Metrics */}
              <div className="space-y-4 mb-6">
                
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Current Estimated Weekly Gross</span>
                  <span className="font-mono font-semibold text-slate-200">${Math.round(currentWeeklyGross).toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>CH Logistics Negotiated Gross</span>
                  <span className="font-mono font-semibold text-[#ffc247]">${Math.round(newWeeklyGross).toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Dispatch Admin Fee ({feeRate * 100}%)</span>
                  <span className="font-mono text-slate-400">-${Math.round(weeklyFee).toLocaleString()}</span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Net Monthly Revenue Increase
                  </span>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#ffc247]">
                    +${Math.round(monthlyGain).toLocaleString()} <span className="text-xs text-slate-400 font-normal">/ month</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-1">
                    +${Math.round(yearlyGain).toLocaleString()} extra net profit per year!
                  </div>
                </div>

              </div>
            </div>

            {/* Claim Rate Action */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-heading font-bold text-sm text-black bg-gradient-to-r from-[#ff8a00] to-[#ffc247] hover:shadow-lg hover:shadow-[#ff8a00]/30 transition-all text-center"
            >
              <span>Lock In These Rates</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
