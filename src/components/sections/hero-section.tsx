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
    <section id="home" className="relative flex min-h-[calc(100vh-3.5rem)] w-full items-center bg-background">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start text-left">
          <div className="mb-4">
            <h1 className="font-headline text-6xl font-extrabold tracking-tighter text-foreground sm:text-7xl md:text-8xl">
              KNR Rishik
            </h1>
            <p className="text-lg text-muted-foreground">
              Kothapally Narayana Renu Rishik
            </p>
          </div>
          <p className="mb-6 font-headline text-xl font-semibold text-primary sm:text-2xl">
            Founder. Builder. Software Developer.
          </p>
          <p className="max-w-xl text-lg text-muted-foreground">
            Building technology-driven ventures at the intersection of trust, scale, and impact — from rural healthcare to fintech infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap justify-start gap-4">
            <Button asChild size="lg">
              <a href="#ventures" onClick={(e) => handleScroll(e, '#ventures')}>View Ventures</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
            </Button>
          </div>
        </div>
        <div className="relative flex h-full min-h-[300px] w-full items-center justify-center lg:min-h-[400px]">
          <div className="group aspect-[4/5] h-full max-h-[500px] w-full max-w-[400px]">
             <Image
              src="https://picsum.photos/seed/knr-portrait/600/750"
              alt="KNR Rishik"
              width={600}
              height={750}
              className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
