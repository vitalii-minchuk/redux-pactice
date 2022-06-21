import Stack from "@mui/material/Stack"
import Container from "@mui/material/Container"
import { collection, onSnapshot } from "firebase/firestore"
import React from "react"
import { DeleteRegionDialog } from "./components/DeleteRegionDialog"
import MainTable from "./components/MainTable"
import { db, deleteRegion, updateUsersData } from "./firebase"
import { AddRegionDialog } from "./components/AddRegionDialog"
import MiniTablePopup from "./components/MiniTablePopup"

const App = () => {
  const [regions, setRegions] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [chosenCell, setChosenCell] = React.useState({data: [], value: "", id: null})

  React.useEffect(() => {
    const colRef = collection(db, "regions")
    onSnapshot(colRef, (snapshot) => {
      let res =[]
      snapshot.docs.forEach((doc) => {
        res.push({...doc.data(), id: doc.id})
      })
      setRegions(res)
    })
  }, [])
  

  const handleMiniTableOpen = (data, el, id) => {
    setChosenCell({data: data, value: el, id:id})
    setOpen(true)
  }

  const handlePopupClose = () => setOpen(false)

  const handelDeleteRegion = (id) => deleteRegion(id)

  const handelUpdateCellsData = (newUsersData) => {
    updateUsersData(chosenCell.id, chosenCell.value, newUsersData)
  }

  return (
    <Container maxWidth="xl">
      <MainTable regions={regions} handleMiniTableOpen={handleMiniTableOpen} />
      <Stack direction="row" spacing={2} sx={{marginTop: "10px"}} >
        {regions.length < 4 &&
          <AddRegionDialog />
        }
        {regions.length > 0 &&
          <DeleteRegionDialog handelDeleteRegion={handelDeleteRegion} regions={regions} />
        }
      </Stack>
      <MiniTablePopup
        handlePopupClose={handlePopupClose}
        open={open}
        cellData={chosenCell.data}
        handelUpdateCellsData={handelUpdateCellsData}
      />
    </Container>
  )
}

export default App
