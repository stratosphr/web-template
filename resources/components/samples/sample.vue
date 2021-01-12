<template>
    <v-row>
        <v-col cols="12">
            <span class="caption">{{ sample() }}</span>
        </v-col>
        <v-col cols="12">
            <v-text-field />
        </v-col>
    </v-row>
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
