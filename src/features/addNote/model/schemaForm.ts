import { z } from "zod";


export const schemaNote = z.object({
    title: z.string().min(1, { message: 'Это поле обязательное' }),
    body: z.string().min(1, { message: 'Это поле обязательное' }),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)
})
export type NoteAddSchema = z.infer<typeof schemaNote>