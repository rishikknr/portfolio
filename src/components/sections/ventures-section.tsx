import VentureCard from '@/components/ventures/venture-card';
import VentureAITool from '@/components/ventures/venture-ai-tool';
import { ventures } from '@/lib/data';

export default function VenturesSection() {
  return (
    <section id="ventures" className="bg-card/30 py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ventures
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Building technology to solve real-world problems.
          </p>
        </div>
        <div className="space-y-24">
          {ventures.map((venture, index) => (
            <VentureCard key={venture.name} venture={venture} reverse={index % 2 !== 0} />
          ))}
        </div>
        <div className="mt-24">
          <VentureAITool ventures={ventures.map(({ name }) => ({ name }))} />
        </div>
      </div>
    </section>
  );
}
