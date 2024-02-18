<script>
import { NDataTable } from 'naive-ui'

export default {
    name: 'TablePrice',
    props: ['data', 'columns'],
    components: { NDataTable },
}
</script>

<template>
    <section class="h-full bg-slate-100 py-[25px]">
        <div class="container">
            <n-data-table
                :columns="columns"
                :data="data"
                :pagination="false"
            />
        </div>
    </section>
</template>

<style scoped>

</style>
