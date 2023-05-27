import { z, defineCollection } from 'astro:content';

/**
 * @see {@link https://docs.astro.build/en/guides/content-collections/#defining-collections}
 */

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    section: z.string(),
    active: z.boolean().optional(),
    progress: z.enum(['wip', 'draft', 'planned', 'ready']),
    isHeadingsDisabled: z.boolean().optional()
  })
});

export const collections = {
  'docs': docsCollection,
};