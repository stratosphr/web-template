<template>
    <v-app>
        <v-row>
            <v-col>
                <v-card>
                    <sample />
                    <v-card-actions>
                        <v-btn>
                            Test
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                {{ filters() }}
            </v-col>
        </v-row>
    </v-app>
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
