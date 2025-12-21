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
    if (pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(2); // Remove '/#'
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
    // If not on the homepage, the Link component will handle navigation.
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center md:justify-start">
        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('/#');
            const linkHref = isHashLink && pathname !== '/' ? `/${item.href}` : item.href;
            
            return (
              <Link
                key={item.name}
                href={linkHref}
                onClick={isHashLink && pathname === '/' ? (e) => handleScroll(e, item.href) : undefined}
                className={cn(
                  "font-medium text-muted-foreground transition-colors hover:text-primary",
                  isHashLink && pathname === '/' && "cursor-pointer"
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
