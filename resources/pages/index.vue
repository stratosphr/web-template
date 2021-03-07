<template>
    <div
        id="container"
        class="red mx-auto"
        style="width: 400px; height: 1000px"
    >
        <div
            :style="{width: '100px', height: '100px', border: `solid 1px ${$colors.blue.base}`, backgroundColor: $colors.blue.lighten5}"
            class="draggable"
        >
            <v-row
                align="center"
                class="fill-height"
                no-gutters
            >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    Drag me
                </v-col>
                <v-col
                    class="text-center"
                    cols="12"
                >
                    <v-btn
                        class="caption"
                        outlined
                        style="text-transform: none"
                        x-small
                    >
                        <v-icon
                            left
                            x-small
                            v-text="'mdi-eye'"
                        />
                        Click me
                    </v-btn>
                </v-col>
            </v-row>
        </div>
        <!--        <div-->
        <!--            :style="{width: '200px', height: '200px', border: `solid 1px ${$colors.green.base}`, backgroundColor: $colors.green.lighten5}"-->
        <!--            class="draggable-horizontally"-->
        <!--        >-->
        <!--            I can only be dragged horizontally-->
        <!--        </div>-->
        <!--        <div-->
        <!--            :style="{width: '100px', height: '100px', border: `solid 1px ${$colors.amber.base}`, backgroundColor: $colors.amber.lighten5}"-->
        <!--            class="draggable-vertically"-->
        <!--        >-->
        <!--            I can only be dragged vertically-->
        <!--        </div>-->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DraggableHandlers = {
    start?: (e?: MouseEvent) => void,
    drag?: (e?: MouseEvent) => void,
    stop?: (e?: MouseEvent) => void
}

export type DraggableOptions = {
    userSelect?: boolean,
    ghost?: boolean,
    axis?: 'all' | 'horizontal' | 'vertical',
    deep?: boolean,
}

export default Vue.extend({
    name: 'index',

    mounted() {
        this.draggable('.draggable', {}, { ghost: false, axis: 'all' })
        this.draggable('.draggable-horizontally', {}, { ghost: false, axis: 'horizontal' })
        this.draggable('.draggable-vertically', {}, { ghost: false, axis: 'vertical' })
    },

    methods: {
        draggable(selectors: string | string[], handlers: DraggableHandlers = {}, options: DraggableOptions = {}) {
            const { start, drag, stop } = Object.assign(handlers, {
                start: () => {
                },
                drag: () => {
                },
                stop: () => {
                }
            })
            const { userSelect, ghost, axis, deep } = Object.assign({ userSelect: false, ghost: false, axis: 'all', deep: true }, options) as DraggableOptions
            const nodes = document.querySelectorAll(Array.isArray(selectors) ? selectors.join(', ') : selectors)
            if (nodes.length) {
                nodes.forEach((node: Element) => {
                    if (node instanceof HTMLElement) {
                        if (!userSelect) {
                            node.style.userSelect = 'none'
                        }
                        node.addEventListener('mousedown', (e: MouseEvent) => {
                            let mouseMoveHandler: (e: MouseEvent) => void
                            switch (axis) {
                            case 'horizontal':
                                mouseMoveHandler = (e: MouseEvent) => {
                                    element.style.left = `${e.clientX - offsetX}px`
                                    drag && drag(e)
                                }
                                break
                            case 'vertical':
                                mouseMoveHandler = (e: MouseEvent) => {
                                    element.style.top = `${e.clientY - offsetY}px`
                                    drag && drag(e)
                                }
                                break
                            default:
                                mouseMoveHandler = (e: MouseEvent) => {
                                    element.style.left = `${e.pageX - offsetX - parent.offsetLeft}px`
                                    element.style.top = `${e.pageY - offsetY - parent.offsetTop}px`
                                    drag && drag(e)
                                }
                                break
                            }
                            document.addEventListener('mousemove', mouseMoveHandler, true)
                            document.addEventListener('mouseup', (e: MouseEvent) => {
                                document.removeEventListener('mousemove', mouseMoveHandler, true)
                                if (ghost) {
                                    element.style.opacity = node.style.opacity
                                    node.remove()
                                    this.draggable(selectors, handlers, options)
                                }
                                stop && stop(e)
                            }, { once: true })
                            const parent = node.parentElement! as HTMLElement
                            const element = ghost ? node.cloneNode(deep) as HTMLElement : node
                            const { left, top } = { left: node.offsetLeft, top: node.offsetTop }
                            parent.appendChild(element)
                            parent.style.overflow = 'auto'
                            const { offsetX, offsetY } = { offsetX: e.pageX - left, offsetY: e.pageY - top }
                            element.style.position = 'relative'
                            element.style.left = `${left - parent.offsetLeft}px`
                            element.style.top = `${top - parent.offsetTop}px`
                            element.style.zIndex = '999999999999999'
                            if (ghost) {
                                element.style.opacity = '0.4'
                            }
                            start && start(e)
                        })
                    }
                })
            }
        }
    }
})
</script>

<style scoped>

</style>
