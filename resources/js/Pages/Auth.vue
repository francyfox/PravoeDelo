<script>
import { Head } from '@inertiajs/inertia-vue3'
import LoginForm from '#module/auth/login/LoginForm.vue'
import BaseLayout from '#root/layout/BaseLayout.vue'
export default {
    name: 'Auth',
    components: { Head, BaseLayout, LoginForm }
}
</script>

<template>
    <base-layout>
        <head title="Auth" />
        <login-form />
    </base-layout>

</template>

<style scoped>

</style>
