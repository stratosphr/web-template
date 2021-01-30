<template>
    <v-form
        class="text-center"
        @submit.prevent="submit"
    >
        <v-text-field
            v-model="email"
            label="E-mail"
        />
        <v-text-field
            v-model="password"
            label="Password"
            type="password"
        />
        <v-btn
            type="submit"
            v-text="'Login'"
        />
    </v-form>
</template>

<script>
export default {
    name: 'index',

    data() {
        return {
            email: 'stratosphr@gmail.com',
            password: 'password'
        }
    },

    methods: {
        async submit() {
            await this.$auth.loginWith('local', {
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            await this.$router.push('/')
        }
    }
}
</script>

<style scoped>

</style>
