<script>
import { Inertia } from '@inertiajs/inertia'
export default {
    name: 'NavBar',
    props: ['user'],
    methods: {
        logout() {
            Inertia.post('/logout');
        }
    }
}
</script>

<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900 px-5 xl:px-0">
        <div class="container min-h-[72px] flex flex-wrap items-center justify-between mx-auto py-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PravoeDelo test app</span>
            </a>
            <div class="flex w-full max-w-[200px] items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <span v-if="user" class="text-sm">
                    {{ user.email }} <br>
                    Role: {{ user.roles[0].name }}
                </span>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/login" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
                    </li>
                    <li>
                        <a href="/table" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Table</a>
                    </li>
                    <li>
                        <a href="#" @click.prevent="logout" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>

</style>
