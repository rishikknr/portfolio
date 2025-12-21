
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ventures } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function VentureDetailPage({ params }: { params: { ventureName: string } }) {
  const venture = ventures.find(v => v.name.toLowerCase() === params.ventureName);

  if (!venture) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mb-12">
              <Button asChild variant="ghost">
                <Link href="/#ventures">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Ventures
                </Link>
              </Button>
            </div>

            <h1 className="font-headline text-5xl font-bold text-primary">{venture.name}</h1>
            <p className="mt-4 text-2xl font-semibold text-foreground">{venture.tagline}</p>
            
            <div className="my-12 aspect-video overflow-hidden rounded-xl border border-border/20 shadow-lg shadow-black/20">
              {venture.videoUrl && (
                <iframe
                  className="h-full w-full"
                  src={venture.videoUrl.replace('youtu.be/', 'youtube.com/embed/')}
                  title={venture.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <h2 className="font-headline text-3xl font-semibold text-foreground">The Story</h2>
              <p>{venture.story}</p>

              <h2 className="font-headline text-3xl font-semibold text-foreground">My Role: {venture.role}</h2>

              <h3 className="font-headline text-2xl font-semibold text-foreground">Key Details</h3>
              <ul>
                {venture.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              <blockquote className="border-l-2 border-primary/50 pl-4 italic">
                <strong>Vision:</strong> {venture.vision}
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
