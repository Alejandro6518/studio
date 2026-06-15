'use server';
/**
 * @fileOverview A Genkit flow for generating hypothetical personal or ethical dilemmas.
 *
 * - generateDilemma - A function that handles the dilemma generation process.
 * - DilemmaGeneratorInput - The input type for the generateDilemma function.
 * - DilemmaGeneratorOutput - The return type for the generateDilemma function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DilemmaGeneratorInputSchema = z
  .object({
    userContext: z
      .string()
      .optional()
      .describe(
        'Optional context about the user to help tailor the dilemma. E.g., "I am a student considering career choices."
'
      ),
  })
  .describe('Input for the dilemma generator, optionally including user context.');
export type DilemmaGeneratorInput = z.infer<typeof DilemmaGeneratorInputSchema>;

const DilemmaGeneratorOutputSchema = z
  .object({
    title: z.string().describe('A concise title for the generated dilemma.'),
    dilemma: z
      .string()
      .describe('The hypothetical personal or ethical dilemma.'),
  })
  .describe('Output containing the generated dilemma with a title and description.');
export type DilemmaGeneratorOutput = z.infer<
  typeof DilemmaGeneratorOutputSchema
>;

export async function generateDilemma(
  input: DilemmaGeneratorInput
): Promise<DilemmaGeneratorOutput> {
  return dilemmaGeneratorFlow(input);
}

const dilemmaGeneratorPrompt = ai.definePrompt({
  name: 'dilemmaGeneratorPrompt',
  input: {schema: DilemmaGeneratorInputSchema},
  output: {schema: DilemmaGeneratorOutputSchema},
  prompt: `You are a dilemma generator for a project about the influence of fear of error in personal decision-making. Your task is to create a short, hypothetical, and engaging personal or ethical dilemma that invites the user to make a decision and reflect on the potential fear of making a mistake.

The dilemma should be relevant to common life situations where uncertainty and the fear of negative consequences are present. It should be presented with a clear title and a brief description of the scenario.

If the user provides a context, try to subtly adapt the dilemma to fit that context.

User Context (if provided): {{{userContext}}}

Generate the dilemma in the specified JSON format.`,
});

const dilemmaGeneratorFlow = ai.defineFlow(
  {
    name: 'dilemmaGeneratorFlow',
    inputSchema: DilemmaGeneratorInputSchema,
    outputSchema: DilemmaGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await dilemmaGeneratorPrompt(input);
    return output!;
  }
);
