"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, PlayCircle, Quote } from 'lucide-react';
import { Venture } from '@/lib/types'; // Ensure this path is correct

interface VentureCardProps {
  venture: Venture;
  index: number;
}

export default function VentureCard({ venture, index }: VentureCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={cn(
      "relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center group",
      // On desktop: Shift alignment based on index
      !isEven && "lg:grid-flow-dense" 
    )}>
      
      {/* --- THE CONNECTING DOT (Timeline Node) --- */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-[#050505] border border-neutral-800 z-20 group-hover:border-yellow-500/50 transition-colors duration-500 shadow-2xl">
         <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-yellow-500 transition-colors duration-500" />
      </div>


      {/* --- COLUMN 1: VISUALS (Video/Image) --- */}
      <div className={cn(
          "relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]",
          // If odd index, push this column to the right on desktop (done via grid-flow-dense above)
          !isEven && "lg:col-start-2" 
      )}>
        {/* Glow behind the video */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
        
        {/* The Content */}
        <div className="relative h-full w-full z-10">
            {venture.videoUrl ? (
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={`${venture.videoUrl}?controls=0&rel=0&modestbranding=1`} 
                    title={venture.name} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                ></iframe>
            ) : (
                // Fallback if no video
                <div className="flex items-center justify-center h-full w-full bg-neutral-900">
                    <PlayCircle className="w-16 h-16 text-neutral-700" />
                </div>
            )}
            
            {/* Overlay Gradient for cinematic feel */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
        </div>
      </div>


      {/* --- COLUMN 2: THE STORY (Text) --- */}
      <div className={cn(
          "flex flex-col items-start text-left relative",
          !isEven ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
      )}>
        
        {/* 01. Header */}
        <div className={cn("flex flex-col gap-3 mb-6", !isEven && "lg:items-end")}>
            <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-yellow-500 tracking-widest uppercase font-semibold">
                    0{index + 1}
                </span>
                <div className="h-[1px] w-8 bg-yellow-500/50" />
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                    {venture.role}
                </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight group-hover:text-yellow-500 transition-colors duration-300">
                {venture.name}
            </h3>
        </div>

        {/* 02. Tagline & Story */}
        <p className="text-xl font-medium text-neutral-200 mb-4 leading-relaxed">
            {venture.tagline}
        </p>
        <p className="text-neutral-400 leading-relaxed mb-8 max-w-lg text-lg font-light">
            {venture.story}
        </p>

        {/* 03. The "Impact" Details (Styled as a specs list) */}
        <div className={cn(
            "grid grid-cols-1 gap-3 w-full mb-8",
            !isEven ? "lg:place-items-end" : "lg:place-items-start"
        )}>
            {venture.details.slice(1, 3).map((detail, i) => (
                <div key={i} className="flex items-start gap-3 max-w-md group/item">
                    <div className={cn("mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-600 group-hover/item:bg-white transition-colors", !isEven && "order-2")} />
                    <p className="text-sm text-neutral-500 group-hover/item:text-neutral-300 transition-colors">
                        {detail}
                    </p>
                </div>
            ))}
        </div>

        {/* 04. Vision Quote */}
        <div className={cn(
            "relative p-6 bg-white/5 border border-white/5 rounded-xl backdrop-blur-sm max-w-md mt-2 group-hover:border-white/10 transition-colors",
            !isEven && "lg:mr-auto lg:ml-0" // Reset alignment for the box itself if needed, or keep aligned
        )}>
            <Quote className="absolute top-4 left-4 w-4 h-4 text-yellow-500/40" />
            <p className="text-sm italic text-neutral-300 pl-6 pt-1">
                "{venture.vision}"
            </p>
        </div>

      </div>
      
    </div>
  );
}