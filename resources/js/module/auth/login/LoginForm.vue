<script>
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui';

export default {
    name: 'LoginForm',
    components: { NForm, NFormItem, NInput, NButton },
    setup() {
        const message = useMessage();

        return { message };
    },
    data() {
        return {
            formData: {
                email: '',
                password: ''
            },
            rules: {
                email: {
                    required: true,
                    message: 'Please input your email',
                    trigger: ['input', 'blur']
                },
                password: {
                    required: true,
                    message: 'Please input your password',
                    trigger: ['input']
                }
            },
            size: 'large'
        }
    },
    methods: {
        sendForm(e) {
            e.preventDefault();
            this.$refs.formRef.validate((errors) => {
                if (!errors) {
                    this.message.success('Valid')
                } else {
                    console.log(errors)
                    this.message.error('Invalid')
                }
            })
        }
    }
}
</script>

<template>
    <div class="flex flex-col h-screen">
        <div class="grid place-items-center mx-2 my-20 sm:my-auto">
            <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-2/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">

                <h1 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800 mb-3">
                    Login
                </h1>

                <n-form
                    ref="formRef"
                    :label-width="80"
                    :model="formData"
                    :rules="rules"
                    :size="size"
                >
                    <n-form-item label="Email" path="email">
                        <n-input v-model:value="formData.email"
                                 type="email"
                                 placeholder="test@mail.ru"
                        />
                    </n-form-item>

                    <n-form-item label="Password" path="password">
                        <n-input v-model:value="formData.password"
                                 type="password"
                                 placeholder="******"
                        />
                    </n-form-item>

                    <n-button @click="sendForm"
                              type="warning">
                        Send
                    </n-button>
                </n-form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
