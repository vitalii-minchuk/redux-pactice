import { Button } from "@mui/material"
import Container from "@mui/material/Container"
import { collection, onSnapshot } from "firebase/firestore"
import React from "react"
import { DeleteDialog } from "./components/DeleteDialog"
import MainTable from "./components/MainTable"
import Popup from "./components/Popup"
import {  addNewRegion, db, deleteRegion, getData, updateUsersData } from "./firebase"

const App = () => {
  const [regions, setRegions] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [chosenCell, setChosenCell] = React.useState({data: [], value: "", id: null})
  
  // React.useLayoutEffect(() => {
  //   getData().then((res) =>{
  //     console.log(res);
  //     setRegions(res)
  //   })
  // }, [])

  const colRef = collection(db, "regions")
  onSnapshot(colRef, (snapshot) => {
    let res =[]
    snapshot.docs.forEach((doc) => {
      res.push({...doc.data(), id: doc.id})
    })
    setRegions(res)
  })

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

  const handelDeleteRegion = (id) => {
    deleteRegion(id)
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
      {regions.length > 0 &&
        <DeleteDialog handelDeleteRegion={handelDeleteRegion} regions={regions} />
      }
      <Popup handlePopupClose={handlePopupClose} open={open} cellData={chosenCell.data} handelUpdateCellsData={handelUpdateCellsData} />
    </Container>
  )
}

export default App;
