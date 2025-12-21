"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Founder Journey', href: '#journey' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center md:justify-start">
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
