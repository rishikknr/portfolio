import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Venture } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

type VentureCardProps = {
  venture: Venture;
  reverse?: boolean;
};

export default function VentureCard({ venture, reverse = false }: VentureCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === venture.imageId);
  
  return (
    <div className={cn('grid items-center gap-12 md:grid-cols-2', reverse ? 'md:grid-flow-col-dense' : '')}>
      <div className={cn('md:pr-8', reverse && 'md:order-last md:pl-8 md:pr-0')}>
        <h3 className="font-headline text-3xl font-bold text-primary">{venture.name}</h3>
        <p className="mt-2 text-lg font-semibold text-foreground">{venture.tagline}</p>
        
        <div className="mt-6 space-y-4">
          {venture.details.map((detail, index) => (
            <p key={index} className="text-muted-foreground">{detail}</p>
          ))}
        </div>
        <p className="mt-6 border-l-2 border-primary/50 pl-4 italic text-muted-foreground/80">
          <strong>Vision:</strong> {venture.vision}
        </p>
      </div>
       <div className="aspect-video overflow-hidden rounded-xl border border-border/20 shadow-lg shadow-black/20">
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
      </div>
    </div>
  );
}
