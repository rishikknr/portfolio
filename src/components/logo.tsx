import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M35.333 29.167c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10s-4.478 10-10 10z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M64.667 29.167c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10s-4.478 10-10 10z"
        stroke="hsl(var(--accent))"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
