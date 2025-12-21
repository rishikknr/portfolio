import { cn } from '@/lib/utils';

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <text
        x="0"
        y="32"
        fontFamily="Inter, sans-serif"
        fontSize="36"
        fontWeight="800"
        letterSpacing="0.05em"
        fill="currentColor"
      >
        KNR
      </text>
    </svg>
  );
}
