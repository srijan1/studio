import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Contact() {
    const mapImage = PlaceHolderImages.find((img) => img.id === 'map');

    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl">Get In Touch</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We would love to hear from you. Visit us, call us, or send us a message.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <Card className="bg-card/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6 text-lg">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Address</h3>
                                    <p className="text-muted-foreground">Shri gopal krishna gaushala, Khaira Village, Najafgarh, New Delhi, India 110043</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Phone</h3>
                                    <p className="text-muted-foreground">+91 9910857835 ,+91 9810177201,+91 9871070380,+91 9891992042,+91 9910133690</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p className="text-muted-foreground">gopalkrishnagaushalasewatrust@gmail.com</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Link href="https://www.google.com/maps?q=28.59297,76.969561&z=17&hl=en" target="_blank" rel="noopener noreferrer">
                        <div className="rounded-lg overflow-hidden shadow-xl cursor-pointer">
                            {mapImage && (
                                <Image
                                    src={mapImage.imageUrl}
                                    alt={mapImage.description}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    data-ai-hint={mapImage.imageHint}
                                />
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
