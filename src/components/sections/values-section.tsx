import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { values } from '@/lib/data';

export default function ValuesSection() {
  return (
    <section id="values" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            My Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            The principles that guide my work and decisions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <Card key={index} className="border-border/50 bg-card/50 text-center transition-all duration-300 hover:bg-card hover:shadow-primary/10 hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <CardTitle className="pt-4 text-xl font-semibold text-foreground">{value.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
