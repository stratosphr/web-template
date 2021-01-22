<script lang="ts">
import _ from 'lodash'
import Vue from 'vue'

export default Vue.extend({
    name: 's-data-table-header',

    props: {
        tag: {
            type: String,
            default: 'thead'
        }
    },

    render(): any {
        return this.$createElement(this.tag, {
            class: [
                _.kebabCase(this.$options.name)
            ]
        }, [
            this.$scopedSlots.default && this.$scopedSlots.default({})
        ])
    }
})
</script>
