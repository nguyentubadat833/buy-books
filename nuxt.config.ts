// https://nuxt.com/docs/api/configuration/nuxt-config
import meta from './content/meta.json'
export default defineNuxtConfig({
    devtools: {enabled: true},
    devServer: {
        port: 3006
    },
    runtimeConfig: {},
    modules: [
        '@nuxt/content',
        '@nuxthq/studio',
        '@nuxt/ui',
        '@nuxt/image'
    ],
    app: {
        head: {
            title: meta.site.namePage
        }
    },
    css: [
        '@/assets/style/main.scss'
    ],
    routeRules: {
        '/': {prerender: true}
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    silenceDeprecations: ["legacy-js-api"]

                }
            }
        }
    }
})