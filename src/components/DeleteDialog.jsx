import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, open, regions, handelDeleteRegion } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose();
    handelDeleteRegion(value)
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Chose one region</DialogTitle>
      <List sx={{ pt: 0 }}>
        {regions.map((region) => (
          <ListItem button onClick={() => handleListItemClick(region.id)} key={region.region}>
            <ListItemText primary={region.region} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export const DeleteDialog = ({ regions, handelDeleteRegion }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button sx={{color: "brown"}} onClick={handleClickOpen}>
        Delete region -
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        regions={regions}
        handelDeleteRegion={handelDeleteRegion}
      />
    </React.Fragment>
  );
}