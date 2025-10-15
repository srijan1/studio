import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Home, Stethoscope, BookHeart } from 'lucide-react';
import Image from 'next/image';

const activities = [
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Loving Shelter',
    description: 'A safe, clean, and loving home for homeless, abandoned, and ailing cows, where they are treated as family.',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    title: 'Medical Care',
    description: 'Our dedicated veterinary team provides regular check-ups, emergency treatment, and compassionate care to restore health.',
  },
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Peaceful Retirement',
    description: 'Elderly and non-milking cows live out their natural lives in a serene environment, honored for their years of service.',
  },
];

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'logo-icon');

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl">Our Sacred Duty</h2>
            <p className="mt-4 max-w-4xl mx-auto text-lg text-muted-foreground">
                In Vedic culture, the cow is revered as 'Gau Mata'—the universal mother. Serving her is the highest form of service. At Shri Gopal Krishna Gaushala, we are dedicated to this sacred principle of 'Gau Seva,' ensuring every cow receives the love, dignity, and care she deserves.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h3 className="font-headline text-3xl mb-4">A Sanctuary of Lifelong Compassion</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                Our Gaushala is more than a shelter; it is a sanctuary where mother cows, bulls, and calves are protected from neglect and slaughter. We rescue them from suffering and provide nutritious food, clean water, and a peaceful environment to live out their lives in tranquility. Our commitment is lifelong, ensuring they are always treated with the reverence and love befitting a mother.
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
                        className="rounded-lg shadow-xl mx-auto w-full h-auto"
                        data-ai-hint={aboutImage.imageHint}
                    />
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
