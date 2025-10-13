import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, FileText, CheckCircle, ArrowRightCircle, Info } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from '@/components/ui/popover';

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
    title:string;
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

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-bg');
  const qrCodeImage = PlaceHolderImages.find((img) => img.id === 'qr-code');

  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] w-full">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl">
          Their Eyes Plead For Your Kindness
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl">
          Join Shri Gopal Krishna Seva Trust in our mission to provide sanctuary, nourishment, and lifelong care to cows in need. Your compassion can change their world.
        </p>
        <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-background/80 p-6 text-foreground shadow-lg backdrop-blur-sm">
                {qrCodeImage && (
                    <Image
                        src={qrCodeImage.imageUrl}
                        alt={qrCodeImage.description}
                        width={180}
                        height={180}
                        className="rounded-md"
                        data-ai-hint={qrCodeImage.imageHint}
                    />
                )}
                <p className="font-bold">Scan to Donate</p>
            </div>
            <div className="flex flex-col gap-4 text-left">
                <h2 className="font-headline text-3xl text-white">Give a Cow a Life of Love</h2>
                <p className="max-w-md text-base text-gray-200">
                    Your contribution helps us provide food, shelter, and medical care. Every donation, big or small, makes a profound difference in their lives.
                </p>
                <Button asChild className="mt-4">
                  <Link href="#donate">
                    <Heart className="mr-2 h-4 w-4" /> Donate Now
                  </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
