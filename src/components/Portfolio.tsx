import React, { useState } from 'react';
import { Box, Eye, Layers, ShieldCheck, Tag, ExternalLink, X, Cpu, Zap, Activity } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  material: string;
  precision: string;
  weight: string;
  buildTime: string;
  description: string;
  wireframeColor: string;
  image?: string;
  svgType: 'impeller' | 'manifold' | 'medical' | 'microfluidic' | 'gripper' | 'drone';
}

export const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      id: 'turbine-impeller',
      title: 'Aerospace Impeller Nozzle',
      category: 'METALS (DMLS)',
      material: 'Titanium Ti-6Al-4V',
      precision: '±0.015 mm',
      weight: '420 grams',
      buildTime: '14 Hours',
      description: 'Generatively optimized turbine impeller designed for high-pressure cryogenic propellant pumps.',
      wireframeColor: '#00f0ff',
      image: '/images/portfolio/aerospace-impeller.jpg',
      svgType: 'impeller',
    },
    {
      id: 'carbon-manifold',
      title: 'F1 Intake Manifold Plenum',
      category: 'COMPOSITES',
      material: 'Carbon Fiber PETG',
      precision: '±0.05 mm',
      weight: '680 grams',
      buildTime: '9 Hours',
      description: 'Ultra-lightweight engine air intake plenum with smooth internal fluidic wall curvature.',
      wireframeColor: '#ff6b00',
      image: '/images/portfolio/f1-intake-manifold.jpg',
      svgType: 'manifold',
    },
    {
      id: 'medical-cage',
      title: 'Porous Spinal Implant Cage',
      category: 'MEDICAL',
      material: 'Medical PEEK',
      precision: '±0.01 mm',
      weight: '18 grams',
      buildTime: '3 Hours',
      description: 'Patient-specific bio-compatible spinal cage with engineered 60% porosity for natural bone ingrowth.',
      wireframeColor: '#38bdf8',
      image: '/images/portfolio/porous-spinal-implant.jpg',
      svgType: 'medical',
    },
    {
      id: 'micro-fluidic-chip',
      title: 'Optically Clear Microfluidic Chip',
      category: 'PHOTOPOLYMER',
      material: 'Clear Resin (SLA)',
      precision: '±0.005 mm',
      weight: '8 grams',
      buildTime: '2.5 Hours',
      description: 'Lab-on-a-chip diagnostic array with 150µm internal fluid conduits polished to optical clarity.',
      wireframeColor: '#00f0ff',
      image: '/images/portfolio/microfluidic-chip.jpg',
      svgType: 'microfluidic',
    },
    {
      id: 'robot-gripper',
      title: 'Conformally Cooled Robot Gripper',
      category: 'TOOLING',
      material: 'Inconel 718 Metal',
      precision: '±0.02 mm',
      weight: '1,120 grams',
      buildTime: '22 Hours',
      description: 'Heavy-duty automotive assembly end-effector containing internal spiral water-cooling lines.',
      wireframeColor: '#fbbf24',
      image: '/images/portfolio/robot-gripper.jpg',
      svgType: 'gripper',
    },
    {
      id: 'drone-chassis',
      title: 'Monocoque UAV Drone Frame',
      category: 'COMPOSITES',
      material: 'Carbon Nylon PA12',
      precision: '±0.04 mm',
      weight: '340 grams',
      buildTime: '7.5 Hours',
      description: 'Single-piece unibody drone chassis integrating motor mounts, battery bay, and antenna ports.',
      wireframeColor: '#ff6b00',
      image: '/images/portfolio/drone-frame.jpg',
      svgType: 'drone',
    },
  ];

  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeFilter === 'ALL'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.includes(activeFilter));

  const renderCADGraphic = (type: PortfolioItem['svgType'], color: string) => {
    switch (type) {
      case 'impeller':
        return (
          <svg className="w-28 h-28 text-cyan-400 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="40" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="12" strokeWidth="2" fill="#0f172a" />
            <path d="M50 10 C65 25, 65 35, 50 38" strokeWidth="2" strokeLinecap="round" />
            <path d="M90 50 C75 65, 65 65, 62 50" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 90 C35 75, 35 65, 50 62" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 50 C25 35, 35 35, 38 50" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="50" r="4" fill="#00f0ff" className="animate-ping" />
          </svg>
        );
      case 'manifold':
        return (
          <svg className="w-28 h-28 text-orange-500/90 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <defs>
              <pattern id="carbon-weave" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M0 5h10M5 0v10" stroke="#ff6b00" strokeWidth="0.5" strokeOpacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#carbon-weave)" opacity="0.4" />
            <path d="M20 75 C20 40, 40 25, 80 25 M80 25 L70 15 M80 25 L70 35" strokeWidth="2.5" strokeDasharray="3 3" />
            <path d="M25 80 C25 45, 45 30, 85 30" strokeWidth="1.5" strokeOpacity="0.6" />
            <circle cx="20" cy="75" r="8" strokeWidth="2" fill="#0f172a" />
            <circle cx="80" cy="25" r="6" strokeWidth="2" fill="#0f172a" />
            <path d="M45 50 C50 40, 60 35, 70 35" stroke="#ff8c00" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        );
      case 'medical':
        return (
          <svg className="w-28 h-28 text-sky-400 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="25" y="25" width="50" height="50" rx="8" strokeWidth="2" strokeDasharray="4 2" />
            <rect x="35" y="35" width="30" height="30" rx="4" strokeWidth="1.5" strokeOpacity="0.7" />
            <path d="M25 25 L75 75 M75 25 L25 75" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="50" cy="50" r="12" strokeWidth="2" stroke="#38bdf8" fill="#0f172a" />
            <circle cx="50" cy="50" r="4" fill="#38bdf8" className="animate-ping" />
            <circle cx="30" cy="30" r="2" fill="#38bdf8" />
            <circle cx="70" cy="30" r="2" fill="#38bdf8" />
            <circle cx="30" cy="70" r="2" fill="#38bdf8" />
            <circle cx="70" cy="70" r="2" fill="#38bdf8" />
          </svg>
        );
      case 'microfluidic':
        return (
          <svg className="w-28 h-28 text-cyan-300 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="15" y="30" width="70" height="40" rx="4" strokeWidth="2" fill="#0284c7" fillOpacity="0.1" />
            <path d="M20 50 H40 V40 H60 V60 H80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="50" r="4" fill="#00f0ff" />
            <circle cx="80" cy="60" r="4" fill="#00f0ff" />
            <circle cx="50" cy="40" r="2.5" fill="#38bdf8" />
            <circle cx="50" cy="60" r="2.5" fill="#38bdf8" />
            <line x1="10" y1="20" x2="90" y2="20" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="10" y1="80" x2="90" y2="80" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        );
      case 'gripper':
        return (
          <svg className="w-28 h-28 text-amber-400 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M30 80 L30 45 L45 30 L50 30 L55 30 L70 45 L70 80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 45 L15 35 V20 H30 V35" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M70 45 L85 35 V20 H70 V35" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M40 75 C45 60, 55 60, 60 75" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" />
            <circle cx="50" cy="30" r="4" fill="#fbbf24" />
          </svg>
        );
      case 'drone':
        return (
          <svg className="w-28 h-28 text-orange-400 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="14" strokeWidth="2" fill="#0f172a" />
            <line x1="25" y1="35" x2="10" y2="20" strokeWidth="2.5" />
            <line x1="75" y1="35" x2="90" y2="20" strokeWidth="2.5" />
            <line x1="25" y1="65" x2="10" y2="80" strokeWidth="2.5" />
            <line x1="75" y1="65" x2="90" y2="80" strokeWidth="2.5" />
            <circle cx="10" cy="20" r="5" stroke="#ff6b00" strokeWidth="1.5" />
            <circle cx="90" cy="20" r="5" stroke="#ff6b00" strokeWidth="1.5" />
            <circle cx="10" cy="80" r="5" stroke="#ff6b00" strokeWidth="1.5" />
            <circle cx="90" cy="80" r="5" stroke="#ff6b00" strokeWidth="1.5" />
          </svg>
        );
      default:
        return <Box className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <section id="portfolio" className="py-24 relative bg-industrial-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Box className="w-3.5 h-3.5" />
            <span>ADDITIVE ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            PHYSICAL <span className="text-cyan-400">PORTFOLIO</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Explore sample production components engineered and printed in our additive facility.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2 font-mono text-xs">
            {['ALL', 'METALS', 'COMPOSITES', 'MEDICAL', 'PHOTOPOLYMER', 'TOOLING'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-500 text-industrial-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-industrial-900 border border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="rounded-2xl bg-industrial-900/60 border border-slate-800 hover:border-cyan-500/50 transition-all hover:bg-industrial-900 group flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Graphic Wireframe Mock Preview Banner / Photo */}
              <div className="h-52 bg-industrial-950 relative flex items-center justify-center p-4 border-b border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                
                {item.image ? (
                  <div className="w-full h-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent opacity-80" />
                  </div>
                ) : (
                  <div className="w-36 h-36 rounded-full border border-slate-800 bg-industrial-900/80 flex items-center justify-center relative shadow-inner group-hover:border-cyan-500/40 transition-colors">
                    {renderCADGraphic(item.svgType, item.wireframeColor)}
                  </div>
                )}

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-slate-700/80 font-mono text-[10px] text-cyan-400 font-semibold tracking-wider">
                  {item.category}
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-slate-700/80 font-mono text-[10px] text-slate-300">
                  TOL: <span className="text-cyan-400">{item.precision}</span>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-cyan-500 text-industrial-950 p-1.5 rounded-full shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                  </h3>
                  <p className="mt-2 text-slate-400 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                </div>

                {/* Specs Grid */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 font-mono text-[11px]">
                  <div className="bg-industrial-950 p-2 rounded border border-slate-800/60">
                    <span className="text-[9px] text-slate-500 block">MATERIAL</span>
                    <span className="text-slate-200 truncate block font-medium">{item.material.split(' ')[0]}</span>
                  </div>
                  <div className="bg-industrial-950 p-2 rounded border border-slate-800/60">
                    <span className="text-[9px] text-slate-500 block">WEIGHT</span>
                    <span className="text-slate-200 block font-medium">{item.weight}</span>
                  </div>
                  <div className="bg-industrial-950 p-2 rounded border border-slate-800/60">
                    <span className="text-[9px] text-slate-500 block">PRINT TIME</span>
                    <span className="text-cyan-400 block font-medium">{item.buildTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Inspector Detail View */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-industrial-900 border border-slate-700 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex justify-between items-start bg-industrial-950 relative">
              <div>
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider uppercase font-semibold">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-display font-extrabold text-slate-100 mt-2">
                  {selectedItem.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-lg bg-industrial-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Graphic / Image Banner */}
              <div className="h-64 bg-industrial-950 rounded-xl relative flex items-center justify-center border border-slate-800 overflow-hidden">
                {selectedItem.image ? (
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-44 h-44 rounded-full border border-slate-800 bg-industrial-900 flex items-center justify-center">
                    {renderCADGraphic(selectedItem.svgType, selectedItem.wireframeColor)}
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">TECHNICAL SPECIFICATIONS</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedItem.description}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="bg-industrial-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">Material</span>
                  <span className="text-slate-200 font-semibold">{selectedItem.material}</span>
                </div>
                <div className="bg-industrial-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">Tolerance</span>
                  <span className="text-cyan-400 font-semibold">{selectedItem.precision}</span>
                </div>
                <div className="bg-industrial-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">Component Mass</span>
                  <span className="text-slate-200 font-semibold">{selectedItem.weight}</span>
                </div>
                <div className="bg-industrial-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-500 block uppercase">Build Cycle</span>
                  <span className="text-cyan-400 font-semibold">{selectedItem.buildTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-industrial-950 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2.5 rounded-xl bg-industrial-900 border border-slate-700 text-slate-300 hover:bg-slate-800 font-mono text-xs transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

