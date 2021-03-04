module.exports = {
    extends: [
        '@nuxtjs/eslint-config-typescript'
    ],
    globals: {
        'cy': true,
        '_': true
    },
    rules: {
        indent: ['warn', 4],
        'quote-props': ['off'],
        'space-before-function-paren': ['warn', 'never'],
        'vue/html-indent': ['warn', 4],
        'vue/component-definition-name-casing': ['off'],
        'vue/name-property-casing': ['off'],
        'camelcase': ['off'],
        'vue/order-in-components': ['error', {
            'order': [
                'el',
                'name',
                'key',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                ['provide', 'inject'],
                'ROUTER_GUARDS',
                'layout',
                'middleware',
                'validate',
                'scrollToTop',
                'transition',
                'loading',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'emits',
                'setup',
                'asyncData',
                'data',
                'created',
                'mounted',
                'updated',
                'destroyed',
                'fetch',
                'head',
                'computed',
                'watch',
                'watchQuery',
                'methods',
                ['template', 'render'],
                'renderError'
            ]
        }]
    }
}
