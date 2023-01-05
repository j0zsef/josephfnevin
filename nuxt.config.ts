// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        head: {
            title: 'Joseph Nevin',
            meta: [
                { name: 'description', content: 'Personal website for Joseph Nevin' }
            ]
        }
    },
})
