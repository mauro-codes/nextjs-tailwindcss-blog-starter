import dayjs from "dayjs";

const getFormattedDate = (date: string) => {
    return dayjs(date).format('DD MMMM YYYY')
}

export { getFormattedDate }