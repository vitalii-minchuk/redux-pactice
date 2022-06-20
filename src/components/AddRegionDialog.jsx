import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addNewRegion } from '../firebase';
import { InfoSnackbar } from './InfoSnackbar';
import { messageAddSuccess } from '../utils';

export const AddRegionDialog = ({deleteUser}) => {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [alertSnackbar, setAlertSnackbar] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false);
    if(inputValue) {
      setAlertSnackbar(true)
      addNewRegion(inputValue)
    }
    setInputValue("")
  };

  return (
    <div>
      <Button sx={{color: "#333"}} onClick={handleClickOpen}>
        Add new region +
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      <InfoSnackbar isAlertOpen={alertSnackbar} message={messageAddSuccess} />
    </div>
  )
}
