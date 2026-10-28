import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is there a binding long-term contract?',
      a: 'No. There are no binding long-term contracts or locked terms. You can pause or stop using CH Logistics dispatch services whenever you wish with zero termination penalties.'
    },
    {
      q: 'How fast do I get paid for booked loads?',
      a: 'We submit your Rate Confirmations and Bills of Lading (BOL) immediately upon delivery. We work directly with your factoring company or setup broker quick-pay for same-day or next-day payouts.'
    },
    {
      q: 'Which truck types and equipment do you dispatch?',
      a: 'We specialize in Dry Van, Reefer, Flatbed, Stepdeck, Box Truck, and Power Only units running regional Georgia corridors or long-haul nationwide lanes.'
    },
    {
      q: 'What paperwork do I need to start dispatching?',
      a: 'You only need 3 documents: 1) Active MC or DOT authority certificate, 2) Certificate of Insurance (COI) showing $1M Auto Liability & $100k Cargo insurance, and 3) Signed W-9 form.'
    },
    {
      q: 'How do you handle detention and TONU (Truck Ordered Not Used)?',
      a: 'We monitor dock check-in/check-out timestamps closely. If a receiver holds you past 2 hours or cancels a load after dispatch, we fight for 100% of detention and TONU compensation.'
    },
    {
      q: 'Can I decline a load if I don’t like the rate or location?',
      a: 'Yes, absolutely. You retain 100% authority over your truck. We present options and negotiate top rates, but you make the final call on every load.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0b1220] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff8a00] mb-2 block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-slate-400 text-base">
            Everything you need to know about dispatching with CH Logistics.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#05070d] rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'bg-[#ff8a00] text-black border-[#ff8a00]' : 'text-slate-400'}`}>
                    {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
