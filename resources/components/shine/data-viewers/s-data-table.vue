<script lang="ts">
import _ from 'lodash'
import Vue, { PropType } from 'vue'
import IModel from '~/api/shine/interface/IModel'
import SDataViewer from '~/components/shine/data-viewers/s-data-viewer.vue'

export default Vue.extend({
    name: 's-data-table',

    components: { SDataViewer },

    props: {
        tag: {
            type: String,
            default: 'table'
        },
        headers: {
            type: Array as PropType<IModel[]>,
            required: true
        }
    },

    data() {
        return {
            items: _.times(5, id => ({
                id
            }))
        }
    },

    render(): any {
        return this.$createElement(this.tag, {
            class: [
                's-data-table'
            ]
        }, this.$scopedSlots.default && this.$scopedSlots.default({
            items: this.items
        }))
    }
})
</script>

<style scoped>
/*noinspection CssUnusedSymbol*/
.s-data-table {
    width: 100%;
}
</style>
