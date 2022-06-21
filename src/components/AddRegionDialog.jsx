import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { addNewRegion } from "../firebase"
import { messageAddSuccess, SnackbarAlert } from "../utils"
import { Snackbar } from "@mui/material"



export const AddRegionDialog = () => {
  const [openAlert, setOpenAlert] = React.useState(false)
  const [openDialog, setOpenDialog] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("")

  const handleClickOpen = () => setOpenDialog(true)

  const handleCloseDialog = () => {

    setOpenDialog(false)

    if(inputValue) {
      addNewRegion(inputValue)
      setOpenAlert(true)
    }
    setInputValue("")
  }

  const handleClose = (event, reason) => {
    if(reason === "clickaway") {
      return
    }
    setOpenAlert(false) 
  }

  return (
    <React.Fragment>
      <Button sx={{color: "#333"}} onClick={handleClickOpen}>
        Add new region +
      </Button>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new region to this table, please enter its name here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="region"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Ok</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          {messageAddSuccess}
        </SnackbarAlert>
      </Snackbar>
    </React.Fragment>
  )
}


