export const columns = [
    {
        key: 'officeAndManager',
        title: 'Офис и менеджер'
    },
    {
        key: 'lawyer',
        title: 'Юрист (ФИО)'
    },
    {
        key: 'client',
        title: 'ФИО Клиента'
    },
    {
        key: 'program',
        title: 'Программа'
    },
    {
        key: 'registrationDate',
        title: 'Дата регистрации'
    },
    {
        key: 'plan',
        title: 'План'
    },
    {
        key: 'price',
        title: 'Стоимость программы'
    },
    {
        key: 'month',
        title: 'В месяц'
    },
    {
        key: 'paymentDate',
        title: 'Даты оплаты'
    },
    {
        key: 'deliveryDate',
        title: 'Дата передачи'
    },
]

export const formatTableData = (data) => {
    console.log('data', data)
    return data.map((i) => {
        return {
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
