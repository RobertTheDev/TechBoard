<template>
  <Form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/4"
    :validation-schema="signInSchema"
    @submit="handleSignUp"
  >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2"
        >Email Address</label
      >
      <Field
        id="emailAddress"
        type="email"
        name="emailAddress"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Username"
      />
      <ErrorMessage name="emailAddress" class="text-red-500 text-xs italic" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input
        id="password"
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="******************"
      />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Sign In
    </button>
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
