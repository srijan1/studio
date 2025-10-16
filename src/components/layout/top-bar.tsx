import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ArrowRightCircle,
  CheckCircle,
  FileText,
  Info,
} from 'lucide-react';
import Link from 'next/link';

const Dropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
        {title} <Info className="ml-2 h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80 shadow-lg">
      <ul className="space-y-4">{children}</ul>
    </PopoverContent>
  </Popover>
);

const DropdownItem = ({
  icon,
  title,
  description,
  href = '#',
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}) => (
  <li className="flex items-start gap-4">
    <div className="text-primary mt-1">{icon}</div>
    <div>
      <Link href={href} className="font-semibold hover:underline">
        {title}
      </Link>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </li>
);

export function TopBar() {
}
