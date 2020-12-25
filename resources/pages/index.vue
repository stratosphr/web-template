<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-card>
                    <v-card-text>
                        <sample />
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
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
                post: [
                    {
                        title: [
                            $string().contains('test'),
                            $string().endsWith('hello')
                        ],
                        comments: [
                            {
                                content: $string(),
                                likes: $number(),
                                dislikes: [
                                    $number(),
                                    $number()
                                ]
                            },
                            {
                                content: $string()
                            }
                        ]
                    }
                ],
                name: $string().like('hello%world')
            }
        }
    }
}
</script>

<style scoped>

</style>
