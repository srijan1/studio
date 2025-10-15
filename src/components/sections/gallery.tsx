"use client";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Gallery() {
  const galleryItems = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl">Glimpses of Our Gaushala</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A picture is worth a thousand words. Here are a few moments from the lives of our beloved cows.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item) => (
                <div key={item.id} className="grid gap-4">
                    <div className="overflow-hidden rounded-lg">
                        {item.type === 'image' ? (
                            <img
                                src={item.imageUrl}
                                alt={item.description}
                                className="w-full h-auto object-cover"
                                data-ai-hint={item.imageHint}
                            />
                        ) : (
                            <video controls className="w-full h-auto">
                                <source src={item.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
