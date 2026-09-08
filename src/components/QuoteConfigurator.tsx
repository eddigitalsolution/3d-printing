import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, FileText, Calculator, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const QuoteConfigurator: React.FC = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState('turbine_housing_v4.step');
  const [fileSize, setFileSize] = useState('14.2 MB');
  
  // Config state
  const [selectedMaterial, setSelectedMaterial] = useState('Titanium Ti-6Al-4V');
  const [infill, setInfill] = useState(100);
  const [quantity, setQuantity] = useState(5);
  const [finish, setFinish] = useState('CNC Precision Machined');
  const [leadTime, setLeadTime] = useState('Standard (3-5 Days)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Material cost multipliers
  const materialPrices: Record<string, number> = {
    'Titanium Ti-6Al-4V': 180,
    'Carbon Fiber PETG': 45,
    'Medical PEEK': 130,
    'High-Detail Clear Resin': 55,
    'Flexible TPU 95A': 35,
  };

  const baseUnitCost = (materialPrices[selectedMaterial] || 100) * (0.4 + (infill / 100) * 0.6);
  const finishCost = finish.includes('CNC') ? 35 : finish.includes('Bead') ? 15 : 0;
  const unitPrice = Math.round(baseUnitCost + finishCost);
  const totalPrice = unitPrice * quantity;

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFileSize(`${(file.size / (1024 * 1024)).toFixed(1)} MB`);
      setFileUploaded(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 relative bg-industrial-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-900 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT DFM & COST CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-100 uppercase">
            CONFIGURATOR & <span className="text-cyan-400">INSTANT QUOTE</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Upload your CAD file to calculate real-time production costs, lead times, and DFM validation.
          </p>
        </div>

        {/* Configurator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive File Upload & Material Configurator (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. CAD Upload Dropzone */}
            <div className="p-8 rounded-2xl bg-industrial-900/80 border-2 border-dashed border-cyan-500/30 hover:border-cyan-400 transition-all text-center relative group">
              <input
                type="file"
                accept=".step,.stl,.obj,.igs,.x_t"
                onChange={handleSimulatedUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
              <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8" />
                </div>

                {fileUploaded ? (
                  <div className="flex items-center gap-3 bg-industrial-950 px-4 py-2 rounded-xl border border-cyan-500/40">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <div className="text-left font-mono text-xs">
                      <span className="text-slate-100 font-bold block">{fileName}</span>
                      <span className="text-slate-400">{fileSize} • DFM PASS</span>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 ml-2" />
                  </div>
                ) : (
                  <div>
                    <div className="font-display font-bold text-lg text-slate-100">
                      DROP 3D CAD FILE HERE OR <span className="text-cyan-400 underline">BROWSE</span>
                    </div>
                    <div className="font-mono text-xs text-slate-400 mt-1">
                      SUPPORTED FORMATS: .STEP, .STL, .OBJ, .IGES (MAX 250MB)
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 2. Configuration Options */}
            <div className="p-8 rounded-2xl bg-industrial-900/60 border border-slate-800 space-y-6">
              <h3 className="font-display font-bold text-lg text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                PART MANUFACTURING PARAMETERS
              </h3>

              {/* Material Dropdown */}
              <div>
                <label className="block font-mono text-xs text-slate-400 uppercase mb-2">
                  SELECT MATERIAL ALLOY
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full p-3.5 rounded-xl bg-industrial-950 border border-slate-800 text-slate-200 font-mono text-sm focus:border-cyan-400 focus:outline-none"
                >
                  {Object.keys(materialPrices).map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Infill Percentage Slider */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-slate-400">INFILL DENSITY / SOLIDITY:</span>
                  <span className="text-cyan-400 font-bold">{infill}% SOLID</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={infill}
                  onChange={(e) => setInfill(parseInt(e.target.value))}
                  className="w-full h-2 bg-industrial-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Quantity & Surface Finish */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-slate-400 uppercase mb-2">QUANTITY (UNITS)</label>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full p-3.5 rounded-xl bg-industrial-950 border border-slate-800 text-slate-200 font-mono text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-400 uppercase mb-2">POST-FINISH TYPE</label>
                  <select
                    value={finish}
                    onChange={(e) => setFinish(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-industrial-950 border border-slate-800 text-slate-200 font-mono text-sm focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="As-Printed Standard">As-Printed Standard (Ra 3.2µm)</option>
                    <option value="CNC Precision Machined">CNC Precision Machined (Ra 0.8µm)</option>
                    <option value="Bead Blasted Satin">Bead Blasted Satin Finish</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time Pricing Summary & Order Submission (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-industrial-950 border border-slate-800 shadow-2xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="font-mono text-xs text-cyan-400 tracking-widest block uppercase">
                    LIVE ESTIMATION SUMMARY
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-100 mt-1">ORDER BREAKDOWN</h3>
                </div>
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>

              {/* Price Calculation Matrix */}
              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">MATERIAL ({selectedMaterial.split(' ')[0]}):</span>
                  <span className="text-slate-200">${baseUnitCost.toFixed(2)} / unit</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">FINISH ({finish.split(' ')[0]}):</span>
                  <span className="text-slate-200">+${finishCost.toFixed(2)} / unit</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">ESTIMATED LEAD TIME:</span>
                  <span className="text-amber-500 font-bold">3-4 BUSINESS DAYS</span>
                </div>

                <div className="pt-4 flex justify-between items-baseline">
                  <div>
                    <span className="text-slate-400 text-xs block">ESTIMATED TOTAL:</span>
                    <span className="text-[10px] text-slate-500">EXCL. TAX & SHIPPING</span>
                  </div>
                  <div className="text-right">
                    <span className="font-display font-extrabold text-3xl text-cyan-400 glow-text-cyan">
                      ${totalPrice.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-slate-400 block font-mono">(${unitPrice}/unit)</span>
                  </div>
                </div>
              </div>

              {/* Order Form */}
              {isSubmitted ? (
                <div className="mt-8 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <div className="font-display font-bold text-lg text-slate-100">QUOTE SUBMITTED!</div>
                  <p className="text-xs text-slate-300 font-mono mt-1">
                    Order Ref: #NEX-{Math.floor(100000 + Math.random() * 900000)}
                    <br />
                    Our additive engineers will review your CAD DFM within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your engineer work email"
                    className="w-full p-3.5 rounded-xl bg-industrial-900 border border-slate-800 text-slate-200 font-mono text-xs focus:border-cyan-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-industrial-950 font-display font-extrabold text-xs tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2 group"
                  >
                    <span>SUBMIT FOR OFFICIAL DFM REVIEW</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                256-BIT ENCRYPTED CAD TRANSFER
              </span>
              <span>NDA AUTOMATIC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
