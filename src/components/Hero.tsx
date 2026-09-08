import React from 'react';
import { PipelineStage } from './ThreeStage/PipelineStage';
import { ArrowRight, Box, ShieldCheck, Zap, Layers, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplorePipeline: () => void;
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePipeline, onOpenQuote }) => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Dark Industrial Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      {/* Cyberpunk Glow Background Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Telemetry Controls (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Industrial Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-industrial-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>PRECISION ADDITIVE MANUFACTURING LAB</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-slate-100 uppercase leading-[1.05]">
                FROM PIXEL TO <br />
                <span className="text-cyan-400 glow-text-cyan">OBJECT.</span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-amber-500 font-semibold tracking-wider uppercase">
                // ADVANCED INDUSTRIAL 3D PRINTING & GENERATIVE METALS
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Transform digital CAD geometry into mission-critical aerospace alloys, carbon fiber composites, and bio-compatible resins with micron-level dimensional tolerance.
            </p>

            {/* Key Telemetry Specs Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 rounded-xl bg-industrial-900/80 border border-slate-800">
                <div className="font-mono text-[10px] text-slate-400 uppercase">Tolerance</div>
                <div className="font-display font-extrabold text-lg text-cyan-400 mt-0.5">±0.02mm</div>
              </div>
              <div className="p-3 rounded-xl bg-industrial-900/80 border border-slate-800">
                <div className="font-mono text-[10px] text-slate-400 uppercase">Materials</div>
                <div className="font-display font-extrabold text-lg text-slate-100 mt-0.5">45+ Alloys</div>
              </div>
              <div className="p-3 rounded-xl bg-industrial-900/80 border border-slate-800">
                <div className="font-mono text-[10px] text-slate-400 uppercase">Turnaround</div>
                <div className="font-display font-extrabold text-lg text-amber-500 mt-0.5">&lt; 24 Hours</div>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                onClick={onOpenQuote}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-industrial-950 font-display font-extrabold text-sm tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] hover:scale-[1.02] flex items-center gap-3 group"
              >
                <span>CONFIGURE INSTANT QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pipeline"
                onClick={onExplorePipeline}
                className="px-6 py-4 rounded-xl bg-industrial-900/90 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-400 font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>INTERACTIVE 3D PIPELINE</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Large 3D Product Interactive Viewport (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-square max-w-[540px] mx-auto">
              <PipelineStage stage="object" materialType="titanium" enableFloat={true} />

              {/* Holographic Industrial Frame Markers */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#pipeline"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors font-mono text-[11px] tracking-widest uppercase"
          >
            <span>SCROLL TO EXPLORE PIPELINE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};
