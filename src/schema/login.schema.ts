import * as z from 'zod'
export const loginSchema = z.object ({
    email:z.email("Invalid Email"),
    password:z.string().min(6 , "min length is 6").max(20 , "max length is 20"),
})
export type loginSchemaType = z.infer<typeof loginSchema>