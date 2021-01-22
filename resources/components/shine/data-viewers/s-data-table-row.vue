<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 's-data-table-row',

    props: {
        tag: {
            type: String,
            default: 'tr'
        }
    },

    render(): any {
        return this.$createElement(this.tag, {}, this.$scopedSlots.default && this.$scopedSlots.default({}))
    }
})
</script>
