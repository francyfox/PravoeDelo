export const toTimeStamp = (date) => {
    const [day, month, year] = date.split('.') // поидее так даты указывать не верно. См. формат ISO или UNIX timestamp
    return Math.floor(new Date(`${year}-${month}-${day}`).getTime() / 1000)
}

export const paramToTimeStamp = (date) => {
    const [day, month, year] = date.split('-')
    return Math.floor(new Date(`${year}-${month}-${day}`).getTime())
}

export const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp)
    date.setDate(date.getDate() + 1)
    const formatted = date.toISOString().split('T')[0]
    const [year, month, day] = formatted.split('-')
    return `${day}-${month}-${year}`
}

export const validTimeStamp = (data, key) => typeof data[key] === 'number'
    && data[key] > 1000
    && new Date(data[key]).getTime() > 0
