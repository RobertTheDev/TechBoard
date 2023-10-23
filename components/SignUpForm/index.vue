<template>
  <Form :validation-schema="signUpSchema" @submit="handleSignUp">
    <Field type="email" name="emailAddress" />
    <ErrorMessage name="emailAddress" />
    <button type="submit">Sign Up</button>
  </Form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Form, Field, ErrorMessage } from 'vee-validate'
import signUpValidationSchema from '~/models/auth/validators/signUp.schema'

const signUpSchema = toTypedSchema(signUpValidationSchema)

function handleSignUp(values: unknown) {
  alert(JSON.stringify(values))
}
</script>
