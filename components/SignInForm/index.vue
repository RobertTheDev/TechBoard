<template>
  <Form :validation-schema="signInSchema" @submit="handleSignUp">
    <Field type="email" name="emailAddress" />
    <ErrorMessage name="emailAddress" />
    <button type="submit">Sign In</button>
  </Form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Form, Field, ErrorMessage } from 'vee-validate'
import signInValidationSchema from '~/models/auth/validators/signUp.schema'

const signInSchema = toTypedSchema(signInValidationSchema)

function handleSignUp(values: unknown) {
  alert(JSON.stringify(values))
}
</script>
