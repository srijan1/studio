"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { UtensilsCrossed, ShieldCheck, Home } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const donationTiers = [
  {
    amount: '1100',
    description: 'Feed a cow for a week.',
    icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
  },
  {
    amount: '5100',
    description: 'Sponsor medical care for a month.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    amount: '11000',
    description: 'Contribute to shelter infrastructure.',
    icon: <Home className="w-8 h-8 text-primary" />,
  },
];

function DonationDialog({ amount, onClose }: { amount: string; onClose: () => void }) {
  const upiLink = `upi://pay?pa=YOUR_UPI_ID&pn=Shri%20Gopal%20Krishna%20Seva%20Trust&am=${amount}&cu=INR`;
  const whatsappLink = `https://wa.me/+91ADMINNUMBER?text=I%20paid%20%E2%82%B9${amount}%20to%20Shri%20Gopal%20Krishna%20Seva%20Trust.%20Receipt%20attached.`;

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Complete Your Donation</DialogTitle>
          <DialogDescription>
            Thank you for your generous contribution. Please follow the steps below to complete your donation.
          </DialogDescription>
        </DialogHeader>
        <div className="text-center my-4">
          <p className="font-semibold text-lg">Click the button below to pay.</p>
          <a href={upiLink} className="inline-block mt-4">
            <Button size="lg">Pay ₹{amount} via UPI</Button>
          </a>
        </div>
        <DialogFooter className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-4">After payment, please notify us on WhatsApp for your 80G recipt.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Notify Admin on WhatsApp</Button>
            </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function Donation() {
  const donationBg = PlaceHolderImages.find((img) => img.id === 'donation-bg');
  const [dialogAmount, setDialogAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonationClick = (amount: string) => {
    setDialogAmount(amount);
  };

  const handleCloseDialog = () => {
    setDialogAmount(null);
  };

  const handleCustomDonation = () => {
    if (customAmount) {
      handleDonationClick(customAmount);
    }
  };

  return (
    <section id="donate" className="py-16 md:py-24 relative">
      {dialogAmount && <DonationDialog amount={dialogAmount} onClose={handleCloseDialog} />}
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
                <CardTitle className="font-headline text-4xl">₹{tier.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button className="w-full" onClick={() => handleDonationClick(tier.amount)}>Donate ₹{tier.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Button>
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
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      className="text-lg h-12 bg-background"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" size="lg" onClick={handleCustomDonation} disabled={!customAmount}>
                  Donate Custom Amount
                </Button>
            </CardFooter>
        </Card>
      </div>
    </section>
  );
}