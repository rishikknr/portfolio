"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Moon, Sun, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Ventures', href: '/#ventures' },
  { name: 'Achievements', href: '/#achievements' },
  { name: 'Values', href: '/#values' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    const targetId = href.substring(href.indexOf('#'));
    if (pathname === '/') {
        e.preventDefault();
        const elem = document.getElementById(targetId.substring(1));
        elem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-border/40 py-2 shadow-sm supports-[backdrop-filter]:bg-background/60" 
          : "bg-transparent border-transparent py-6"
    )}>
      <div className="container flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <Link href="/" className="relative h-10 w-32 md:h-12 md:w-40 transition-opacity hover:opacity-80">
            {/* 
              This logic ensures the logo is visible on both backgrounds:
              1. Light Mode: brightness-0 (Turns it Black)
              2. Dark Mode: dark:brightness-100 (Keeps original Gold/White)
              3. If your logo is ALREADY Gold, remove 'brightness-0' and just use drop-shadow.
            */}
            <Image 
                src="/assets/logo.png" 
                alt="KNR Logo" 
                fill 
                className="object-contain object-left dark:brightness-100 brightness-0 transition-all duration-500"
                priority
            />
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
            
            {/* --- DESKTOP NAV --- */}
            <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
                const isHashLink = item.href.startsWith('/#');
                const href = pathname === '/' && isHashLink ? item.href.substring(1) : item.href;
                
                return (
                    <a
                    key={item.name}
                    href={href}
                    onClick={(e) => isHashLink ? handleScroll(e, item.href) : undefined}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
                    >
                    {item.name}
                    {/* Authentic Hover Underline */}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-yellow-500 transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100"></span>
                    </a>
                )
            })}
            </nav>

            <div className="w-[1px] h-6 bg-border hidden md:block" />

            {/* --- THEME TOGGLE (PREMIUM ANIMATION) --- */}
            {mounted ? (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="relative h-9 w-9 rounded-full overflow-hidden hover:bg-muted transition-colors duration-300 focus-visible:ring-0"
                >
                    {/* Sun Icon (Shows in Light Mode) */}
                    <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-yellow-600" />
                    
                    {/* Moon Icon (Shows in Dark Mode) */}
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-yellow-400" />
                    
                    <span className="sr-only">Toggle theme</span>
                </Button>
            ) : (
                // Placeholder to prevent layout shift during hydration
                <div className="h-9 w-9" />
            )}
        </div>
      </div>
    </header>
  );
}