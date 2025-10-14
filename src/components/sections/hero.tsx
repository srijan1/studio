'use client';
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
  const dateTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const message = `I donated a custom amount to Shri Gopal Krishna Gaushala Seva Trust on ${dateTime}. Receipt attached.`;
  const whatsappLink = `https://wa.me/+919910857835?text=${encodeURIComponent(message)}`;

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
          Join Shri Gopal Krishna Gaushala Seva Trust in our mission to provide sanctuary, nourishment, and lifelong care to cows in need. Your compassion can change their world.
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
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Notify Admin on WhatsApp</Button>
                </a>
            </div>
            <div className="flex flex-col gap-4 text-left">
                <h2 className="font-headline text-3xl text-white">Donate &amp; also get Tax benefit under 80G of Income Tax</h2>
                <p className="max-w-md text-base text-gray-200">
                <span className="font-headline text-xl">Bank Details:</span><br />
                    Name: Shri Gopal Krishna Gaushala Sewa Trust<br />
                    Ac.no. : 1359020000000928<br />
                    Bank Name: Utkarsh Small Finance Bank<br />
                    IFSC Code : UTKS0001359
                    <br /><br />
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
                        </div>
            </div>
        </div>
      </div>
    </section>
  );
}
