"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getVentureInsightsAction } from '@/app/actions/get-venture-insights';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import type { Venture } from '@/lib/types';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  summary: '',
  error: null,
};

type VentureAIToolProps = {
  ventures: Pick<Venture, 'name'>[];
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Get Insights
    </Button>
  );
}

export default function VentureAITool({ ventures }: VentureAIToolProps) {
  const [state, formAction] = useFormState(getVentureInsightsAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <Card className="bg-gradient-to-br from-background to-card">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Wand2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="font-headline text-2xl text-foreground">AI-Powered Insights</CardTitle>
            <CardDescription>Ask a question about a venture to get an AI-generated summary.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <Select name="ventureName" defaultValue={ventures[0]?.name} required>
              <SelectTrigger className="sm:col-span-1">
                <SelectValue placeholder="Select a venture" />
              </SelectTrigger>
              <SelectContent>
                {ventures.map((v) => (
                  <SelectItem key={v.name} value={v.name}>{v.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              name="userQuestion"
              placeholder="e.g., What was the main challenge?"
              required
              className="sm:col-span-2"
            />
          </div>
          <SubmitButton />
        </form>
        {state.summary && (
          <div className="mt-6 rounded-lg border bg-background/50 p-6">
            <h4 className="font-semibold text-foreground">AI Insights:</h4>
            <p className="mt-2 whitespace-pre-wrap text-muted-foreground">{state.summary}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
