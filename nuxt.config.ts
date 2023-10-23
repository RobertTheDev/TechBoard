import companyName from './lib/constants/companyName'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      titleTemplate: `%s - ${companyName}`,
      charset: 'utf-8',
      meta: [
        {
          name: 'description',
          content:
            'TechBoard is an online marketplace for finding tech jobs online. This is not a commercial website and is part of a portfolio developed by Robert the Dev.',
        },
      ],
    },
  },
})
