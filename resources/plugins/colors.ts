import Vue from 'vue'
import colors from 'vuetify/lib/util/colors'

Vue.use({
    install(Vue: any) {
        Vue.$colors = colors
        Vue.prototype.$colors = colors
    }
})
