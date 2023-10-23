import { object, string, z } from 'zod'

// Zod validation schema defines fields required for signing in a user.
const signInValidationSchema = object({
  emailAddress: string({
    required_error: 'Email address is required.',
    invalid_type_error: 'Email address must be a string.',
  })
    .min(1, { message: 'Email address cannot be empty.' })
    .email({ message: 'Email address must be a valid email format.' }),
})

// Create a TypeScript type from the schema.
export type SignInValidationSchemaType = z.infer<typeof signInValidationSchema>

export default signInValidationSchema
