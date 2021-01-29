<template>
    <v-app>
        <v-app-bar
            app
            fixed
        />
        <v-main>
            <v-container fluid>
                <nuxt />
            </v-container>
        </v-main>
        <v-footer />
    </v-app>
</template>

<script>
export default {
    name: 'default'
}
</script>

<style scoped>

</style>
