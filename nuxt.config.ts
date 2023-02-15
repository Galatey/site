// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server'
  },
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ },
  css: [
    '@/assets/css/reset.css',
  ]
})
