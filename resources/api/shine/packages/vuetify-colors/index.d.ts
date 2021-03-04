import { PluginFunction } from 'vue'
import { Colors } from 'vuetify/es5/util/colors'

declare module 'vue/types/vue' {
    export interface Vue {
        $colors: Colors
    }
}

declare class VuetifyColors {
    static install: PluginFunction<any>
}

export default VuetifyColors
