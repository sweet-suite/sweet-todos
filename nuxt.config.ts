// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    extends: [
        'github:sweet-suite/Sweet-Base'
    ],
    routeRules: {
        '/app/**': { ssr: false },
        '/': { ssr: false },
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
})
