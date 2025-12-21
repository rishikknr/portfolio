import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Venture } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

type VentureCardProps = {
  venture: Venture;
  reverse?: boolean;
};

export default function VentureCard({ venture, reverse = false }: VentureCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === venture.imageId);
  const ventureSlug = venture.name.toLowerCase();
  
  return (
    <div className={cn('grid items-center gap-12 md:grid-cols-2', reverse ? 'md:grid-flow-col-dense' : '')}>
      <div className={cn('md:pr-8', reverse && 'md:order-last md:pl-8 md:pr-0')}>
        <Link href={`/ventures/${ventureSlug}`} className="group">
          <h3 className="font-headline text-3xl font-bold text-primary group-hover:underline">{venture.name}</h3>
          <p className="mt-2 text-lg font-semibold text-foreground group-hover:underline">{venture.tagline}</p>
        </Link>
        
        <div className="mt-6 space-y-3">
          {venture.details.map((detail, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="text-muted-foreground">{detail}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 border-l-2 border-primary/50 pl-4 italic text-muted-foreground/80">
          <strong>Vision:</strong> {venture.vision}
        </p>
      </div>
       <div className="aspect-video overflow-hidden rounded-xl border border-border/20 shadow-lg shadow-black/20">
        <Link href={`/ventures/${ventureSlug}`}>
          {venture.videoUrl ? (
            <iframe
              className="h-full w-full"
              src={venture.videoUrl}
              title={venture.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={venture.name}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={placeholder.imageHint}
            />
          )}
        </Link>
      </div>
    </div>
  );
}
