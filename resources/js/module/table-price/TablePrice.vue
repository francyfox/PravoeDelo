<script>
import { NDataTable, NPagination, NButton, NSpace } from 'naive-ui'
import { Inertia } from '@inertiajs/inertia'

export default {
    name: 'TablePrice',
    props: ['data', 'columns', 'pagination'],
    data() {
        return {
            sortedKey: null,
        }
    },
    components: { NDataTable, NPagination, NButton, NSpace },
    methods: {
        changePage(page) {
            const url = new URL(window.location.href);
            url.searchParams.set('page', page);
            Inertia.get(url.toString())
        },
        sortBy(key) {
            this.$data.sortedKey = key;
            this.$refs.tableInstance.sort(key, 'ascend')
        }
    }
}
</script>

<template>
    <section class="h-full bg-slate-100 py-[25px]">
        <div class="container">
            <div class="flex flex-col mb-3">
                <span class="text-md mb-3">Sort By:</span>
                <n-space>
                    <template v-for="column in columns" :key="column.key">
                        <n-button v-if="!column?.isNotSortable"
                                  @click="sortBy(column.key)"
                                  :secondary="sortedKey === column.key"
                        >
                            {{ column.title }}
                        </n-button>
                    </template>

                </n-space>
            </div>

            <n-data-table
                ref="tableInstance"
                class="mb-5"
                :columns="columns"
                :data="data"
                :pagination="false"
            />

            <n-pagination :page="pagination.page"
                          :page-count="pagination.pageCount"
                          :on-update-page="changePage"
            />
        </div>
    </section>
</template>

<style scoped>

</style>
