<template>
  <div>
    <button @click="handleFormType('signIn')">Sign In</button>
    <button @click="handleFormType('signUp')">Sign Up</button>
    <SignInForm v-if="formType === 'signIn'" />
    <SignUpForm v-if="formType === 'signUp'" />
  </div>
</template>

<script setup lang="ts">
const formType = ref('signIn')

function handleFormType(type: string) {
  formType.value = type
}
</script>
