// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Noto+Sans+JP': [400, 500, 700],
      'Inter': [400, 500, 700],
      'Roboto': [400, 500, 700]
    },
    display: 'swap'
  }
})
