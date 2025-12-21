import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="135"
      height="45"
      viewBox="0 0 135 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-primary', className)}
      {...props}
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F7D06B" />
          <stop offset="50%" stopColor="#C6A046" />
          <stop offset="100%" stopColor="#F7D06B" />
        </linearGradient>
      </defs>
      <text 
        x="50%" 
        y="50%" 
        dy=".3em" 
        textAnchor="middle" 
        fontFamily="Inter, sans-serif" 
        fontSize="30" 
        fontWeight="bold" 
        fill="url(#gold-gradient)"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="0.3"
      >
        KNR
      </text>
      <path 
        d="M67.5,22.5 C50,0,15,0,15,22.5 C15,45,50,45,67.5,22.5" 
        stroke="url(#gold-gradient)" 
        strokeWidth="5" 
        fill="none" 
      />
      <path 
        d="M67.5,22.5 C85,45,120,45,120,22.5 C120,0,85,0,67.5,22.5" 
        stroke="url(#gold-gradient)" 
        strokeWidth="5" 
        fill="none" 
      />
    </svg>
  );
}
