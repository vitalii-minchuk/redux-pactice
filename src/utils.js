import { Alert } from "@mui/material"
import dayjs from "dayjs"
import { Timestamp } from "firebase/firestore"
import React from "react"

export const dateTransform =(date) => {
  return dayjs.unix(date).format('YYYY-MM-DD')
}

export const myTimestamp = () => Timestamp.fromDate(new Date())

export const messageAddSuccess = "Item has been added successfully"
export const messageDeleteSuccess = "Item has been deleted successfully"

export const SnackbarAlert = React.forwardRef(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={12} ref={ref} {...props} />
  }
) 

export  function useSetTimeout(callback, delay) {
  const stableCallback = React.useRef(callback)

  React.useEffect(() => {
    stableCallback.current = callback

  }, [callback])

  React.useEffect(() => {
    const tick = () => stableCallback.current()

    if(typeof delay !== "number") return

    const t = setTimeout(tick, delay)

    return () => clearTimeout(t)

  }, [delay])
}