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
    <div className="hidden bg-secondary py-4 md:block">
      <div className="container">
        <div className="mb-4 text-center">
            <h3 className="text-lg font-semibold text-foreground">
                India’s First Cow Hospital Treated 100,000+ Cows In 11 Years With 24/7 Free Ambulance Service Need Your Support.
            </h3>
            <p className="text-sm text-muted-foreground">
                Donate &amp; also get Tax benefit under 80G of Income Tax
            </p>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <Dropdown title="Tax Benefit">
            <DropdownItem
              icon={<FileText className="h-5 w-5" />}
              title="Tax Benefits"
              description="Donations Exempted Under Section 80G & 12A"
            />
          </Dropdown>
          <Dropdown title="Assured">
            <DropdownItem
              icon={<CheckCircle className="h-5 w-5" />}
              title="Verified NGOs"
              description="Certified under sub-section(2) of section 12 Haryana Govt."
            />
            <DropdownItem
              icon={<FileText className="h-5 w-5" />}
              title="Animal Welfare Board Of India"
              description="Recognised by animal welfare organisation"
            />
          </Dropdown>
          <Dropdown title="Animals">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {['Cow', 'Bull', 'Calf', 'Buffalo', 'Monkey', 'Dog', 'Nilgai-Roz', 'Camel'].map((animal) => (
                    <Link key={animal} href="#" className="flex items-center gap-2 text-sm hover:text-primary">
                        <ArrowRightCircle className="h-4 w-4 text-primary/70" />
                        <span>{animal}</span>
                    </Link>
                ))}
            </div>
          </Dropdown>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center justify-center gap-4">
                <div className="relative h-24 w-24">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle className="stroke-current text-gray-200" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"></circle>
                        <circle className="stroke-current text-primary progress-ring__circle" strokeWidth="10" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset="238.64"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold">5%</span>
                    </div>
                </div>
                <div className="text-center">
                    <strong className="block font-bold">
                        Oct-2025
                    </strong>
                    <span>Month</span>
                </div>
                <div className="text-center">
                    <strong className="block font-bold">
                        25,000+
                    </strong>
                    <span>Total Kit Required</span>
                </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-muted-foreground text-center md:text-left">
                  Gokuldham Gau Seva Mahatirth has saved over 100,000+ cows in need since its inception. They want to save many more by giving them the right kind of medical treatment. You can support their cause.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}