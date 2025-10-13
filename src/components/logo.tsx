import { cn } from "@/lib/utils";

const CowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18.8 8.02A6.4 6.4 0 0 0 12.06 4c-3.6 0-6.53 2.92-6.53 6.53 0 1.63.6 3.1 1.58 4.26"/>
      <path d="M7.4 18.5c.3-.2.5-.5.5-1 0-.3-.2-.5-.5-.5s-.5-.2-.5-.5.2-.5.5-.5"/>
      <path d="M12.5 13.5c.3.2.5.5.5 1 0 .3-.2.5-.5.5s-.5.2-.5.5.2.5.5.5"/>
      <path d="M18.8 15.25c1.1-.34 2.22-1.22 2.22-3.23 0-2.3-2.4-3.5-4.2-3.5"/>
      <path d="M6.23 18.55c-1.3-1.3-2.23-3.1-2.23-5.02 0-4.14 3.36-7.5 7.5-7.5"/>
    </svg>
);


export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CowIcon className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold tracking-tight">
        CowKind Haven
      </span>
    </div>
  );
}
