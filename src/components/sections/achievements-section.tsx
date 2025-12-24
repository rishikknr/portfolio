"use client";

import React from 'react';
import Image from 'next/image';
import { achievements } from '@/lib/data';
import { Trophy, ShieldCheck, Star } from 'lucide-react';

export default function AchievementsSection() {
  // We duplicate the array to create the seamless infinite loop effect
  const loopingAchievements = [...achievements, ...achievements, ...achievements];

  return (
    <section id="achievements" className="relative py-24 lg:py-40 bg-[#080808] overflow-hidden">
      
      {/* --- CSS FOR INFINITE SCROLL --- */}
      {/* Adding this style tag here ensures it works instantly without editing tailwind.config */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* --- ATMOSPHERE --- */}
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay z-0"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-200">Excellence.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-light leading-relaxed">
            Highlights from the journey: National wins, government hackathons, and global recognitions.
          </p>
        </div>


        {/* --- PART 1: THE CREDIBILITY GALLERY (Visual Proof) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
            
            {/* Image 1: EY Techathon (Corrected Context) */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
                <Image 
                    src="/assets/ey-techathon-5.0-award.jpeg" 
                    alt="EY Techathon Winner" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 backdrop-blur-md">
                                <Trophy size={14} className="text-yellow-500" />
                                <span className="text-xs font-bold text-yellow-500 tracking-wider uppercase">National Winner</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">EY Techathon 5.0</h3>
                            <p className="text-sm md:text-base text-neutral-300 font-medium">Solving for Rural Healthcare</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image 2: Kavach (Corrected Context) */}
            <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
                <Image 
                    src="/assets/kavach-speech.jpg" 
                    alt="Kavach Hackathon Speech" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                   <div className="flex justify-between items-end">
                        <div>
                            {/* Replaced "Speaker" with "National Finalist" */}
                            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md">
                                <ShieldCheck size={14} className="text-blue-400" />
                                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">National Finalist</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Kavach Hackathon</h3>
                            <p className="text-sm md:text-base text-neutral-300 font-medium">Cyber Security & Defense Agency</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* --- PART 2: INFINITE SCROLLING LIST --- */}
        <div className="relative w-full">
            
            {/* Gradient Masks for Fade In/Out Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-r from-[#080808] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />

            {/* The Moving Track */}
            <div className="flex overflow-hidden">
                <div className="flex gap-6 animate-scroll w-max hover:cursor-grab active:cursor-grabbing">
                    {loopingAchievements.map((ach, index) => (
                        <div key={index} className="w-[350px] shrink-0">
                            <div className="h-full relative group p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                                
                                {/* Golden accent on hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500/0 group-hover:bg-yellow-500 transition-colors duration-300 rounded-l-xl" />

                                <div className="flex items-start justify-between mb-4">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-black/50 border border-white/10 group-hover:border-yellow-500/50">
                                        <Star size={18} className="text-neutral-500 group-hover:text-yellow-500 transition-colors" />
                                    </div>
                                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest group-hover:text-neutral-300">
                                        2023-2024
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors line-clamp-1">
                                    {ach.title}
                                </h4>
                                <p className="text-sm font-semibold text-neutral-400 mb-4 uppercase tracking-wide">
                                    {ach.organization}
                                </p>
                                <p className="text-sm text-neutral-500 leading-relaxed border-t border-white/5 pt-4 group-hover:text-neutral-300 transition-colors line-clamp-2">
                                    {ach.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}