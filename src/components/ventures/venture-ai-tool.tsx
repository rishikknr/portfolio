"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Send, Bot } from 'lucide-react';

interface VentureAIToolProps {
    ventures: { name: string }[];
}

export default function VentureAITool({ ventures }: VentureAIToolProps) {
  // Simple state for demo visual purposes
  const [query, setQuery] = useState('');

  return (
    <div className="relative w-full max-w-3xl mx-auto">
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4 bg-white/5">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-500">
                        <Bot size={18} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white text-sm">Venture Assistant</h4>
                        <p className="text-xs text-neutral-500">Ask about Sanchaya, Revive, or NeuroDam</p>
                    </div>
                </div>
                <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
            </div>

            {/* Chat Area (Visual Only for impact) */}
            <div className="min-h-[200px] p-6 space-y-6">
                <div className="flex gap-4">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-neutral-800 to-black border border-white/10 flex items-center justify-center">
                        <Sparkles size={14} className="text-yellow-500" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm text-neutral-300 leading-relaxed">
                            Hello! I am the AI context for Rishik's portfolio. I can answer technical questions about architecture, impact metrics, or the vision behind these ventures.
                        </p>
                        <div className="flex gap-2">
                            {ventures.map((v) => (
                                <span key={v.name} className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-neutral-400 ring-1 ring-inset ring-white/10 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">
                                    {v.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/5">
                <div className="relative flex items-center">
                    <Input 
                        placeholder="Ask me anything about the tech stack..." 
                        className="pr-12 bg-neutral-900/50 border-neutral-800 text-neutral-200 placeholder:text-neutral-600 focus-visible:ring-yellow-500/50 h-12 rounded-xl"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute right-1 top-1 h-10 w-10 text-neutral-400 hover:text-yellow-500 hover:bg-yellow-500/10 rounded-lg"
                    >
                        <Send size={18} />
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}