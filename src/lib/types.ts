import type { LucideIcon } from 'lucide-react';

export type Venture = {
  name: string;
  tagline: string;
  story: string;
  role: string;
  details: string[];
  vision: string;
  imageId: string;
  videoUrl?: string;
};

export type Achievement = {
  title: string;
  organization: string;
  description: string;
};

export type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};
