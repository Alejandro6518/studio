
'use server';
/**
 * @fileOverview An AI assistant that provides reflective questions and comments
 * based on a user's decision in a hypothetical dilemma, encouraging self-awareness
 * about the fear of error and decision-making processes.
 *
 * - reflectOnDecision - A function that triggers the reflection process.
 * - ReflectionAssistantInput - The input type for the reflectOnDecision function.
 * - ReflectionAssistantOutput - The return type for the reflectOnDecision function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ReflectionAssistantInputSchema = z.object({
  dilemmaDescription: z
    .string()
    .describe('The hypothetical dilemma presented to the user.'),
  userDecision: z
    .string()
    .describe('The choice made by the user in response to the dilemma.'),
  userReflection: z
    .string()
    .optional()
    .describe('Optional user reflection or reasoning behind their decision.'),
});
export type ReflectionAssistantInput = z.infer<typeof ReflectionAssistantInputSchema>;

const ReflectionAssistantOutputSchema = z.object({
  reflectiveQuestions: z
    .array(z.string())
    .describe(
      "A list of open-ended questions designed to encourage self-reflection on the user's decision and the fear of error."
    ),
  insightfulComments: z
    .array(z.string())
    .describe(
      "A list of personalized comments or insights based on the user's choice, aimed at deepening self-awareness."
    ),
});
export type ReflectionAssistantOutput = z.infer<typeof ReflectionAssistantOutputSchema>;

export async function reflectOnDecision(
  input: ReflectionAssistantInput
): Promise<ReflectionAssistantOutput> {
  return reflectionAssistantFlow(input);
}

const reflectionPrompt = ai.definePrompt({
  name: 'reflectionAssistantPrompt',
  input: { schema: ReflectionAssistantInputSchema },
  output: { schema: ReflectionAssistantOutputSchema },
  prompt: `You are an empathetic reflection assistant named 'Radiografía Social'. Your goal is to help users understand their decision-making process, especially concerning the fear of making mistakes.

Given the following hypothetical dilemma and the user's choice, generate a set of open-ended reflective questions and personalized, insightful comments. Focus on probing the user's motivations, potential fears (especially the fear of error), and the implications of their choice. Encourage self-awareness and a growth mindset.

Present 3 to 5 reflective questions and 2 to 3 insightful comments.

Dilemma: {{{dilemmaDescription}}}
User's Choice: {{{userDecision}}}
{{#if userReflection}}User's Reasoning: {{{userReflection}}}{{/if}}

Think step-by-step to formulate your response, ensuring it directly addresses the user's input and promotes deeper understanding. The questions should be open-ended and the comments encouraging and thought-provoking. Ensure your output strictly adheres to the JSON schema.`,
});

const reflectionAssistantFlow = ai.defineFlow(
  {
    name: 'reflectionAssistantFlow',
    inputSchema: ReflectionAssistantInputSchema,
    outputSchema: ReflectionAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await reflectionPrompt(input);
    return output!;
  }
);
