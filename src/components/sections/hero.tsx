import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

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
