// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-auth-sanctum",
  ],
  sanctum: {
    baseUrl: 'http://localhost',
    redirectIfAuthenticated: true,
    endpoints: {
      login: '/api/auth/login',
    }
  },
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})