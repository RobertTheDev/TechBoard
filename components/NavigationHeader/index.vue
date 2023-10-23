<template>
  <header
    class="flex h-16 justify-center gap-4 shadow-lg border-b-1 border-b-slate-500 items-center bg-white px-8"
  >
    <div class="flex justify-start flex-1 gap-10">
      <div>
        <h1 class="text-blue-600 font-bold text-3xl">{{ companyName }}</h1>
      </div>
      <nav class="flex items-center justify-center gap-10">
        <NuxtLink
          v-for="navigationLink in navigationLinks"
          :key="navigationLink.url"
          :to="navigationLink.url"
          >{{ navigationLink.name }}</NuxtLink
        >
      </nav>
    </div>
    <div class="flex justify-end flex-1">
      <div>
        <button
          class="px-12 py-2 text-white font-medium rounded-md bg-blue-500"
        >
          Sign In
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import companyName from '~/lib/constants/companyName'
const navigationLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Profile',
    url: '/profile',
  },
]
</script>
