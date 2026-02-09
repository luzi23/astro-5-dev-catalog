
import { defineCollection, z  } from "astro:content";
// z ->zod schema, para validar schemas, tipos de datos, etc.

const albums = defineCollection({
    schema: z.object({
        title: z.string(),
        img : z.string(),
        price: z.string(),
    }),
})

export const collections = { albums } 

