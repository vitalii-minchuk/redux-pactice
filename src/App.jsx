import { Button } from "@mui/material"
import Container from "@mui/material/Container"
import React from "react"
import MainTable from "./components/MainTable"
import Popup from "./components/Popup"
import {  addNewRegion, deleteRegion, getData } from "./firebase"

const App = () => {
  const [regions, setRegions] = React.useState([])
  const [cellData, setCellData] = React.useState([])
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    getData().then((res) =>{
      setRegions(res)
    })
    
  }, [open])



  const handleMiniTableOpen = (data) => {
    setCellData(data)
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
  console.log(regions);
  
  
  return (
    <Container maxWidth="xl" height="60vh">
      <MainTable regions={regions} handleMiniTableOpen={handleMiniTableOpen} />
      {regions.length < 4 &&
        <Button sx={{color: "#333"}} onClick={() => handelNewRegionClick()}>Add new region +</Button>
      }
      <Button sx={{color: "brown"}} onClick={() => {handelDeleteRegionClick()}}>Delete region -</Button>
      
      <Popup handlePopupClose={handlePopupClose} open={open} cellData={cellData} />
    </Container>
  )
}

export default App;
