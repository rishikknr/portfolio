"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
    if (pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center md:justify-start">
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {navItems.map((item) => {
            const isHomePage = pathname === '/';
            let finalHref = item.href;
            
            // If it's a hash link on the homepage, use just the hash for smooth scroll.
            if (item.href.startsWith('/#') && isHomePage) {
              finalHref = `#${item.href.substring(2)}`;
            }

            return (
              <Link
                key={item.name}
                href={finalHref}
                onClick={(e) => {
                  if (finalHref.startsWith('#')) {
                     handleScroll(e, finalHref);
                  }
                }}
                className="font-medium text-muted-foreground transition-colors hover:text-primary"
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
