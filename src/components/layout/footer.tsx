"use client";

import React from 'react';
import { Mail, Linkedin, ArrowUpRight, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative w-full bg-[#020202] pt-24 pb-10 overflow-hidden">
      
      {/* --- ATMOSPHERE --- */}
      {/* 1. Grain Texture */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-overlay z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      {/* 2. Horizon Glow (The Sun setting on the page) */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[400px] bg-gradient-to-t from-yellow-600/10 to-transparent blur-[100px] pointer-events-none" />


      {/* --- BACKGROUND TYPOGRAPHY --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden select-none pointer-events-none">
         <h1 className="text-[14vw] font-black text-white/[0.02] leading-none tracking-tighter text-center whitespace-nowrap translate-y-[20%]">
            KNR RISHIK
         </h1>
      </div>


      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        
        {/* --- MAIN CALL TO ACTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-24 items-start">
            
            {/* Left: The "Pitch" */}
            <div className="flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">
                     Open to collaboration
                   </span>
                </div>
                
                <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                  Let’s build something <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">meaningful.</span>
                </h2>
                
                <p className="text-lg text-neutral-400 max-w-md font-light leading-relaxed">
                   Whether it's an AI infrastructure, a fintech solution, or a rural healthcare initiative — I am ready to engineer for impact.
                </p>
            </div>


            {/* Right: The Links */}
            <div className="flex flex-col items-start lg:items-end gap-6">
                
                {/* 1. The Big Email Button */}
                <Link 
                   href="mailto:rishikknr@gmail.com"
                   className="group relative flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-6 rounded-2xl hover:bg-white/10 transition-all duration-300 w-full lg:w-auto"
                >
                   <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-300">
                      <Mail size={24} />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold group-hover:text-neutral-400">Drop an email</span>
                      <span className="text-xl md:text-2xl font-bold text-white tracking-tight">rishikknr@gmail.com</span>
                   </div>
                   <ArrowUpRight className="ml-auto lg:ml-8 text-neutral-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* 2. Social Links Row */}
                <div className="flex gap-4">
                   <Link 
                      href="https://www.linkedin.com/in/rishik-knr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-[#0A0A0A] text-neutral-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                   >
                      <Linkedin size={18} />
                      <span className="text-sm font-medium">LinkedIn</span>
                   </Link>
                   
                   {/* Optional: Add Github or Twitter if you have them, otherwise remove */}
                   <Link 
                      href="#" 
                      className="flex items-center justify-center h-11 w-11 rounded-full border border-white/10 bg-[#0A0A0A] text-neutral-400 hover:text-white hover:border-white/30 transition-all duration-300"
                   >
                      <Github size={18} />
                   </Link>
                </div>
            </div>
        </div>


        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-sm text-neutral-500">
                <p>&copy; {currentYear} KNR Rishik.</p>
                <span className="hidden md:inline text-neutral-700">|</span>
                <p>Designed & Built with precision.</p>
            </div>

            <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <span>Based in India</span>
            </div>
        </div>

      </div>
    </footer>
  );
}