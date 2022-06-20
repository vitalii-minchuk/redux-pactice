import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { dateTransform, myTimestamp } from "../utils"
import { Button, Chip, LinearProgress, Stack, Typography } from '@mui/material'



const MiniTable = ({cellData, handelUpdateCellsData, handlePopupClose}) => {
  const [users, setUsers] = React.useState([])
  const [disabledBtn, setDisabledBtn] = React.useState(false)
  
  React.useEffect(() => {
    setUsers(cellData)
  }, [])

  let columnsData = [
    {field: "id", headerName: "ID", width: 150},
    {field: "value", headerName: "Value", width: 150},
    {field: "date", headerName: "date", width: 150},
    {field: "name", headerName: "name", width: 150},
    {field: "text", headerName: "text", width: 300},
  ]

  const rowsData = users?.map((el) => {
    return ({
      id: el.id || "---",
      value: el.value || "---",
      date: el.date,
      name: el.name || "---",
      text: el.text || "---"
    })
  })
  
  const addNewUser = () => {
    const defaultUserData = {
      id: myTimestamp().seconds,
      value: 0,
      name: "",
      date: dateTransform(myTimestamp().seconds),
      text: ""
    }
    setUsers((prev) => [...prev, defaultUserData])
  }

  const deleteUser = () => {
    const userId = prompt("Enter user ID")
    setUsers((prev) => prev.filter(user => user.id !== +userId))
  }
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
        
          <DataGrid 
            columns={columnsData}
            rows={rowsData}
            components={{
              Toolbar: GridToolbar
            }}
          />
            <Button disabled ={disabledBtn} onClick={() => {addNewUser()}}>add</Button>
            <Button onClick={() => {deleteUser()}}>delete</Button>
            <Button onClick={() => {handelUpdateCellsData(users)}}>save</Button>
            <Button onClick={() => {handlePopupClose()}}>close</Button>
        </div>
      </div>
    </div>
  )
}

export default MiniTable