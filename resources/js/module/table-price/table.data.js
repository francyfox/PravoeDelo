import { formatTimeStamp, paramToTimeStamp, toTimeStamp, validTimeStamp } from '#root/util'
import { h } from 'vue'
import ShowOrEdit from '#module/table-price/show-or-edit/ShowOrEdit.vue'
import { Inertia } from '@inertiajs/inertia'
import ProgramPayment from '#module/table-price/program-payment/ProgramPayment.vue'

const getDataIndex = (data, id) => {
    return data.findIndex((item) => item.id === id)
}

export const columns = (data) => [
    {
        key: 'id', // ID является генеративным полем и обычно его нельзя редактировать. БД создает его сама
        title: 'ID',
        width: 70,
        sorter: (a, b) => a.id - b.id
    },
    {
        key: 'officeAndManager',
        title: 'Офис и менеджер',
        sorter: (a, b) => a.officeAndManager.localeCompare(b.officeAndManager),
    },
    {
        key: 'lawyer',
        title: 'Юрист (ФИО)',
        sorter: (a, b) => a.lawyer.localeCompare(b.lawyer)
    },
    {
        key: 'client',
        title: 'ФИО Клиента',
        sorter: (a, b) => a.client.localeCompare(b.client),
        render (row) {
            const index = getDataIndex(data, row.id)
            return h(ShowOrEdit, {
                value: row.client,
                onUpdateValue (v) {
                    data[index].name = v
                    Inertia.post('update-data', { id: data[index].id, name: v })
                    // у нас vue рендерит как spa, но вынуждены обновлять страницу
                },
            })
        }
    },
    {
        key: 'program',
        title: 'Программа',
        width: 120,
        sorter: (a, b) => a.program.localeCompare(b.program)
    },
    {
        key: 'registrationDate',
        title: 'Дата регистрации',
        sorter: (a, b) => toTimeStamp(a.registrationDate) - toTimeStamp(b.registrationDate)
    },
    {
        key: 'plan',
        title: 'План',
        isNotSortable: true
    },
    {
        key: 'price',
        title: 'Стоимость программы',
        isNotSortable: true
    },
    {
        key: 'month',
        title: 'В месяц',
        sorter: (a, b) => a.month - b.month,
        render(row) {
            return h(ProgramPayment, { priceList: row.month })
        }
    },
    {
        key: 'paymentDate',
        title: 'Даты оплаты',
        sorter: (a, b) => a.paymentDate - b.paymentDate
    },
    {
        key: 'deliveryDate',
        title: 'Дата передачи',
        sorter: (a, b) => toTimeStamp(a.deliveryDate) - toTimeStamp(b.deliveryDate)
    }
]

export const createNPagination = (data) => {
    return {
        page: data.current_page,
        pageCount: data.last_page,
        size: 'large'
    }
}

export const formatTableData = (data) => {
    if (typeof data === 'object') {
        data = Object.values(data)
    }

    return data.map((i) => {
        return {
            id: i.id,
            officeAndManager: `${i.manager.office} - ${i.manager.name}`,
            lawyer: i.lawyer.name,
            client: i.client_name,
            program: i.program_type,
            registrationDate: i.date_register,
            plan: `${i.program_plan} / ${i.all_payments}`,
            price: `${i.program_price} / ${i.all_payments}`,
            month: i.payment_select,
            paymentDate: `от ${i.program_first_date} до ${i.program_second_date}`,
            deliveryDate: i.client_handover_date
        }
    })
}

export const sortInputs = [
    {
        component: 'n-input-number',
        name: 'office',
        label: 'Office ID',
        placeholder: 'id'
    },
    {
        component: 'n-input-number',
        name: 'manager_id',
        label: 'manager ID',
        placeholder: 'id'
    },
    {
        component: 'n-input-number',
        name: 'lawyer_id',
        label: 'lawyer ID',
        placeholder: 'id'
    },
    {
        component: 'n-input-number',
        name: 'client_id',
        label: 'client ID',
        placeholder: 'id'
    },
    {
        component: 'n-date-picker',
        type: 'date',
        label: 'фильтр по месяцу оплаты',
        name: 'date'
    },
    {
        component: 'n-date-picker',
        type: 'daterange',
        name: 'dates_transfer',
        label: 'диапазон дат передачи клиента'
    },
    {
        component: 'n-date-picker',
        type: 'daterange',
        name: 'dates_pay',
        label: 'диапазон дат оплаты'
    }
]

export const emptySortData = {
    office: null,
    manager_id: null,
    lawyer_id: null,
    client_id: null,
    date: null
}

export const filterSortData = (data) => {
    for (const key of Object.keys(data)) {
        data[key] === null && delete data[key]

        if (validTimeStamp(data, key)) {
            data[key] = formatTimeStamp(data[key])
        } else if (Array.isArray(data[key])) {
            data[key] = data[key].map(i => formatTimeStamp(i))
        }
    }

    return data;
}

export const filterParams = (data) => {
    for (const key of Object.keys(data)) {
        const regex = new RegExp(/\d{1,2}-\d{1,2}-\d{2,4}/)

        if (regex.test(data[key])) {
            data[key] = paramToTimeStamp(data[key])
        } else if (Array.isArray(data[key])) {
            data[key] = data[key].map(i => paramToTimeStamp(i))
        }
    }

    return data
}
