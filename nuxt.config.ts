// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/bootstrap.scss'],
  plugins: [
    { src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.js', mode: 'client'}
  ]
})
