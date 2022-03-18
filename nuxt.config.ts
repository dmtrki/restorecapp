import { defineNuxtConfig } from 'nuxt3'
import * as path from "path"
import TypedRouter from 'nuxt-typed-router'

export default defineNuxtConfig({
    publicRuntimeConfig: {
        GQL_HOST: process.env.GQL_HOST
    },
    privateRuntimeConfig: {
        API_SECRET: process.env.API_SECRET
    },
    dev: true,
    meta: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: [
        '@/assets/scss/common.scss',
        'primevue/resources/primevue.css', // https://github.com/primefaces/primevue
        'primevue/resources/themes/saga-blue/theme.css',
        'primeicons/primeicons.css'
    ],
    modules: [
      '@formkit/nuxt' // https://formkit.com/essentials/installation
    ],
    buildModules: [
        "@pinia/nuxt", // pinia plugin - https://pinia.esm.dev
        '@vueuse/nuxt', // https://vueuse.org/guide/
        'nuxt-graphql-client', // https://github.com/Diizzayy/nuxt-graphql-client
        'vue-types/nuxt', // https://dwightjack.github.io/vue-types/guide/installation.html#nuxtjs
        TypedRouter //https://github.com/victorgarciaesgi/nuxt-typed-router
    ],
    vueuse: {
        ssrHandlers: true,
    },
    build: {
        transpile: [
            'tslib',
            'vant', //https://github.com/jian652485051/nuxt-vant/blob/master/nuxt.config.js
            'primevue'
        ]
    },
    vue: {
        compilerOptions: {
            directiveTransforms: {
                touch: () => ({
                    props: [],
                    needRuntime: true
                })
            }
        }
    },
    vite: {
        resolve: {
            alias: {
                'node_modules': path.resolve(__dirname, './node_modules'),
                'assets': path.resolve(__dirname, './assets')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/system.scss";',
                },
            },
        },
        logLevel: "info",
        optimizeDeps: {
            include: [
                '@headlessui/vue',
                '@heroicons/vue/outline',
                'vue',
                'pinia'
            ]
        }
    }
});
