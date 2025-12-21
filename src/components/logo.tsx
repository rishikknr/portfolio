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
        <linearGradient id="gold-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d="M45.58,28.14,38.3,37.38H30.13l9.4-12.2-8.6-11.23h8.33l6.05,8.19,5.91-8.19h8.33L51,25.13l9.44,12.25H52.2Z"
        fill="url(#gold-gradient)"
      />
      <path
        d="M93.37,13.95H78.85v5.36H92.3v5.09H78.85v7.29h14.83v5.36H72.4V8.59h20.94Z"
        fill="url(#gold-gradient)"
      />
      <path
        d="M67.5 22.5 C 50 0, 15 0, 15 22.5 C 15 45, 50 45, 67.5 22.5"
        stroke="url(#gold-gradient)"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M67.5 22.5 C 85 45, 120 45, 120 22.5 C 120 0, 85 0, 67.5 22.5"
        stroke="url(#gold-gradient)"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}
