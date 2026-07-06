import { defineCollection, z } from 'astro:content';

const printers = defineCollection({
  type: 'data',
  schema: z.object({
    brand: z.string(),
    model: z.string(),
    class: z.enum(['mobile', 'desktop', 'industrial']),
    connections: z.array(z.enum(['bluetooth', 'wifi', 'usb', 'ethernet'])),
    commandLanguage: z.enum(['ESC/POS', 'ZPL', 'TSPL', 'EPL', 'CPCL', 'SII SDK']),
    printType: z.enum(['thermal-direct', 'thermal-transfer']),
    tested: z.boolean(),
    notes: z.string().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    printerClass: z.enum(['mobile', 'desktop', 'industrial']),
    brand: z.string().optional(),
    publishDate: z.date(),
  }),
});

export const collections = { printers, guides };
