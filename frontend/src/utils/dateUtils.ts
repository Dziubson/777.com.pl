export const formatDate = (date: Date) => {
    // Format date as YYYY-MM-DD
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export const formatDateTime = (date: Date) => {
    // Format date and time as YYYY-MM-DD hh:mm
    return new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '');
}
