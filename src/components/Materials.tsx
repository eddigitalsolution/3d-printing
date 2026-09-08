import React, { useState } from 'react';
import { Layers, ShieldCheck, Thermometer, Gauge, Zap, CheckCircle2 } from 'lucide-react';

export const Materials: React.FC = () => {
  const materialsData = [
    {
      id: 'titanium',
      name: 'Titanium Ti-6Al-4V (Grade 5)',
      category: 'METALS (DMLS)',
      density: '4.43 g/cm³',
      tensileStrength: '1,150 MPa',
      tempResistance: '400°C',
      hardness: '36 HRC',
      description: 'Aerospace-grade titanium alloy offering supreme strength-to-weight ratio, exceptional corrosion resistance, and bio-compatibility.',
      applications: ['Jet Engine Turbines', 'Orthopedic Implants', 'Racecar Exhaust Manifolds'],
      color: '#00f0ff',
      strengthMeter: 98,
      tempMeter: 92,
    },
    {
      id: 'carbon-petg',
      name: 'Carbon Fiber Reinforced PETG',
      category: 'COMPOSITES (FDM)',
      density: '1.34 g/cm³',
      tensileStrength: '85 MPa',
      tempResistance: '80°C',
      hardness: '82 Shore D',
      description: 'Engineering thermoplastic chopped with 20% high-modulus carbon fibers. Delivers high dimensional stability and ultra-matte black finish.',
      applications: ['Robotic End-Effectors', 'Assembly Jigs & Fixtures', 'Drone Frames'],
      color: '#ff6b00',
      strengthMeter: 75,
      tempMeter: 60,
    },
    {
      id: 'peek',
      name: 'Medical Grade PEEK (Polyetherketone)',
      category: 'HIGH-TEMP POLYMER',
      density: '1.30 g/cm³',
      tensileStrength: '100 MPa',
      tempResistance: '260°C',
      hardness: '85 Shore D',
      description: 'Ultra-performance semi-crystalline polymer capable of replacing metals in extreme chemical and high-temperature environments.',
      applications: ['Spinal Fusion Cages', 'Chemical Pump Valves', 'Spacecraft Wire Harness Insulators'],
      color: '#38bdf8',
      strengthMeter: 88,
      tempMeter: 95,
    },
    {
      id: 'resin',
      name: 'High-Detail Optically Clear Resin',
      category: 'PHOTOPOLYMER (SLA)',
      density: '1.18 g/cm³',
      tensileStrength: '65 MPa',
      tempResistance: '50°C',
      hardness: '83 Shore D',
      description: 'Ultra-high resolution photopolymer yielding glass-like transparency after post-polishing. Perfect for fluidic channels.',
      applications: ['Microfluidic Chips', 'Optical Lenses', 'Investment Casting Models'],
      color: '#00f0ff',
      strengthMeter: 60,
      tempMeter: 45,
    },
    {
      id: 'tpu',
      name: 'Industrial Flexible TPU 95A',
      category: 'ELASTOMER (SLS/FDM)',
      density: '1.21 g/cm³',
      tensileStrength: '40 MPa',
      tempResistance: '90°C',
      hardness: '95 Shore A',
      description: 'High-elongation rubber-like thermoplastic polyurethane with tear resistance and impact dampening properties.',
      applications: ['Gaskets & Seals', 'Vibration Dampeners', 'Custom Orthotic Soles'],
      color: '#fbbf24',
      strengthMeter: 50,
      tempMeter: 55,
    },
  ];

  const [selectedMat, setSelectedMat] = useState(materialsData[0]);

  return (
    <section id="materials" className="py-24 relative bg-industrial-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-950 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>CERTIFIED MATERIAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            INDUSTRIAL <span className="text-cyan-400">MATERIALS</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Inspect real-time physical properties of space-grade metals, composites, and biocompatible polymers.
          </p>
        </div>

        {/* Material Selection Grid & Property Inspector Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Material Selector List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {materialsData.map((mat) => {
              const isSelected = selectedMat.id === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMat(mat)}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between group focus:outline-none ${
                    isSelected
                      ? 'bg-industrial-950 border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                      : 'bg-industrial-950/60 border border-slate-800 hover:border-slate-700 hover:bg-industrial-950'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: mat.color }}
                    />
                    <div>
                      <span className="font-mono text-[10px] text-cyan-400 tracking-wider block uppercase">
                        {mat.category}
                      </span>
                      <h4 className="font-display font-bold text-base text-slate-100">{mat.name}</h4>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-400 group-hover:text-slate-200">
                    {mat.tensileStrength}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Material Telemetry Inspector (7 Cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-industrial-950 border border-slate-800 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 font-mono text-xs text-cyan-400 uppercase">
                  {selectedMat.category}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-100 mt-2">{selectedMat.name}</h3>
              </div>
              <div className="text-right font-mono">
                <span className="text-[10px] text-slate-400 block uppercase">DENSITY</span>
                <span className="text-lg font-bold text-slate-200">{selectedMat.density}</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-slate-300 text-sm leading-relaxed">{selectedMat.description}</p>

            {/* Physical Telemetry Gauges */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-industrial-900/80 border border-slate-800">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Gauge className="w-4 h-4 text-cyan-400" />
                    TENSILE STRENGTH
                  </span>
                  <span className="text-cyan-400 font-bold">{selectedMat.tensileStrength}</span>
                </div>
                <div className="w-full h-2 bg-industrial-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-500"
                    style={{ width: `${selectedMat.strengthMeter}%` }}
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-industrial-900/80 border border-slate-800">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Thermometer className="w-4 h-4 text-amber-500" />
                    HEAT DEFLECTION
                  </span>
                  <span className="text-amber-500 font-bold">{selectedMat.tempResistance}</span>
                </div>
                <div className="w-full h-2 bg-industrial-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${selectedMat.tempMeter}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Recommended Applications */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block mb-3">
                // TARGET INDUSTRIAL APPLICATIONS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedMat.applications.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-industrial-900 border border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
