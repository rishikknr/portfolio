"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Ventures', href: '/ventures' },
  { name: 'Achievements', href: '/#achievements' },
  { name: 'Values', href: '/#values' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove '#'
    const elem = document.getElementById(targetId);
    
    if (pathname === '/') {
        elem?.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Navigate to home and then scroll
        window.location.href = `/${href}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center md:justify-start">
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('/#');
            
            if (isHashLink) {
              return (
                 <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="cursor-pointer font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium text-muted-foreground transition-colors hover:text-primary",
                  pathname === item.href && "text-primary"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
