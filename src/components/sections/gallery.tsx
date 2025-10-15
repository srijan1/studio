"use client";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Slider from 'react-slick';

export function Gallery() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl">Glimpses of Our Gaushala</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A picture is worth a thousand words. Here are a few moments from the lives of our beloved cows.
          </p>
        </div>
        <Slider {...settings}>
          {galleryImages.map((image) => (
            <div key={image.id} className="px-2">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src={image.imageUrl}
                        alt={image.description}
                        className="w-full h-auto"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
