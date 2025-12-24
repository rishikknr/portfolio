"use client";

import React from 'react';
import VentureCard from '@/components/ventures/venture-card';
import { ventures } from '@/lib/data';

export default function VenturesSection() {
  return (
    <section id="ventures" className="relative w-full overflow-hidden bg-background py-24 lg:py-40 transition-colors duration-500">
      
      {/* --- ATMOSPHERE LAYERS --- */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="absolute top-[10%] right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-24 lg:mb-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">
                Selected Works
              </span>
          </div>
          
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 via-neutral-600 to-neutral-800 dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-600">The Future.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            A curation of ventures designed to solve real-world problems at the intersection of trust, scale, and impact.
          </p>
        </div>

        {/* --- THE VENTURES TIMELINE --- */}
        <div className="relative space-y-32 lg:space-y-40 pb-20">
          
          {/* The Connecting Thread (Line) - Updated color for visibility on Light Mode */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

          {ventures.map((venture, index) => (
            <VentureCard key={venture.name} venture={venture} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}