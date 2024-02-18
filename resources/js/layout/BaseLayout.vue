<script>
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import NavBar from '#module/nav-bar/NavBar.vue'
export default {
    name: 'Base',
    props: ['user'],
    components: { NavBar, NConfigProvider, NMessageProvider },
    data() {
        return {
        }
    }
}
</script>

<template>
    <n-config-provider preflight-style-disabled>
        <n-message-provider >
            <nav-bar :user="user" />
            <div class="h-full bg-gray-100 px-5 xl:px-0">
                <slot />
            </div>
        </n-message-provider>
    </n-config-provider>
</template>

<style scoped>

</style>
