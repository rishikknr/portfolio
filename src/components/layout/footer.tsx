import { Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="border-t">
      <div className="container mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let’s build something meaningful.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="mailto:rishikknr@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
            <Link href="https://www.linkedin.com/in/rishik-knr/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
