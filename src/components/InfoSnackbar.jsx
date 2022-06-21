import { Alert, Button, Snackbar } from "@mui/material"
import React from "react"

const SnackbarAlert = React.forwardRef(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={12} ref={ref} {...props} />
  }
) 

export const InfoSnackbar = ({message, isAlertOpen}) => {
  const [open, setOpen] = React.useState(false)
console.log(open, isAlertOpen);

  // React.useEffect(() => {
  //   setOpen(isAlertOpen)
  // }, [])

  const handleClose = (event, reason) => {
    if(reason === "clickaway") {
      return
    }
    setOpen(false) 
  }
  

  return (
    <React.Fragment>
      {/* <Button onClick={() => handleAlert(setOpen(true))}>open</Button> */}
      {/* <Snackbar
        message=";lkjsfkjgdl["
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
      /> */}
      <Snackbar open={isAlertOpen} autoHideDuration={3000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          {message}
        </SnackbarAlert>
      </Snackbar>
    </React.Fragment>
  )
}