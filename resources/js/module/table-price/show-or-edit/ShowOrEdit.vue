<script>
import { nextTick, ref } from 'vue'
import { NInput } from 'naive-ui'

export default {
    name: 'ShowOrEdit',
    props: {
        value: [String, Number],
        onUpdateValue: [Function, Array],
        onBlur: [Function, Array],
    },
    setup() {
        const inputRef = ref(null)

        return {
            inputRef
        }
    },
    components: { NInput },
    data() {
        return {
            isEdit: false,
            inputValue: this.$props.value
        }
    },
    methods: {
        handleChange () {
            this.$props.onUpdateValue(this.$data.inputValue)
            this.$data.isEdit = false
        },
        handleOnClick () {
            this.$data.isEdit = true
            nextTick(() => {
                this.inputRef.focus()
            })
        }
    }
}
</script>

<template>
    <div class="min-h-[22px]"
         @click="handleOnClick"
    >
        <span v-if="!isEdit">
            {{ value }}
        </span>
        <n-input v-else
                 ref="inputRef"
                 :value="inputValue"
                 :on-update-value="(v) => inputValue = v"
                 :on-change="handleChange"
                 :on-blur="handleChange"
        />
    </div>
</template>

<style scoped>

</style>
