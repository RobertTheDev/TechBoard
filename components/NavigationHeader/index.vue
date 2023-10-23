<template>
  <header class="flex h-16 justify-center gap-4 shadow-md items-center">
    <div>
      <h1>Logo</h1>
    </div>
    <div>
      <nav class="flex gap-4">
        <NuxtLink
          v-for="navigationLink in navigationLinks"
          :key="navigationLink.url"
          :to="navigationLink.url"
          >{{ navigationLink.name }}</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
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
