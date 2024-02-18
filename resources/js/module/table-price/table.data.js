import { toTimeStamp } from '#root/util'

export const columns = [
    {
        key: 'id',
        title: 'ID',
        width: 70,
        sorter: (a, b) => a.id - b.id,
    },
    {
        key: 'officeAndManager',
        title: 'Офис и менеджер',
        sorter: (a, b) => a.officeAndManager.localeCompare(b.officeAndManager),
    },
    {
        key: 'lawyer',
        title: 'Юрист (ФИО)',
        sorter: (a, b) => a.lawyer.localeCompare(b.lawyer),
    },
    {
        key: 'client',
        title: 'ФИО Клиента',
        sorter: (a, b) => a.client.localeCompare(b.client),
    },
    {
        key: 'program',
        title: 'Программа',
        width: 120,
        sorter: (a, b) => a.program.localeCompare(b.program),
    },
    {
        key: 'registrationDate',
        title: 'Дата регистрации',
        sorter: (a, b) => toTimeStamp(a.registrationDate) - toTimeStamp(b.registrationDate),
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
    },
    {
        key: 'paymentDate',
        title: 'Даты оплаты',
        sorter: (a, b) => a.paymentDate - b.paymentDate,
    },
    {
        key: 'deliveryDate',
        title: 'Дата передачи',
        sorter: (a, b) => toTimeStamp(a.deliveryDate) - toTimeStamp(b.deliveryDate),
    },
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
            month: `${i.program_payment_per_month} / ${i.payment_select[0]}`,
            paymentDate: `от ${i.program_first_date} до ${i.program_second_date}`,
            deliveryDate: i.client_handover_date
        }
    })
}
