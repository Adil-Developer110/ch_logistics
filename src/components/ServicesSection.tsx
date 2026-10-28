import React from 'react';
import { Truck, DollarSign, MessageSquare, FileText, Clock, Headphones, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Truck className="w-6 h-6 text-[#ff8a00]" />,
      title: 'Strategic Load Sourcing',
      desc: 'Access to premium load boards and direct broker relationships across high-volume Georgia and nationwide lanes.',
      tag: 'Lane Matching'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#ff8a00]" />,
      title: 'Aggressive Rate Negotiation',
      desc: 'We fight for every nickel, pushing rate-cons to peak market pricing before you turn the key.',
      tag: 'Max RPM'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#ff8a00]" />,
      title: 'Broker Communication',
      desc: 'All check-calls, location updates, and broker paperwork managed seamlessly while you focus on driving.',
      tag: 'Hands-Free'
    },
    {
      icon: <FileText className="w-6 h-6 text-[#ff8a00]" />,
      title: 'Invoicing & Factoring Support',
      desc: 'Instant carrier packet creation, rate confirmation filing, BOL submissions, and fast payment follow-up.',
      tag: 'Fast Payouts'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#ff8a00]" />,
      title: 'Detention & TONU Recovery',
      desc: 'Never work for free on a dock. We chase detention, layover, and Truck Ordered Not Used fees aggressively.',
      tag: 'Zero Unpaid Time'
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#ff8a00]" />,
      title: '24/7 Dedicated Dispatcher',
      desc: 'A real, assigned dispatcher reachable 24/7/365 to handle emergency re-routes, dock issues, and late loads.',
      tag: 'Always On'
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#05070d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff8a00] mb-2 block">
            Dispatch Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-4">
            Everything a Carrier <span className="bg-gradient-to-r from-[#ff8a00] to-[#ffc247] bg-clip-text text-transparent">Needs to Win</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            One dedicated team that sources, negotiates, books, and manages paperwork so your wheels never stop turning.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0b1220] rounded-3xl p-8 border border-white/10 hover:border-[#ff8a00]/50 hover:shadow-2xl hover:shadow-[#ff8a00]/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff8a00]/20 to-[#ffc247]/10 border border-[#ff8a00]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#ffc247] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-[#ffc247] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#ff8a00] hover:text-[#ffc247] transition-colors pt-4 border-t border-white/5"
              >
                <span>Request {service.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
