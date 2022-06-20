import dayjs from "dayjs"
import { Timestamp } from "firebase/firestore"

export const dateTransform =(date) => {
  return dayjs.unix(date).format('YYYY-MM-DD')
}

export const myTimestamp = () => Timestamp.fromDate(new Date())

export const messageAddSuccess = "Item has been added successfully"