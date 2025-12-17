import {z} from "zod";

const urlSchema = z.string().url('Enter a valid URL');

export const projectSchema = z.object({
    id: z.string(),

    title: z
    .string()
    .min(4, 'Title must be at least 4 characters long'),

    description: z
    .string()
    .min(10, 'Description must be at least 10 characters long')
    .max(200, 'Description must be at most 200 characters long'),

    imageUrl: urlSchema
    .optional()
    .or(z.literal('')).nullable(),

    favoriteIconUrl: urlSchema,

    screenshots: z
    .array(urlSchema).max(4, 'Maximum 4 screenshots'),

    technologies: z
    .array(z.string().min(1))
    .min(1, 'Please add at least one technology'),

    href: urlSchema,

    isFavorite: z
    .boolean(),

    type: z
    .string(),
});

export type ProjectFormData = z.infer<typeof projectSchema>