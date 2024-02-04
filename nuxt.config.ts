// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt3-leaflet','@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'myAppExamplePWA',
      short_name: 'PWA Example',
      description: 'pwa with nuxt3',
      icons: [],
      theme_color: '#000000'
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})
