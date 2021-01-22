<template>
    <div>
        <label>
            Hello
            <input
                :style="{width: '100%', outline: 'none', border: `solid 1px ${this.$colors.red.base}`}"
                class="rounded-xl"
                type="text"
            >
        </label>
    </div>
</template>

<script>
export default {
    name: 's-input-text'
}
</script>

<style scoped>

</style>
