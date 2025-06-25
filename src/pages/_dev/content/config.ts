import { defineCollection, z } from 'astro:content';

// Career collection for professional history
const careerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
    positions: z.array(z.object({
      id: z.string(),
      company: z.string(),
      title: z.string(),
      period: z.string(),
      location: z.string(),
      description: z.string(),
      achievements: z.array(z.string()),
      technologies: z.array(z.string()),
    })),
  }),
});

// Books collection for blog/bookshelf
const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
    books: z.array(z.object({
      title: z.string(),
      subtext: z.string().optional(),
      author: z.string(),
      excerpt: z.string(),
      image: z.string(),
      rating: z.number().min(1).max(5).optional(),
      dateRead: z.string().optional(),
      category: z.string().optional(),
    })),
  }),
});

export const collections = {
  career: careerCollection,
  books: booksCollection,
};