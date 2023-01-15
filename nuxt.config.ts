// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-icon', '@nuxtjs/tailwindcss', '@nuxt/image-edge'
    ],
    app: {
        head: {
            title: 'Joseph Nevin',
            meta: [
                { name: 'description', content: 'Personal website for Joseph Nevin' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            htmlAttrs: {
                lang: 'en'
            }
        }
    },
    image: {
        dir: 'static'
    },
    nitro: {
        preset: 'netlify'
    }
})
