"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative flex h-[calc(100vh-3.5rem)] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(173,216,230,0.08),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(119,181,254,0.06),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
          Rishik KNR
        </h1>
        <p className="mt-4 font-headline text-xl font-semibold text-primary sm:text-2xl">
          Founder. Builder. Systems Thinker.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Building technology-driven ventures at the intersection of trust, scale, and impact — from rural healthcare to fintech infrastructure.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <a href="#ventures" onClick={(e) => handleScroll(e, '#ventures')}>View Ventures</a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
