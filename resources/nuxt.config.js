export default {
    ssr: false,
    watch: ['api/**/*.{js,ts}'],
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify'
    ],
    plugins: [
        '~/plugins/colors.ts',
        '~/plugins/echo.ts'
    ],
    vuetify: {
        treeShake: true,
        customVariables: ['assets/variables.sass']
    }
}
