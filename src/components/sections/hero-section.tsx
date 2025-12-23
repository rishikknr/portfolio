"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative flex min-h-[100dvh] w-full flex-col justify-end overflow-hidden bg-background">
      
      {/* --- LAYER 1: TEXTURE & LIGHTING --- */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2] pointer-events-none mix-blend-overlay z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      <div className="absolute top-[-10%] left-[-10%] h-[700px] w-[700px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/5 dark:bg-white/5 blur-[100px] pointer-events-none" />

      {/* --- LAYER 2: BACKGROUND TYPOGRAPHY --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
        <h1 className="font-headline text-[15vw] leading-none font-black text-foreground/5 dark:text-white/5 whitespace-nowrap blur-[2px]">
          KNR RISHIK
        </h1>
      </div>

      {/* --- LAYER 3: MAIN CONTENT GRID --- */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full min-h-[calc(100vh-80px)] items-center">
        
        {/* LEFT: THE NAME & INFO */}
        <div className="flex flex-col justify-center items-start pt-24 lg:pt-0 pb-12 lg:pb-0">
            
            {/* 1. THE NAME STACK */}
            <div className="relative mb-4">
                <div className="absolute -left-6 top-4 bottom-4 w-1 bg-gradient-to-b from-yellow-500 to-transparent hidden lg:block" />
                
                <h1 className="font-headline font-black tracking-tighter leading-[0.85] text-foreground drop-shadow-xl">
                    <span className="block text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem]">
                        KNR
                    </span>
                    <span className="block text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-white dark:to-neutral-400">
                        Rishik
                    </span>
                </h1>
            </div>

            {/* 2. FULL NAME */}
            <p className="font-medium text-lg md:text-xl text-muted-foreground tracking-wide mb-8">
                Kothapally Narayana Renu Rishik
            </p>

            {/* 3. THE "INFO" SECTION (Designed for Impact) */}
            <div className="flex flex-col items-start gap-4 mb-10 max-w-xl">
                
                {/* The Headline Role - Bold & Gold */}
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 tracking-tight">
                    Founder. Builder. Developer.
                </h2>
                
                {/* The Mission - Clean with Highlights */}
                <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed font-light">
                    Building technology-driven ventures at the intersection of{' '}
                    <span className="font-semibold text-foreground border-b border-yellow-500/30">trust</span>,{' '}
                    <span className="font-semibold text-foreground border-b border-yellow-500/30">scale</span>, and{' '}
                    <span className="font-semibold text-foreground border-b border-yellow-500/30">impact</span>
                    {' '}— from rural healthcare to fintech infrastructure.
                </p>
            </div>
            
            {/* 4. BUTTONS */}
            <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-lg font-semibold rounded-full shadow-lg hover:shadow-yellow-500/20 transition-all hover:scale-105">
                    <a href="#ventures">View Ventures</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full backdrop-blur-sm bg-background/50">
                    <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact Me</a>
                </Button>
            </div>
        </div>


        {/* RIGHT: THE IMAGE */}
        <div className="relative flex h-[50vh] lg:h-full w-full items-end justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] lg:absolute lg:bottom-0">
                <div className="absolute bottom-0 left-[10%] w-[80%] h-[60%] bg-black/40 blur-[60px] -z-10 rounded-full dark:bg-black/80" />
                <Image
                  src="/assets/profilepic.png"
                  alt="KNR Rishik"
                  width={800}
                  height={1000}
                  quality={100}
                  priority
                  className="h-auto w-full object-contain drop-shadow-2xl"
                  style={{
                     maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                     filter: 'contrast(1.05)',
                  }}
                />
            </div>
        </div>

      </div>
    </section>
  );
}