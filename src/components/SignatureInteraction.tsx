import React, { useState, useEffect } from 'react';
import { PipelineStage } from './ThreeStage/PipelineStage';
import { PipelineStageType } from './ThreeStage/IndustrialModel';
import { Box, Layers, Printer, ShieldCheck, Play, Pause, RotateCcw, Cpu, Zap, Activity } from 'lucide-react';

export const SignatureInteraction: React.FC = () => {
  const [activeStage, setActiveStage] = useState<PipelineStageType>('model');
  const [layerProgress, setLayerProgress] = useState(0.65);
  const [material, setMaterial] = useState<'titanium' | 'carbon' | 'resin'>('titanium');
  const [isAutoLoop, setIsAutoLoop] = useState(false);
  const [gcodeLine, setGcodeLine] = useState('G1 X124.52 Y88.19 Z12.45 E0.041');

  // Auto pipeline stage looper
  useEffect(() => {
    if (!isAutoLoop) return;
    const stages: PipelineStageType[] = ['model', 'slicing', 'printing', 'object'];
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const nextIndex = (stages.indexOf(prev) + 1) % stages.length;
        return stages[nextIndex];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoLoop]);

  // Simulate G-code stream update
  useEffect(() => {
    const interval = setInterval(() => {
      const x = (Math.random() * 150 + 10).toFixed(2);
      const y = (Math.random() * 150 + 10).toFixed(2);
      const z = (layerProgress * 180).toFixed(2);
      const e = (Math.random() * 0.08).toFixed(4);
      setGcodeLine(`G1 X${x} Y${y} Z${z} E${e}`);
    }, 600);
    return () => clearInterval(interval);
  }, [layerProgress]);

  const stagesInfo = [
    {
      id: 'model' as PipelineStageType,
      label: '1. 3D MODEL',
      subtitle: 'Digital CAD Vector Mesh',
      icon: Box,
      description: 'Generative CAD geometry parsed into vector wireframe vertices and boundary point cloud nodes.',
      stats: { vertices: '142,850', polygons: '284,100', fileFormat: '.STEP / .STL' },
    },
    {
      id: 'slicing' as PipelineStageType,
      label: '2. SLICING',
      subtitle: 'Laser Cross-Section Pathing',
      icon: Layers,
      description: 'Geometric decomposition into 0.02mm micro-thin horizontal planes for high-resolution laser pathing.',
      stats: { layers: '1,420', sliceThickness: '20µm', scanSpeed: '7,500 mm/s' },
    },
    {
      id: 'printing' as PipelineStageType,
      label: '3. PRINTING',
      subtitle: 'Layer-by-Layer Additive Build',
      icon: Printer,
      description: 'Selective Laser Sintering (DMLS/SLS) fusing micro-powders layer by layer under inert argon atmosphere.',
      stats: { laserPower: '400W', bedTemp: '180°C', oxygenContent: '< 0.1%' },
    },
    {
      id: 'object' as PipelineStageType,
      label: '4. OBJECT',
      subtitle: 'Finished Physical Component',
      icon: ShieldCheck,
      description: 'Post-cured, stress-relieved aerospace component with ±0.02mm dimensional accuracy.',
      stats: { density: '99.9%', tensileStrength: '1,150 MPa', finish: 'Ra 0.8µm' },
    },
  ];

  const currentStageInfo = stagesInfo.find((s) => s.id === activeStage)!;

  return (
    <section id="pipeline" className="py-24 relative bg-industrial-900 border-y border-slate-800">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>SIGNATURE INTERACTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            FROM PIXEL TO <span className="text-cyan-400 glow-text-cyan">OBJECT</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience the complete digital-to-physical additive manufacturing transformation pipeline in real-time 3D viewport.
          </p>
        </div>

        {/* 4-Stage Interactive Pipeline Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {stagesInfo.map((stg, index) => {
            const Icon = stg.icon;
            const isActive = activeStage === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg.id)}
                className={`p-4 rounded-xl text-left transition-all relative overflow-hidden group focus:outline-none ${
                  isActive
                    ? 'bg-industrial-950 border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                    : 'bg-industrial-950/60 border border-slate-800 hover:border-slate-700 hover:bg-industrial-950'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}>
                    0{index + 1}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-industrial-900 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className={`font-display font-bold text-sm sm:text-base tracking-wide ${isActive ? 'text-slate-100' : 'text-slate-300'}`}>
                  {stg.label.split('.')[1]}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 truncate">{stg.subtitle}</div>

                {/* Bottom Active Progress Line */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main 3D Stage & Control Console Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: 3D R3F Interactive Viewport (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <PipelineStage
              stage={activeStage}
              layerHeightProgress={layerProgress}
              materialType={material}
            />

            {/* Viewport Control Bar */}
            <div className="mt-4 p-4 rounded-xl bg-industrial-950/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoLoop(!isAutoLoop)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all ${
                    isAutoLoop
                      ? 'bg-amber-500/20 border border-amber-500/40 text-amber-400'
                      : 'bg-industrial-900 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {isAutoLoop ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isAutoLoop ? 'PAUSE PIPELINE LOOP' : 'AUTO CYCLE DEMO'}</span>
                </button>
              </div>

              {/* Material Selector (Active when stage is object) */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-slate-400">MATERIAL:</span>
                <div className="flex items-center gap-1 bg-industrial-900 p-1 rounded-md border border-slate-800">
                  {(['titanium', 'carbon', 'resin'] as const).map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setMaterial(mat)}
                      className={`px-2.5 py-1 rounded text-[11px] uppercase transition-all ${
                        material === mat
                          ? 'bg-cyan-500 text-industrial-950 font-bold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry & G-Code Telemetry Console (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Stage Detailed Breakdown Card */}
            <div className="p-6 rounded-2xl bg-industrial-950 border border-slate-800 shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <currentStageInfo.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-cyan-400 tracking-widest block uppercase">
                        STAGE DETAILED MONITOR
                      </span>
                      <h3 className="font-display font-bold text-xl text-slate-100">{currentStageInfo.label}</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                    ACTIVE
                  </span>
                </div>

                <p className="mt-4 text-slate-300 text-sm leading-relaxed">{currentStageInfo.description}</p>

                {/* Stage Specs Metric Grid */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {Object.entries(currentStageInfo.stats).map(([key, value]) => (
                    <div key={key} className="p-3 rounded-lg bg-industrial-900/80 border border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                      <div className="font-mono font-bold text-sm text-cyan-400 mt-1 truncate">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Layer Height Custom Slider (For Slicing / Printing Stage) */}
              {(activeStage === 'printing' || activeStage === 'slicing') && (
                <div className="mt-6 p-4 rounded-xl bg-industrial-900/60 border border-cyan-500/20">
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      BUILD LAYER HEIGHT:
                    </span>
                    <span className="text-cyan-400 font-bold">{(layerProgress * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.01"
                    value={layerProgress}
                    onChange={(e) => setLayerProgress(parseFloat(e.target.value))}
                    className="w-full h-2 bg-industrial-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              )}

              {/* Live Industrial G-Code & Sensor Stream */}
              <div className="mt-6 p-4 rounded-xl bg-black/80 border border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/60 text-[11px]">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Cpu className="w-3.5 h-3.5 animate-spin" />
                    SYSTEM TELEMETRY
                  </span>
                  <span>BUS: RS-485</span>
                </div>
                <div className="mt-3 space-y-1.5">
                  <div className="text-emerald-400 truncate">{gcodeLine}</div>
                  <div className="text-slate-400 text-[11px] flex justify-between">
                    <span>LASER OUTPUT: 350W</span>
                    <span>BED TEMP: 110°C</span>
                  </div>
                  <div className="text-slate-400 text-[11px] flex justify-between">
                    <span>NOZZLE VELOCITY: 120mm/s</span>
                    <span>EXTRUSION: 99.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
