// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt3-leaflet','@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'myAppExamplePWA',
      short_name: 'PWA Example',
      description: 'pwa with nuxt3',
      start_url: '/',
      display: 'minimal-ui',
      background_color: '#ffffff',
      icons: [
        {
          src: '/OIG4_192.jpeg',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/OIG4_512.jpeg',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      theme_color: '#000000'
    },  
  },
})
