<script>
import { NConfigProvider, NMessageProvider } from 'naive-ui'
export default {
    name: 'Base',
    components: { NConfigProvider, NMessageProvider },
    data() {
        return {
        }
    }
}
</script>

<template>
    <n-config-provider preflight-style-disabled>
        <n-message-provider >
            <div class="bg-gray-100">
                <slot />
            </div>
        </n-message-provider>
    </n-config-provider>
</template>

<style scoped>

</style>
