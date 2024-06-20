// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-auth-sanctum"],
  sanctum: {
    baseUrl: 'http://localhost',
    endpoints: {
      login: '/api/auth/login',
    }
  }
})