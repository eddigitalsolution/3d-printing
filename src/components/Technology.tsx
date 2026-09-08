import React from 'react';
import { Cpu, Zap, Eye, Box, Check } from 'lucide-react';

export const Technology: React.FC = () => {
  const techList = [
    {
      code: 'DMLS / EBM',
      name: 'Direct Metal Laser Sintering',
      icon: Zap,
      description: 'Fiber laser melting metal micro-powders under inert argon. Produces fully dense metal components for extreme environments.',
      specs: {
        buildVolume: '400 x 400 x 400 mm',
        layerThickness: '20 – 60 µm',
        laserPower: '400W Yb-Fiber',
        precision: '±0.02 mm',
      },
    },
    {
      code: 'SLS',
      name: 'Selective Laser Sintering',
      icon: Cpu,
      description: 'CO2 laser sintering nylon and composite powders without requiring support structures. Ideal for complex geometries.',
      specs: {
        buildVolume: '550 x 550 x 750 mm',
        layerThickness: '60 – 120 µm',
        laserPower: '100W CO2',
        precision: '±0.05 mm',
      },
    },
    {
      code: 'SLA / DLP',
      name: 'Stereolithography & UV DLP',
      icon: Eye,
      description: 'UV laser curing liquid photopolymer resins. Unmatched optical transparency, micro-fluidic precision, and smooth finish.',
      specs: {
        buildVolume: '335 x 200 x 300 mm',
        layerThickness: '10 – 50 µm',
        laserWavelength: '405 nm UV',
        precision: '±0.01 mm',
      },
    },
    {
      code: 'FDM Industrial',
      name: 'Fused Deposition Modeling',
      icon: Box,
      description: 'High-temperature dual extrusion printing engineered thermoplastics (PEEK, ULTEM, Carbon PETG) with soluble supports.',
      specs: {
        buildVolume: '900 x 600 x 900 mm',
        layerThickness: '100 – 300 µm',
        nozzleTemp: 'Up to 450°C',
        precision: '±0.1 mm',
      },
    },
  ];

  return (
    <section id="technology" className="py-24 relative bg-industrial-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>ADDITIVE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            PRINTING <span className="text-cyan-400">TECHNOLOGIES</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Multi-axis industrial hardware platforms engineered for repeatable production quality.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techList.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.code}
                className="p-8 rounded-2xl bg-industrial-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-industrial-900 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-cyan-400 font-bold tracking-widest block uppercase">
                        {tech.code}
                      </span>
                      <h3 className="font-display font-bold text-xl text-slate-100">{tech.name}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">{tech.description}</p>

                {/* Technical Specs Breakdown */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 font-mono text-xs">
                  {Object.entries(tech.specs).map(([key, val]) => (
                    <div key={key} className="p-3 rounded-lg bg-industrial-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 uppercase block">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-bold text-slate-200 mt-0.5 block truncate">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
