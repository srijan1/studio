import { Header } from '@/components/layout/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Gallery } from '@/components/sections/gallery';
import { Donation } from '@/components/sections/donation';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { AnimatedWrapper } from '@/components/animated-wrapper';
import { TopBar } from '@/components/layout/top-bar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background antialiased">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedWrapper>
          <About />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <Donation />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <Gallery />
        </AnimatedWrapper>
        <AnimatedWrapper>
          <Contact />
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
}
