import {  Modal, Paper } from "@mui/material"
import React from "react"
import MiniTable from "./MiniTable";

const Popup = ({handlePopupClose, open, cellData, handelUpdateCellsData}) => {
  
  return (
    <React.Fragment>
<Modal
  open={open}
  onClose={handlePopupClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Paper>
    <MiniTable handlePopupClose={handlePopupClose} cellData={cellData} handelUpdateCellsData={handelUpdateCellsData} />
  </Paper>
</Modal>
</React.Fragment>
  )
}

export default Popup