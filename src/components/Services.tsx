import React from 'react';
import { Cpu, Layers, ShieldCheck, RefreshCw, Sparkles, Wrench, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      id: 'rapid-prototyping',
      title: 'Rapid Functional Prototyping',
      icon: Cpu,
      badge: 'SAME-DAY DISPATCH',
      description:
        'Iterate complex geometric designs within 24 hours. High-accuracy SLA and FDM prototyping with production-like mechanical behavior.',
      deliverables: ['Functional Assembly Validation', 'Snap-Fit & Enclosure Testing', 'Sub-millimeter Tolerance Verification'],
      color: 'cyan',
    },
    {
      id: 'production-manufacturing',
      title: 'Direct Metal Additive Production',
      icon: Layers,
      badge: 'ISO 9001 / AS9100',
      description:
        'End-use metal end components printed in Titanium, Inconel, and Stainless Steel via Direct Metal Laser Sintering (DMLS).',
      deliverables: ['99.9% Full Density Parts', 'Certified Material Test Reports', 'Lot Traceability & Radiography'],
      color: 'amber',
    },
    {
      id: 'generative-design',
      title: 'Generative Topology Optimization',
      icon: Sparkles,
      badge: 'LIGHTWEIGHTING',
      description:
        'Algorithmic weight reduction using organic lattice structures. Reduce part mass by up to 60% without compromising structural stiffness.',
      deliverables: ['FEA Structural Analysis', 'Lattice Infill Engineering', 'CAD Remesh Optimization'],
      color: 'cyan',
    },
    {
      id: 'reverse-engineering',
      title: '3D Optical Scanning & CMM Reverse Engineering',
      icon: RefreshCw,
      badge: 'MICRON SCANNING',
      description:
        'Convert legacy mechanical components into editable parametric CAD models via non-contact 3D blue-light lasers.',
      deliverables: ['0.01mm Point Cloud Capture', 'Parametric STEP Files', 'Nominal-to-Actual Deviation Maps'],
      color: 'amber',
    },
    {
      id: 'post-processing',
      title: 'Automated Post-Processing & CNC Surface Finishing',
      icon: Wrench,
      badge: 'SURFACE FINISH',
      description:
        'Precision post-machining, HIP thermal stress relief, chemical vapor smoothing, and anodized protective coatings.',
      deliverables: ['Ra 0.4µm Surface Polishing', 'Hot Isostatic Pressing (HIP)', 'Custom Anodizing & Electropolishing'],
      color: 'cyan',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-industrial-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ADDITIVE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            INDUSTRIAL <span className="text-cyan-400">SERVICES</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            End-to-end additive manufacturing engineered for aerospace, defense, and high-performance industrial applications.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((svc) => {
            const Icon = svc.icon;
            const isCyan = svc.color === 'cyan';
            return (
              <div
                key={svc.id}
                className="p-8 rounded-2xl bg-industrial-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-industrial-900 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isCyan
                          ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                          : 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-black/50 border border-slate-800 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">{svc.description}</p>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      // DELIVERABLES:
                    </div>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center gap-2 text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>EXPLORE TECHNICAL SPECS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
