import draggable from '~/api/shine/packages/vue-transform/draggable'

const VueTransform = {
    install(Vue: any) {
        Vue.$transform = {
            draggable
        }
        Object.defineProperties(Vue.prototype, {
            $transform: {
                get() {
                    return {
                        draggable
                    }
                }
            }
        })
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueTransform)
}

export default VueTransform
