"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Ventures', href: '/#ventures' },
  { name: 'Achievements', href: '/#achievements' },
  { name: 'Values', href: '/#values' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    const targetId = href.substring(href.indexOf('#'));
    
    if (pathname === '/') {
        e.preventDefault();
        const elem = document.getElementById(targetId.substring(1));
        elem?.scrollIntoView({ behavior: 'smooth' });
    } else {
        // No need to prevent default, let the browser handle the navigation
        // to the new page with the hash.
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-auto text-primary" />
        </Link>

        <nav className="hidden items-center gap-4 text-sm sm:gap-6 md:flex">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('/#');
            
            if (isHashLink) {
              const href = pathname === '/' ? item.href.substring(1) : `/${item.href.substring(1)}`;
              return (
                 <a
                  key={item.name}
                  href={href}
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
