<script>
import { NDataTable, NPagination, NSpace, NForm, NFormItem, NInputNumber, NButton, NDatePicker } from 'naive-ui'
import { Inertia } from '@inertiajs/inertia'
import { emptySortData, filterParams, filterSortData } from '#module/table-price/table.data'
import { formatTimeStamp } from '#root/util'

export default {
    name: 'TablePrice',
    props: ['data', 'columns', 'pagination', 'sortInputs'],
    data() {
        return {
            page: 1,
            sortData: emptySortData,
            sortInputsData: this.$props.sortInputs
        }
    },
    components: { NDataTable, NPagination, NSpace, NForm, NFormItem, NInputNumber, NButton, NDatePicker },
    methods: {
        formatTimeStamp,
        changePage(page) {
            this.$data.page = page
            const url = new URL(window.location.href)
            url.searchParams.set('page', page)
            Inertia.get(url.toString())
        },
        sortBy() {
            let data = { ...this.$data.sortData, ...{ page: this.$data.page } }
            data = filterSortData(data)

            const params = `?${new URLSearchParams(data)}`
            Inertia.get(`/table${params}`)
        },
        clear() {
            this.$data.sortData = emptySortData
            Inertia.get('/table')
        }
    },
    created() {
        const urlParams = new URLSearchParams(window.location.search)
        let params = Object.fromEntries(urlParams.entries())
        params = filterParams(params)
        this.$data.sortData = { ...this.$data.sortData, ...params }
    }
}
</script>

<template>
    <section class="h-full bg-slate-100 py-[25px]">
        <div class="container">
            <div class="flex flex-col mb-3">
                <n-form :model="sortData" @submit="sortBy">
                    <n-space align="center">
                        <template v-for="(input, index) in sortInputsData" :key="index">
                            <n-form-item :label="input.label">
                                <component :is="input.component"
                                           v-model:value="sortData[input.name]"
                                           :type="input.type"
                                           :placeholder="input.placeholder"
                                           clearable
                                />
                            </n-form-item>
                        </template>
                    </n-space>
                    <n-space align="center">
                        <n-button type="error" @click="clear"> Clear</n-button>
                        <n-button type="primary" @click="sortBy"> Sort</n-button>
                    </n-space>
                </n-form>

            </div>

            <div class="overflow-auto whitespace-pre xl:overflow-hidden xl:whitespace-normal">
                <n-data-table
                    ref="tableInstance"
                    class="mb-5"
                    :columns="columns"
                    :data="data"
                    :pagination="false"
                />
            </div>


            <n-pagination :page="pagination.page"
                          :page-count="pagination.pageCount"
                          :on-update-page="changePage"
            />
        </div>
    </section>
</template>

<style scoped>

</style>
