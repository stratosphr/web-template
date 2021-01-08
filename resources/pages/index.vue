<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <v-card>
                    <v-card-title>
                        <v-row align="center">
                            <v-col>
                                <v-divider />
                            </v-col>
                            <v-col>
                                <sample />
                            </v-col>
                            <v-col>
                                <v-divider />
                            </v-col>
                        </v-row>
                    </v-card-title>
                    <v-card-text>
                        <sample />
                        {{ filters }}
                    </v-card-text>
                    <v-card-actions class="blue lighten-3">
                        <v-btn>
                            Test
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import IUser from '~/api/samples/models/IUser'
import { $number } from '~/api/shine/classes/NumberFilterBuilder'
import { cos, sin } from '~/api/shine/classes/NumberFunction'
import { $numberFun } from '~/api/shine/classes/NumberFunctionFilterBuilder'
import { $string } from '~/api/shine/classes/StringFilterBuilder'
import { concat, concatWs } from '~/api/shine/classes/StringFunction'
import { $stringFun } from '~/api/shine/classes/StringFunctionFilterBuilder'
import { Filter } from '~/api/shine/types/Filter'
import Sample from '~/components/samples/sample.vue'

export default {
    name: 'index',

    components: { Sample },

    computed: {
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
                name: $string().like('hello%world'),
                $functions: [
                    $stringFun<IUser>(
                        concat<IUser>(
                            'post.comments.post.comments.post.comments.content',
                            '"test"',
                            'post.comments.post.comments.post.comments.post',
                            'name',
                            'id',
                            'firstname',
                            concat<IUser>('firstname', '"a"', '"Hello, world!"', 'age'),
                            concatWs<IUser>('"post.comments.content"', 'post.comments'),
                            cos<IUser>(sin<IUser>('age'))
                        )
                    ).like('test%'),
                    $stringFun<IUser>(
                        sin<IUser>('id')
                    ).like('test%'),
                    $numberFun<IUser>(
                        sin<IUser>(cos<IUser>('firstname'))
                    ).geq(10)
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>
