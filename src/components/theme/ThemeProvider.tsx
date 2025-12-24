"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem={true} enableColorScheme={true}>
      {children}
    </NextThemesProvider>
  );
}
