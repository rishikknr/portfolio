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
    <section id="home" className="relative w-full overflow-hidden bg-background">
      {/* Background Ambient Glow for overall vibe */}
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative grid min-h-[calc(100vh-3.5rem)] grid-cols-1 gap-12 lg:grid-cols-2">
        
        {/* Left Column: Text (Vertically Centered) */}
        <div className="flex flex-col justify-center items-start text-left py-12 z-10">
          <div className="mb-4">
            <h1 className="font-headline text-6xl font-extrabold tracking-tighter text-foreground sm:text-7xl md:text-8xl">
              KNR Rishik
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Kothapally Narayana Renu Rishik
            </p>
          </div>
          <p className="mb-6 font-headline text-xl font-semibold text-primary sm:text-2xl">
            Founder. Builder. Software Developer.
          </p>
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            Building technology-driven ventures at the intersection of trust, scale, and impact — from rural healthcare to fintech infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap justify-start gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#ventures">View Ventures</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
            </Button>
          </div>
        </div>

        {/* Right Column: Image (Bottom Aligned + Stylized) */}
        <div className="relative flex h-full w-full flex-col items-center justify-end lg:items-center">
          
          {/* 1. The Backlight Glow: Makes the subject pop */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[60%] w-[80%] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

          {/* 2. The Image Container */}
          <div className="relative z-10 w-full max-w-[500px] lg:max-w-[600px]">
            <Image
              src="/assets/profilepic.png"
              alt="KNR Rishik"
              width={700}
              height={950}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl mask-image-b-fade"
              style={{
                // This creates a subtle fade at the very bottom so it blends into the page
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}