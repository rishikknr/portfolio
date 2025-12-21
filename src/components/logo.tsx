import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="250"
      height="100"
      viewBox="0 0 250 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EAD89D" />
          <stop offset="30%" stopColor="#C6A046" />
          <stop offset="60%" stopColor="#D9B96C" />
          <stop offset="100%" stopColor="#F7D06B" />
        </linearGradient>
        <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.5"/>
            <feOffset dx="0.5" dy="0.5" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
      </defs>
      <g style={{ filter: 'url(#subtle-shadow)' }}>
        <path 
            d="M 100,50 C 100,25 150,25 150,50 C 150,75 100,75 100,50 Z M 150,50 C 150,25 200,25 200,50 C 200,75 150,75 150,50 Z"
            stroke="url(#logo-gradient-gold)"
            strokeWidth="10"
            fill="none"
        />
      </g>
    </svg>
  );
}
