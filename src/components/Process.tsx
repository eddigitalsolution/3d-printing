import React from 'react';
import { UploadCloud, Layers, Printer, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'CAD File Upload & Automated DFM',
      icon: UploadCloud,
      description: 'Upload your .STEP or .STL file. Our automated Design for Additive Manufacturing (DFM) engine instantly checks wall thickness, overhang angles, and volume metrics.',
    },
    {
      number: '02',
      title: 'Toolpath Slicing & Laser Strategy',
      icon: Layers,
      description: 'Engineers configure layer resolution (20µm - 100µm), inert gas purge flow, and laser vector scanning paths for zero porosity.',
    },
    {
      number: '03',
      title: 'Additive Thermal Build Chamber',
      icon: Printer,
      description: 'High-power lasers fuse metal or polymer micro-powders in climate-controlled argon environment with continuous thermal camera monitoring.',
    },
    {
      number: '04',
      title: 'Stress Relief & CNC Post-Machining',
      icon: Wrench,
      description: 'Components undergo vacuum furnace stress-relief heat treatment followed by 5-axis CNC precision milling on critical mating surfaces.',
    },
    {
      number: '05',
      title: 'CMM Laser Inspection & Certification',
      icon: ShieldCheck,
      description: 'Final 3D optical laser scanning and CMM probing verify sub-millimeter tolerances against your original CAD model before dispatch.',
    },
  ];

  return (
    <section id="process" className="py-24 relative bg-industrial-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-950 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>QUALIFIED WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            PRODUCTION <span className="text-cyan-400">PROCESS</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            From initial digital file upload to final physical Quality Assurance certification.
          </p>
        </div>

        {/* Workflow Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl bg-industrial-950 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-industrial-950 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xl font-black text-cyan-400">{step.number}</span>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-slate-400 text-xs leading-relaxed">{step.description}</p>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="mt-4 pt-2 flex items-center text-slate-600 group-hover:text-cyan-400 transition-colors text-xs font-mono">
                      <span>NEXT STEP</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
