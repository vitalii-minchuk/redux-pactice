import * as React from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export const DeleteUserDialog = ({deleteUser}) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("")

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    deleteUser(+inputValue)
  }

  return (
    <React.Fragment>
      <Button sx={{color: "brown"}} onClick={handleClickOpen}>
        Delete User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To delete information of any user, please enter your user ID here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User ID"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
