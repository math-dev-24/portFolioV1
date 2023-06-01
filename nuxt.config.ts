// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@unocss/nuxt',"@nuxt/image-edge", ['@vee-validate/nuxt', {autoImport: true , componentNames: {Form: "VeeForm", Field: "VeeField", FieldArray: "VeeFieldArray"}}]], 
    css: ['@/assets/main.sass'],
    app : {
        head: {
            htmlAttrs: {
                lang: 'fr'
            }
        }
    }
})
