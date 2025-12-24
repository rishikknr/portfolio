"use client";

import React from 'react';
import { values } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function ValuesSection() {
  return (
    <section id="values" className="relative py-24 lg:py-32 bg-background overflow-hidden transition-colors duration-500">
      
      {/* --- ATMOSPHERE --- */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />


      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="h-[1px] w-8 bg-yellow-500/50" />
             <span className="text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">
                The Foundation
             </span>
             <div className="h-[1px] w-8 bg-yellow-500/50" />
          </div>
          
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
            Guiding <span className="text-muted-foreground">Principles.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            The code behind the code. These are the non-negotiables that define every decision, every architecture, and every venture.
          </p>
        </div>


        {/* --- THE VALUES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              // Changed bg-[#0A0A0A] to bg-card, and border-white/5 to border-border
              className="group relative flex flex-col h-full bg-card border border-border rounded-2xl p-8 overflow-hidden hover:border-yellow-500/30 transition-colors duration-500 shadow-sm hover:shadow-xl"
            >
              
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

              {/* 1. Icon Container */}
              <div className="relative mb-8">
                 <div className="absolute inset-0 bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                 
                 <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-muted border border-border group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black text-yellow-500 transition-all duration-300">
                    <value.icon className="h-7 w-7" />
                 </div>
              </div>

              {/* 2. The Content */}
              <div className="relative z-10 flex-grow">
                 {/* Numbering - Light Mode (Black/5), Dark Mode (White/5) */}
                 <span className="absolute right-0 top-0 font-mono text-4xl font-bold text-foreground/5 group-hover:text-foreground/10 transition-colors select-none">
                    0{index + 1}
                 </span>

                 <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                    {value.title}
                 </h3>
                 
                 <p className="text-muted-foreground leading-relaxed font-light group-hover:text-foreground transition-colors">
                    {value.description}
                 </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}