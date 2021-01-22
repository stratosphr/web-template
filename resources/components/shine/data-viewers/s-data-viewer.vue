<script lang="ts">
import Vue from 'vue'
import IUser from '~/api/samples/models/IUser'

export default Vue.extend({
    name: 's-data-viewer',

    data() {
        return {
            items: [] as Partial<IUser & { [key: string]: any }>[],
            page: 1,
            itemsPerPage: 10
        }
    },

    mounted() {
        for (let i = 0; i < 500; i++) {
            this.items.push({
                id: this.items.length + 1,
                name: `Name-${this.items.length + 1}`,
                firstname: `Firstname-${this.items.length + 1}`,
                age: Math.round(Math.random() * 50),
                posts_count: Math.round(Math.random() * 200)
            })
        }
    },

    methods: {
        setPage(page: number) {
            this.page = page
        },
        setItemsPerPage(itemsPerPage: number) {
            this.itemsPerPage = itemsPerPage
        }
    },

    render(): any {
        return this.$scopedSlots.default && this.$scopedSlots.default({
            ...this.$data,
            setPage: this.setPage,
            setItemsPerPage: this.setItemsPerPage
        })
    }
})
</script>
