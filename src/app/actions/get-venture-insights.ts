"use server";

import { getVentureInsights } from "@/ai/flows/venture-summary-with-ai-insights";
import { z } from "zod";

const schema = z.object({
  ventureName: z.string().min(1, "Venture name is required."),
  userQuestion: z.string().min(1, "A question is required."),
});

type State = {
  summary: string;
  error: string | null;
};

export async function getVentureInsightsAction(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    ventureName: formData.get('ventureName'),
    userQuestion: formData.get('userQuestion'),
  });

  if (!validatedFields.success) {
    return { 
      summary: "",
      error: validatedFields.error.flatten().fieldErrors.userQuestion?.[0] || validatedFields.error.flatten().fieldErrors.ventureName?.[0] || "Invalid input." 
    };
  }

  try {
    const result = await getVentureInsights(validatedFields.data);
    return { summary: result.summary, error: null };
  } catch (error) {
    console.error(error);
    return { 
      summary: "",
      error: "An error occurred while generating insights. Please try again." 
    };
  }
}
