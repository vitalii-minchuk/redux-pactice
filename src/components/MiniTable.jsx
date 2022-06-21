import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { dateTransform, myTimestamp } from "../utils"
import { Button, Chip, LinearProgress, Stack, Typography } from '@mui/material'
import { DeleteUserDialog } from './DeleteUserDialog'



const MiniTable = ({cellData, handelUpdateCellsData, handlePopupClose}) => {
  const [users, setUsers] = React.useState([])
  const [disabledBtn, setDisabledBtn] = React.useState(false)
  
  React.useEffect(() => {
    setUsers(cellData)
  }, [])

  let columnsData = [
    {field: "id", headerName: "ID", width: 150},
    {field: "value", headerName: "Value", width: 150, type: 'number', editable: true},
    {field: "date", headerName: "date", width: 150},
    {field: "name", headerName: "name", width: 150, editable: true},
    {field: "text", headerName: "text", width: 300, editable: true},
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
    setDisabledBtn(true)
    setTimeout(() => {
      setDisabledBtn(false)
    }, 1000)
    const defaultUserData = {
      id: myTimestamp().seconds,
      value: 0,
      name: "",
      date: dateTransform(myTimestamp().seconds),
      text: ""
    }
    setUsers((prev) => [...prev, defaultUserData])
  }

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter(user => user.id !== id))
  }

  const handelEditCell = (e) => {
    const editedUsers = users.map((record) => {
      if(record.id === e.id) {
        return {...record, [e.field]: e.value}
      } else {
        return {...record}
      }
    })
    setUsers(editedUsers)
  }
  
  return (
    <div style={{ height: 430, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid 
            columns={columnsData}
            rows={rowsData}
            components={{
              Toolbar: GridToolbar
            }}
            onCellEditCommit={handelEditCell}
          />
          <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{marginTop: "10px"}} >
            <Button sx={{color: "skyblue"}} disabled ={disabledBtn} onClick={() => {addNewUser()}}>Add New User</Button>
            <DeleteUserDialog deleteUser={deleteUser} />
            <Button sx={{color: "seagreen"}} disabled ={disabledBtn} onClick={() => {handelUpdateCellsData(users)}}>Save Changes</Button>
            <Button sx={{color: "#111"}} onClick={() => {handlePopupClose()}}>Close</Button>
          </Stack> 
          <Stack>
            {/* <Typography>jj'\lj;;aj</Typography> */}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default MiniTable