<script>
import { NPopover, NButton } from 'naive-ui'
export default {
    name: 'ProgramPayment',
    components: { NPopover, NButton },
    props: ['priceList'],
    data() {
        return {
            state: false,
        }
    },
    methods: {
        openPopup() {
            this.$data.state = !this.$data.state
        }
    },
}
</script>

<template>
    <n-popover class="w-[150px] max-h-[200px]" trigger="click" scrollable>
        <template #trigger>
            <n-button @click="openPopup" >
                Показать
            </n-button>
        </template>
        <ul v-if="priceList.length > 0">
            <li v-for="price in priceList">
                {{ price }}
            </li>
        </ul>
        <span v-else>Пусто</span>
    </n-popover>
</template>

<style scoped>

</style>
