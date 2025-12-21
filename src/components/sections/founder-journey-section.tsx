import { founderJourney } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FounderJourneySection() {
  return (
    <section id="journey" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Founder Journey
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            {founderJourney.introduction}
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
                <div>
                    <h3 className="font-headline text-2xl font-semibold text-primary">{founderJourney.originStory.title}</h3>
                    <p className="mt-4 text-muted-foreground">{founderJourney.originStory.content}</p>
                </div>
                 <div>
                    <h3 className="font-headline text-2xl font-semibold text-primary">{founderJourney.motivation.title}</h3>
                    <p className="mt-4 text-muted-foreground">{founderJourney.motivation.content}</p>
                </div>
            </div>
            <div>
                 <Card className="h-full bg-card/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl font-semibold text-primary">{founderJourney.philosophy.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {founderJourney.philosophy.items.map((item) => (
                            <div key={item.title}>
                                <h4 className="font-semibold text-foreground">{item.title}</h4>
                                <p className="mt-1 text-muted-foreground">{item.content}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
