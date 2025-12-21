'use server';
/**
 * @fileOverview A flow to provide AI-powered summaries and insights for ventures, incorporating specific details to showcase Rishik's thought process.
 *
 * - getVentureInsights - A function that takes a venture name and user question, and returns an AI-generated summary and insights.
 * - VentureInsightsInput - The input type for the getVentureInsights function.
 * - VentureInsightsOutput - The return type for the getVentureInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VentureInsightsInputSchema = z.object({
  ventureName: z.string().describe('The name of the venture (Sanchaya, Revive, or NeuroDam).'),
  userQuestion: z.string().describe('The user question about the venture.'),
});
export type VentureInsightsInput = z.infer<typeof VentureInsightsInputSchema>;

const VentureInsightsOutputSchema = z.object({
  summary: z.string().describe('AI-generated summary and insights incorporating specific details.'),
});
export type VentureInsightsOutput = z.infer<typeof VentureInsightsOutputSchema>;

export async function getVentureInsights(input: VentureInsightsInput): Promise<VentureInsightsOutput> {
  return ventureInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ventureInsightsPrompt',
  input: {schema: VentureInsightsInputSchema},
  output: {schema: VentureInsightsOutputSchema},
  prompt: `You are an AI assistant providing summaries and insights about ventures founded by Rishik KNR. Consider the user's question and Rishik's thought process.

  Venture Name: {{{ventureName}}}
  User Question: {{{userQuestion}}}

  Generate a concise summary and insights incorporating specific details to showcase Rishik's thought process related to the venture. Focus on impact metrics and Rishik's role in the company. Return the information as a string.
`,
});

const ventureInsightsFlow = ai.defineFlow(
  {
    name: 'ventureInsightsFlow',
    inputSchema: VentureInsightsInputSchema,
    outputSchema: VentureInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
