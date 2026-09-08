import React from 'react';
import { Plane, Car, Stethoscope, Smartphone, Factory, CheckCircle2 } from 'lucide-react';

export const Industries: React.FC = () => {
  const industries = [
    {
      id: 'aerospace',
      title: 'Aerospace & Defense',
      icon: Plane,
      badge: 'AS9100 COMPLIANT',
      summary: 'Flight-certified titanium combustor nozzles, satellite structural brackets, and heat exchangers built for orbital extremes.',
      caseStudy: '62% Weight reduction achieved on orbital satellite antenna bracket using Generative DMLS.',
    },
    {
      id: 'automotive',
      title: 'Motorsport & Automotive',
      icon: Car,
      badge: 'ISO 16949 READY',
      summary: 'Custom turbo manifolds, brake cooling ducts, and rapid prototype tooling for Formula 1 & EV powertrains.',
      caseStudy: 'Reduced intake manifold iteration cycle from 6 weeks down to 36 hours.',
    },
    {
      id: 'medical',
      title: 'Medical & Bio-Implants',
      icon: Stethoscope,
      badge: 'ISO 13485 CERTIFIED',
      summary: 'Patient-specific cranial titanium implants, dental alignment molds, and bio-compatible surgical guides.',
      caseStudy: 'Printed 400+ custom titanium hip implants with osteointegrative porous surfaces.',
    },
    {
      id: 'electronics',
      title: 'Consumer Electronics',
      icon: Smartphone,
      badge: 'RAPID ITERATION',
      summary: 'High-detail enclosure prototypes, EMI shielding gaskets, and micro-optical lens arrays for next-gen wearables.',
      caseStudy: 'Accelerated thermal test cycles for handheld AR devices using clear resin fluidics.',
    },
    {
      id: 'industrial-tooling',
      title: 'Industrial Jigs & Fixtures',
      icon: Factory,
      badge: 'SHOP FLOOR READY',
      summary: 'Robotic end-of-arm tooling, CMM inspection nests, and conformally cooled injection mold inserts.',
      caseStudy: 'Cut robot arm weight by 4.2kg, increasing assembly line cycle speed by 28%.',
    },
  ];

  return (
    <section id="industries" className="py-24 relative bg-industrial-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-950 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Factory className="w-3.5 h-3.5" />
            <span>MISSION CRITICAL APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            TARGET <span className="text-cyan-400">INDUSTRIES</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Powering mission-critical hardware across global high-technology sectors.
          </p>
        </div>

        {/* Industries Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="p-8 rounded-2xl bg-industrial-950 border border-slate-800 hover:border-cyan-500/40 transition-all hover:shadow-2xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2 py-0.5 rounded bg-industrial-900 border border-slate-800 font-mono text-[10px] text-cyan-400">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">{ind.summary}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 bg-industrial-900/50 p-3.5 rounded-xl border border-slate-800">
                  <span className="font-mono text-[10px] text-amber-500 uppercase block font-semibold">
                    // CASE METRIC HIGHLIGHT:
                  </span>
                  <p className="font-mono text-xs text-slate-300 mt-1">{ind.caseStudy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
