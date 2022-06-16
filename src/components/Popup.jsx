import {  Modal, Paper } from "@mui/material"
import React from "react"
import MiniTable from "./MiniTable";

const Popup = ({handlePopupClose, open}) => {
  
  return (
    <React.Fragment>
<Modal
  open={open}
  onClose={handlePopupClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Paper>
    <MiniTable />
  </Paper>
</Modal>
</React.Fragment>
  )
}

export default Popup