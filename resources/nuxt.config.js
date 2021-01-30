export default {
    ssr: false,
    watch: ['api/**/*.{js,ts}'],
    router: {
        middleware: [
            'auth'
        ]
    },
    head: {
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ]
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],
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
    },
    axios: {
        baseURL: 'http://web-template/api'
    }
}
