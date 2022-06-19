import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { dateTransform, myTimestamp } from "../utils"
import { Button, LinearProgress } from '@mui/material'
import { Timestamp } from 'firebase/firestore'



const MiniTable = ({cellData, handelUpdateCellsData}) => {
  const [users, setUsers] = React.useState([])
  const [disabledBtn, setDisabledBtn] = React.useState(false)
  console.log(cellData);

  console.log(users); 
  React.useEffect(() => {
    setUsers(cellData)
  }, [])
  
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
  
  console.log(users);
  
  const columnsData = [
    {field: "id", headerName: "ID", width: 50},
    {field: "value", headerName: "Value", width: 150},
    {field: "date", headerName: "date", width: 150},
    {field: "name", headerName: "name", width: 150},
    {field: "text", headerName: "text", width: 300},
  ]
  const rowsData = users?.map((el) => ([
    {
      id: el?.date?.seconds || "---",
      value: el?.value || "---",
      date: dateTransform(el?.date?.seconds),
      name: el?.name || "---",
      text: el?.text || "---"
    }
  ]))

  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid 
            columns={columnsData}

            rows={{...rowsData}}
            components={{
              Toolbar: GridToolbar,
            }}
          />
          <Button disabled ={disabledBtn} onClick={() => {addNewUser()}}>add</Button>
          <Button onClick={() => {handelUpdateCellsData(users)}}>close</Button>
        </div>
      </div>
    </div>
  )
}

export default MiniTable