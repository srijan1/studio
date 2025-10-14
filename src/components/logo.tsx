import { cn } from "@/lib/utils";
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/images/gaushala_logo.jpeg"
        alt="Shri Gopal Krishna Gaushala Seva Trust Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="font-headline text-2xl font-bold tracking-tight">
        Shri Gopal Krishna Gaushala Seva Trust
      </span>
    </div>
  );
}
