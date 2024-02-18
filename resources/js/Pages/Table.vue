<script>
import { Head } from '@inertiajs/inertia-vue3'
import BaseLayout from '#root/layout/BaseLayout.vue'
import TablePrice from '#module/table-price/TablePrice.vue'
import { columns, createNPagination, formatTableData, sortInputs } from '#module/table-price/table.data'
export default {
    name: 'Table',
    props: ['user', 'offices', 'managers', 'lawyers', 'payPlanItem', 'filters', 'role'],
    components: { TablePrice, Head, BaseLayout },
    computed: {
        data() {
            return formatTableData(this.$props.payPlanItem.data);
        },
        columns() {
            return columns(formatTableData(this.$props.payPlanItem.data))
        },
        pagination() {
            return createNPagination(this.$props.payPlanItem)
        },
        sortInputs() {
            return sortInputs
        }
    }
}
</script>

<template>
    <!--  Можно поместить в стор -->
    <base-layout :user="user">
        <head title="Table" />
        <table-price v-bind="{ data, columns, pagination, sortInputs }" />
    </base-layout>
</template>

<style scoped>

</style>
