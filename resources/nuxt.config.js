export default {
    ssr: false,
    watch: ['api/**/*.{js,ts}'],
    loading: false,
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
        '~/plugins/echo.ts',
        '~/plugins/lodash.ts'
    ],
    vuetify: {
        treeShake: true,
        customVariables: ['assets/variables.sass']
    },
    axios: {
        baseURL: 'http://web-template/api'
    },
    auth: {
        redirect: {
            login: '/login',
            logout: '/login',
            home: false
        },
        strategies: {
            local: {
                scheme: 'refresh',
                token: {
                    property: 'token',
                    required: true,
                    type: 'Bearer'
                },
                refreshToken: {
                    property: 'token'
                },
                user: {
                    property: false,
                    autoFetch: true
                },
                endpoints: {
                    login: {
                        url: 'oauth/login',
                        method: 'post'
                    },
                    user: {
                        url: 'oauth/user',
                        method: 'get'
                    },
                    logout: {
                        url: 'oauth/logout',
                        method: 'post'
                    },
                    refresh: {
                        url: 'oauth/refresh-token',
                        method: 'post'
                    }
                }
            }
        }
    }
}
