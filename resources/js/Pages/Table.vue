<script>
import { Head } from '@inertiajs/inertia-vue3'
import BaseLayout from '#root/layout/BaseLayout.vue'
import TablePrice from '#module/table-price/TablePrice.vue'
import { columns, formatTableData } from '#module/table-price/table.data'
export default {
    name: 'Table',
    props: ['user', 'offices', 'managers', 'lawyers', 'payPlanItem', 'filters', 'role'],
    components: { TablePrice, Head, BaseLayout },
    computed: {
        tableData() {
            return formatTableData(this.$props.payPlanItem.data);
        },
        columns() {
            return columns
        }
    }
}
</script>

<template>
    <!--  Можно поместить в стор -->
    <base-layout :user="user">
        <head title="Table" />
        <table-price :data="tableData" :columns="columns" />
    </base-layout>
</template>

<style scoped>

</style>
