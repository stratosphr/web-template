import colors from 'vuetify/lib/util/colors'

const vuetifyColors = {
    install(Vue) {
        Vue.$colors = colors
        Object.defineProperties(Vue.prototype, {
            $colors: {
                get() {
                    return colors
                }
            }
        })
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vuetifyColors)
}

export default vuetifyColors
