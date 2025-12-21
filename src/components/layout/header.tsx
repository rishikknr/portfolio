"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'All Ventures', href: '/all-ventures' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Values', href: '#values' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (pathname !== '/') {
      // If we are not on the homepage, we need to navigate to it first
      // and the scrolling will be handled by the browser's native behavior for hash links
      return;
    }
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const elem = document.querySelector(href);
      elem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center md:justify-start">
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('#');
            const finalHref = (pathname === '/' || !isHashLink) ? item.href : `/${item.href}`;

            return (
              <Link
                key={item.name}
                href={finalHref}
                onClick={(e) => handleScroll(e, item.href)}
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
