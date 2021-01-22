<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 's-data-table-cell',

    props: {
        tag: {
            type: String,
            default: 'td'
        }
    },

    render(): any {
        return this.$createElement(this.tag, {}, this.$scopedSlots.default && this.$scopedSlots.default({}))
    }
})
</script>
