"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react'; // Ensure you have lucide-react installed
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
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-2 shadow-sm" 
          : "bg-transparent py-6"
    )}>
      <div className="container flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative h-10 w-32 md:h-12 md:w-40 transition-opacity hover:opacity-80">
            {/* Using CSS filter to invert logo in dark mode if needed, or stick to one color */}
            <Image 
                src="/assets/logo.png" 
                alt="KNR Logo" 
                fill 
                className="object-contain object-left dark:brightness-100 brightness-0" // Adapts logo color
                priority
            />
        </Link>

        <div className="flex items-center gap-6">
            {/* NAV ITEMS */}
            <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
                const isHashLink = item.href.startsWith('/#');
                const href = pathname === '/' && isHashLink ? item.href.substring(1) : item.href;
                
                return (
                    <a
                    key={item.name}
                    href={href}
                    onClick={(e) => isHashLink ? handleScroll(e, item.href) : undefined}
                    className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
                    >
                    {item.name}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-1/2"></span>
                    </a>
                )
            })}
            </nav>

            {/* THEME TOGGLE BUTTON */}
            {mounted && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-transform active:scale-95"
                >
                    {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ) : (
                        <Moon className="h-5 w-5 text-slate-900 fill-slate-900" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            )}
        </div>
      </div>
    </header>
  );
}