import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { UtensilsCrossed, ShieldCheck, Home } from 'lucide-react';
import Image from 'next/image';

const donationTiers = [
  {
    amount: '1,100',
    description: 'Feed a cow for a week.',
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
  },
  {
    amount: '5,100',
    description: 'Sponsor medical care for a month.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    amount: '11,000',
    description: 'Contribute to shelter infrastructure.',
    icon: <Home className="w-8 h-8 text-primary" />,
  },
];

export function Donation() {
  const donationBg = PlaceHolderImages.find((img) => img.id === 'donation-bg');

  return (
    <section id="donate" className="py-16 md:py-24 relative">
        {donationBg && (
            <Image
                src={donationBg.imageUrl}
                alt={donationBg.description}
                fill
                className="object-cover opacity-10"
                data-ai-hint={donationBg.imageHint}
            />
        )}
      <div className="container relative z-10">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Be a Gau-Sevak Today</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Your generosity provides a lifeline to our beloved cows. Choose a way to give and become a part of their story of hope and healing.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationTiers.map((tier) => (
            <Card key={tier.amount} className="text-center flex flex-col bg-card/80 backdrop-blur-sm">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent rounded-full mb-4">
                    {tier.icon}
                </div>
                <CardTitle className="font-headline text-4xl">₹{tier.amount}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button className="w-full">Donate ₹{tier.amount}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mt-12 max-w-lg mx-auto bg-card/80 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-center">Give a Custom Amount</CardTitle>
                <CardDescription className="text-center">Every rupee makes a difference in the life of a cow.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">₹</span>
                    <Input type="number" placeholder="Enter amount" className="text-lg h-12 bg-background" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" size="lg">Donate Custom Amount</Button>
            </CardFooter>
        </Card>
      </div>
    </section>
  );
}
