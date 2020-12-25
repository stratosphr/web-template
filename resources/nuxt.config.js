export default {
    ssr: false,
    watch: ['api/**/*.{js,ts}'],
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify'
    ],
    vuetify: {
        treeShake: true,
        customVariables: ['assets/variables.sass']
    }
}
