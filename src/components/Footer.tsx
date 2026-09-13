import React from 'react';
import { Box, Activity, ShieldCheck, ArrowUp, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-industrial-950 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-industrial-900 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Box className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-xl text-slate-100 tracking-wider">
                NEXUS <span className="text-cyan-400">3D</span>
              </span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Industrial additive manufacturing laboratory specializing in space-grade titanium alloys, high-temperature polymers, and generative topology optimization.
            </p>

            {/* System Online Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-industrial-900 border border-slate-800 font-mono text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>FACILITY STATUS: ONLINE (24/7 PRINTING)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest mb-4">// NAVIGATION</h4>
            <ul className="space-y-2.5 font-mono text-xs text-slate-400">
              <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">3D PIPELINE</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">SERVICES</a></li>
              <li><a href="#materials" className="hover:text-cyan-400 transition-colors">MATERIALS MATRIX</a></li>
              <li><a href="#technology" className="hover:text-cyan-400 transition-colors">TECHNOLOGY</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">PORTFOLIO</a></li>
            </ul>
          </div>

          {/* Standards & Certifications */}
          <div>
            <h4 className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest mb-4">// CERTIFICATIONS</h4>
            <ul className="space-y-2.5 font-mono text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2015</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>AS9100D AEROSPACE</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 13485 MEDICAL</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ITAR REGISTERED</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest mb-4">// LAB LOCATION</h4>
            <div className="space-y-2 font-mono text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>NEXUS ADDITIVE LAB 01<br />SECTOR 7 INDUSTRIAL PARK</span>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>eng@nexus3d.tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NEXUS 3D INC. ALL RIGHTS RESERVED. FROM PIXEL TO OBJECT.
          </div>

          <button
            id="footer-scroll-top-btn"
            name="footerScrollTopBtn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-industrial-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all outline-none focus:outline-none focus:ring-0"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
