import { Button } from "@mui/material"
import Container from "@mui/material/Container"
import React from "react"
import MainTable from "./components/MainTable"
import Popup from "./components/Popup"
import {  addNewRegion, deleteRegion, getData, updateUsersData } from "./firebase"

const App = () => {
  const [regions, setRegions] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [chosenCell, setChosenCell] = React.useState({data: [], value: "", id: null})
  
  React.useEffect(() => {
    getData().then((res) =>{
      setRegions(res)
    })
  }, [open])

  React.useEffect(() => {
    
  }, [])

  const handleMiniTableOpen = (data, el, id) => {
    setChosenCell({data: data, value: el, id:id})
    setOpen(true)
  }

  const handlePopupClose = () => {
    setOpen(false)
  }

  const handelNewRegionClick = () => {
    addNewRegion()
  }

  const handelDeleteRegionClick = () => {
    deleteRegion()
  }

  const handelUpdateCellsData = (newUsersData) => {
    updateUsersData(chosenCell.id, chosenCell.value, newUsersData)
  }

  return (
    <Container maxWidth="xl">
      <MainTable regions={regions} handleMiniTableOpen={handleMiniTableOpen} />
      {regions.length < 4 &&
        <Button sx={{color: "#333"}} onClick={() => handelNewRegionClick()}>Add new region +</Button>
      }
      <Button sx={{color: "brown"}} onClick={() => {handelDeleteRegionClick()}}>Delete region -</Button>
      
      <Popup handlePopupClose={handlePopupClose} open={open} cellData={chosenCell.data} handelUpdateCellsData={handelUpdateCellsData} />
    </Container>
  )
}

export default App;
