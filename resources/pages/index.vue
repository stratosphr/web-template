<template>
    <div id="container">
        <div
            id="draggable"
            :style="{width: '100px', height: '100px', border: `solid 1px ${$colors.blue.base}`, backgroundColor: $colors.blue.lighten5}"
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
        <div
            :style="{width: '200px', height: '200px', border: `solid 1px ${$colors.green.base}`, backgroundColor: $colors.green.lighten5}"
            class="drag"
        >
            Also drag me
        </div>
        <div :style="{width: '100px', height: '100px', border: `solid 1px ${$colors.red.base}`, backgroundColor: $colors.red.lighten5}">
            I shouldn't be draggable
        </div>
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
    deep?: boolean,
}

export default Vue.extend({
    name: 'index',

    mounted() {
        this.draggable('#draggable', {}, { ghost: true })
        this.draggable('.drag')
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
            const { userSelect, deep, ghost } = Object.assign({ userSelect: false, ghost: false, deep: true }, options)
            const nodes = document.querySelectorAll(Array.isArray(selectors) ? selectors.join(', ') : selectors)
            if (nodes.length) {
                nodes.forEach((node: Element) => {
                    if (node instanceof HTMLElement) {
                        if (!userSelect) {
                            node.style.userSelect = 'none'
                        }
                        node.addEventListener('mousedown', (e: MouseEvent) => {
                            e.preventDefault()
                            const mouseMoveHandler = (e: MouseEvent) => {
                                element.style.left = `${e.clientX - offsetX}px`
                                element.style.top = `${e.clientY - offsetY}px`
                                drag && drag(e)
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
                            const element = ghost ? node.cloneNode(deep) as HTMLElement : node
                            const { left, top } = node.getBoundingClientRect()
                            const { offsetX, offsetY } = { offsetX: e.clientX - left, offsetY: e.clientY - top }
                            document.getElementById('app')!.appendChild(element)
                            element.style.position = 'absolute'
                            element.style.left = `${left}px`
                            element.style.top = `${top}px`
                            element.style.zIndex = '999999999999999999999999999999999999999999999999'
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
