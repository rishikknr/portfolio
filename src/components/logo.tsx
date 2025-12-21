import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="150"
      height="60"
      viewBox="0 0 150 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#EAD89D' }} />
          <stop offset="50%" style={{ stopColor: '#C6A046' }} />
          <stop offset="100%" style={{ stopColor: '#F7D06B' }} />
        </linearGradient>
        <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
            <feOffset dx="1" dy="1" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
      </defs>
      <g style={{ filter: 'url(#drop-shadow)' }}>
        <path 
          d="M45,30 C5,5 5,55 45,30 C85,5 145,55 105,30 C145,5 85,55 45,30 Z"
          stroke="url(#logo-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <text 
          fontFamily="Inter, sans-serif"
          fontSize="28"
          fontWeight="500"
          fill="url(#logo-gradient)"
          textAnchor="middle"
        >
          <tspan x="32" y="38">K</tspan>
          <tspan x="75" y="38">N</tspan>
          <tspan x="118" y="38">R</tspan>
        </text>
        <path d="M58 22 L75 42 L92 22" stroke="url(#logo-gradient)" strokeWidth="5" fill="none" />
      </g>
    </svg>
  );
}
