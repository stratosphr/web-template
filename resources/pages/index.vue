<template>
    <v-app>
        <v-main>
            <v-card>
                <v-card-text>{{ count }}</v-card-text>
            </v-card>
            <v-container fluid>
                <s-data-table
                    v-slot="{items}"
                    :headers="headers"
                    :style="{backgroundColor: $colors.lightBlue.base, border: `solid 2px ${$colors.orange.base}`}"
                >
                    <v-scroll-y-transition appear>
                        <s-data-table-header>
                            <s-data-table-row>
                                <s-data-table-cell
                                    v-for="(header, headerIndex) in headers"
                                    :key="headerIndex"
                                    class="text-center"
                                >
                                    {{ header.text }}
                                </s-data-table-cell>
                            </s-data-table-row>
                            <s-data-table-row>
                                <!--suppress JSUnusedLocalSymbols -->
                                <s-data-table-cell
                                    v-for="(header, headerIndex) in headers"
                                    :key="headerIndex"
                                    class="text-center"
                                />
                            </s-data-table-row>
                            <s-data-table-row :style="{boxSizing: 'content-box'}">
                                <!--suppress JSUnusedLocalSymbols -->
                                <s-data-table-cell
                                    v-for="(header, headerIndex) in headers"
                                    :key="headerIndex"
                                    class="text-center px-2"
                                >
                                    <s-input-text />
                                </s-data-table-cell>
                            </s-data-table-row>
                        </s-data-table-header>
                    </v-scroll-y-transition>
                    <v-scroll-x-transition appear>
                        <s-data-table-body>
                            <tr
                                v-for="(item, itemIndex) in items"
                                :key="itemIndex"
                            >
                                <td
                                    v-for="(header, headerIndex) in headers"
                                    :key="headerIndex"
                                    class="text-center"
                                >
                                    {{ item[header.value] }}
                                </td>
                            </tr>
                        </s-data-table-body>
                    </v-scroll-x-transition>
                </s-data-table>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import IUser from '~/api/samples/models/IUser'
import { $number } from '~/api/shine/classes/NumberFilterBuilder'
import { cos, sin } from '~/api/shine/classes/NumberFunction'
import { $numberFun } from '~/api/shine/classes/NumberFunctionFilterBuilder'
import { $string } from '~/api/shine/classes/StringFilterBuilder'
import { concat, concatWs } from '~/api/shine/classes/StringFunction'
import { $stringFun } from '~/api/shine/classes/StringFunctionFilterBuilder'
import { Filter } from '~/api/shine/types/Filter'
import SDataTableBody from '~/components/shine/data-viewers/s-data-table-body.vue'
import SDataTableCell from '~/components/shine/data-viewers/s-data-table-cell.vue'
import SDataTableHeader from '~/components/shine/data-viewers/s-data-table-header.vue'
import SDataTableRow from '~/components/shine/data-viewers/s-data-table-row.vue'
import SDataTable from '~/components/shine/data-viewers/s-data-table.vue'
import SInputText from '~/components/shine/inputs/s-input-text.vue'

export default Vue.extend({
    name: 'index',

    components: { SInputText, SDataTableCell, SDataTableRow, SDataTableBody, SDataTableHeader, SDataTable },

    data() {
        return {
            count: 0
        }
    },

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
        },
        headers(): { value: keyof IUser | string, text: string }[] {
            return [
                {
                    value: 'id',
                    text: 'ID'
                },
                {
                    value: 'name',
                    text: 'Name'
                },
                {
                    value: 'firstname',
                    text: 'Firstname'
                },
                {
                    value: 'age',
                    text: 'Age'
                },
                {
                    value: 'posts_count',
                    text: 'Posts counts'
                }
            ]
        }
    },

    mounted() {
        window.Echo.channel('home').listen('NewMessage', (e: any) => {
            this.count = e.message
        })
    },

    methods: {
        click() {
            ++this.count
        }
    }
})
</script>

<style scoped>

</style>
