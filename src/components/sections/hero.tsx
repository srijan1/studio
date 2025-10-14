import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, FileText, CheckCircle, ArrowRightCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
                <a href="https://wa.me/+91ADMINNUMBER?text=I%20donated%20to%20Shri%20Gopal%20Krishna%20Seva%20Trust.%20Receipt%20attached." target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Notify Admin on WhatsApp</Button>
                </a>
            </div>
            <div className="flex flex-col gap-4 text-left">
                <h2 className="font-headline text-3xl text-white">Donate &amp; also get Tax benefit under 80G of Income Tax</h2>
                <p className="max-w-md text-base text-gray-200">
                    Your contribution helps us provide food, shelter, and medical care. Every donation, big or small, makes a profound difference in their lives.
                </p>
                        <div className="container">
                            <div className="flex justify-center gap-4 mb-8">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button>Tax Benefit</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <FileText className="h-5 w-5" />
                                            <div className="ml-2">
                                                <p className="font-semibold">Tax Benefits</p>
                                                <p className="text-sm text-muted-foreground">Donations Exempted Under Section 80G & 12A</p>
                                            </div>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button>Assured</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <CheckCircle className="h-5 w-5" />
                                            <div className="ml-2">
                                                <p className="font-semibold">Verified NGOs</p>
                                                <p className="text-sm text-muted-foreground">Certified under section(80G) of Govt. of India</p>
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <FileText className="h-5 w-5" />
                                            <div className="ml-2">
                                                <p className="font-semibold">Animal Welfare Board Of India</p>
                                                <p className="text-sm text-muted-foreground">Recognised by animal welfare organisation</p>
                                            </div>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button>Animals</Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 p-2">
                                            {['Cow', 'Bull', 'Calf'].map((animal) => (
                                                <Link key={animal} href="#" className="flex items-center gap-2 text-sm hover:text-primary">
                                                    <ArrowRightCircle className="h-4 w-4 text-primary/70" />
                                                    <span>{animal}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            
                            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
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
                            </div> */}
                        </div>
            </div>
        </div>
      </div>
    </section>
  );
}