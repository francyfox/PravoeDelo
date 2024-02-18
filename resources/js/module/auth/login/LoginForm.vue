<script>
import { NForm, NFormItem, NInput, NButton, useMessage } from 'naive-ui';
import { RuleEmail } from '#module/validator/validator.rules'
import { Inertia } from '@inertiajs/inertia'

const defaultFormData = {
    email: null,
    password: null
}
export default {
    name: 'LoginForm',
    props: {
        errors: Object,
    },
    components: { NForm, NFormItem, NInput, NButton },
    setup() {
        const message = useMessage();

        return { message };
    },
    data() {
        return {
            formData: {
                email: '123123@mail.ru',
                password: '123456'
            },
            rules: {
                email: {
                    required: true,
                    message: 'Please input valid email',
                    trigger: ['input', 'blur'],
                    validator: RuleEmail
                },
                password: {
                    required: true,
                    message: 'Please input valid password',
                    trigger: ['input']
                }
            },
            size: 'large'
        }
    },
    methods: {
        async sendForm(e) {
            e.preventDefault();
            this.$refs.formRef.validate((errors) => {
                if (!errors) {
                    Inertia.post('login', this.$data.formData);

                    setTimeout(() => {
                        this.$data.formData = defaultFormData;
                        this.message.error('Wrong password')
                    }, 500)
                    // Как определить ошибку? errors ничего не возвращает, промиса или колбэка тоже
                } else {
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

               {{ JSON.stringify(errors) }}


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
