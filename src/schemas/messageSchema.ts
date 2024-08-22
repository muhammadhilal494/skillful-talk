import {z} from 'zod'

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message:'message must be at least of 10 characters'})
    .max(300, {message:'message must be no longer than 300 characters'})
})