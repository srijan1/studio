import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Home, Stethoscope } from 'lucide-react';
import Image from 'next/image';

const activities = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Loving Shelter',
    description: 'We provide a safe, clean, and loving home for homeless, abandoned, and sick cows.',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: 'Medical Care',
    description: 'Our on-site veterinary team offers regular check-ups and emergency medical treatment.',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Peaceful Retirement',
    description: 'Elderly and non-milking cows live out their natural lives in peace and dignity.',
  },
];

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-1');

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Our Sacred Duty</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                At Shri Gopal Krishna Seva Trust, we are dedicated to the principle of 'Gau Seva' – serving the cow, who is revered as a mother in our culture. We believe every cow deserves to live a life free from suffering and filled with care.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h3 className="font-headline text-3xl mb-4">A Sanctuary of Compassion</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                Shri Gopal Krishna Seva Trust is more than just a shelter; it's a home. We rescue cows from neglect and abandonment, providing them with nutritious food, clean water, medical attention, and a peaceful environment where they can thrive. Our commitment extends for their entire lifetime, ensuring they are always treated with the dignity and love they deserve.
                </p>
                <div className="grid grid-cols-1 gap-6 mt-8">
                {activities.map((activity) => (
                    <div key={activity.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-background rounded-full">{activity.icon}</div>
                        <div>
                            <h4 className="text-xl font-bold font-headline">{activity.title}</h4>
                            <p className="text-muted-foreground mt-1">{activity.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="order-1 md:order-2">
                {aboutImage && (
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        width={500}
                        height={350}
                        className="rounded-lg shadow-xl mx-auto"
                        data-ai-hint={aboutImage.imageHint}
                    />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
