<template>
    <div>
        <sample />
        {{ filters() }}
    </div>
</template>

<script lang="ts">
import IUser from '~/api/samples/models/IUser'
import { $number } from '~/api/shine/classes/NumberFilterBuilder'
import { $string } from '~/api/shine/classes/StringFilterBuilder'
import { Filter } from '~/api/shine/types/Filter'
import Sample from '~/components/samples/sample.vue'

export default {
    name: 'index',

    components: { Sample },

    methods: {
        filters(): Filter<IUser> {
            return {
                post: {
                    title: $string(),
                    comments: {
                        content: $string(),
                        likes: $number(),
                        dislikes: $number()
                    }
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
