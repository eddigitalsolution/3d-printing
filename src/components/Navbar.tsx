import React, { useState, useEffect, useRef } from 'react';
import { Box, Layers, Cpu, ShieldCheck, Menu, X, ArrowRight, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const isClickScrollingRef = useRef(false);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Scroll background check & user manual scroll release
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleUserInteraction = () => {
      if (isClickScrollingRef.current) {
        isClickScrollingRef.current = false;
        if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, []);

  // 2. IntersectionObserver for zero-blink active section tracking
  useEffect(() => {
    const sectionIds = ['hero', 'pipeline', 'services', 'materials', 'technology', 'industries', 'portfolio', 'process', 'quote'];

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrollingRef.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const activeId = visibleEntries[0].target.id;
          if (activeId) {
            setActiveSection(activeId);
          }
        }
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.15, 0.4, 0.7],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    isClickScrollingRef.current = true;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 1200);

    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { name: 'PIPELINE', href: '#pipeline', id: 'pipeline' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'MATERIALS', href: '#materials', id: 'materials' },
    { name: 'TECH', href: '#technology', id: 'technology' },
    { name: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
    { name: 'PROCESS', href: '#process', id: 'process' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-colors duration-300 transform-gpu ${
        isScrolled
          ? 'bg-industrial-950/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20'
          : 'bg-industrial-950/50 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Mark / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, 'hero')} 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-lg bg-industrial-900 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
            <Box className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              NEXUS <span className="text-cyan-400">3D</span>
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-widest uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              ADDITIVE LAB 01
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3.5 py-2 text-xs font-mono tracking-widest transition-colors duration-150 rounded-md relative outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 select-none ${
                  isActive
                    ? 'text-cyan-400 font-bold bg-cyan-500/15 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-700/50'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action & System Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-industrial-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>PRECISION: ±0.02mm</span>
          </div>

          <a
            href="#quote"
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-industrial-950 font-display font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-[1.02] active:scale-95 flex items-center gap-2 group outline-none focus:outline-none focus:ring-0"
          >
            <span>INSTANT QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-lg bg-industrial-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all focus:outline-none focus:ring-0"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-industrial-950/95 backdrop-blur-xl border-b border-cyan-500/20 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              SYSTEM ONLINE
            </span>
            <span className="text-cyan-400">G-CODE READY</span>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="px-4 py-3 rounded-lg text-sm font-mono tracking-wider text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 transition-all flex items-center justify-between outline-none focus:outline-none focus:ring-0"
              >
                <span>{link.name}</span>
                <span className="text-xs text-slate-500 font-sans">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#quote"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
              }}
              className="w-full py-3.5 rounded-lg bg-cyan-500 text-industrial-950 font-display font-bold text-center text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
            >
              <span>REQUEST 3D PRINT QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
