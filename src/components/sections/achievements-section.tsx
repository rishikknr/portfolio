import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { achievements } from '@/lib/data';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Achievements & Recognitions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A selection of highlights from my journey.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((ach, index) => (
            <Card key={index} className="flex flex-col justify-center border-border/50 bg-card/50 text-center transition-transform hover:scale-105 hover:bg-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{ach.title}</CardTitle>
                <CardDescription className="text-base text-foreground">{ach.organization}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
