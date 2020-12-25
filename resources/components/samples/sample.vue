<template>
    <span>{{ sample() }}</span>
</template>

<script lang="ts">
import { sampleJS } from '~/api/samples/sample-js'
import { sampleTS } from '~/api/samples/sample-ts'

export default {
    name: 'sample',

    methods: {
        sample(): sampleTS & { subSample: sampleTS } {
            return { ...sampleJS, subSample: sampleJS }
        }
    }
}
</script>

<style scoped>

</style>
