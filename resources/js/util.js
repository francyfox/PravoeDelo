export const toTimeStamp = (date) => {
    const [day, mount, year] = date.split('.'); // поидее так даты указывать не верно. См. формат ISO или UNIX timestamp
    return Math.floor(new Date(`${year}-${mount}-${day}`).getTime() / 1000);
}
