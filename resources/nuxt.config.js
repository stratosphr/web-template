export default {
    ssr: false,
    watch: ['api/**/*.{js,ts}'],
    head: {
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ]
    },
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
