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
        <mask id="knr-mask">
            <rect width="250" height="100" fill="white" />
            <g fill="black">
                {/* K */}
                <path d="M55 35 L 55 65 M 70 50 L 55 35 L 70 35 L 85 50 L 70 65 L 55 65 L 70 50" stroke="black" strokeWidth="6" strokeLinejoin="round" />
                {/* N */}
                <path d="M108 65 L 108 35 L 125 65 L 142 35 L 142 65" stroke="black" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                {/* R */}
                <path d="M165 65 L 165 35 L 185 35 A 15 15 0 0 1 185 50 L 175 50 L 195 65" stroke="black" strokeWidth="7" fill="none" strokeLinejoin="round" />
            </g>
        </mask>
      </defs>
      <g style={{ filter: 'url(#subtle-shadow)' }}>
        <path 
            d="M50,50 C-10,0 110,0 125,50 C140,100 260,100 200,50 C310,0 140,100 125,50 C110,0 0,100 50,50 Z"
            fill="url(#logo-gradient-gold)"
            mask="url(#knr-mask)"
        />
      </g>
    </svg>
  );
}
