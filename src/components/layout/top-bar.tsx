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
  return (
    <div className="bg-primary text-primary-foreground p-2">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm font-medium">
          This is a demo application. Not for production use.
        </p>
        <Dropdown title="Quick Links">
          <DropdownItem
            icon={<FileText className="h-5 w-5" />}
            title="Documentation"
            description="Read the project documentation."
            href="#"
          />
          <DropdownItem
            icon={<CheckCircle className="h-5 w-5" />}
            title="Status Page"
            description="Check the status of our services."
            href="#"
          />
          <DropdownItem
            icon={<ArrowRightCircle className="h-5 w-5" />}
            title="Log in"
            description="Access your account."
            href="#"
          />
        </Dropdown>
      </div>
    </div>
  );
}
