import { PluginFunction } from 'vue'

declare module 'vue/types/vue' {
    export interface Vue {
        $transform: {
            draggable: () => void
        }
    }
}

declare class VueTransform {
    static install: PluginFunction<any>
}

export default VueTransform
