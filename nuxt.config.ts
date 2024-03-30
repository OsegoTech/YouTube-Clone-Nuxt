// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-primevue'],
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ], 
  tailwindcss: {
    cssPath: '~/assets/css/tailwindcss.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    config:{},
    viewer: true
  }
})