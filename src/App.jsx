import { Button } from "@mui/material"
import Container from "@mui/material/Container"
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore"
import React from "react"
import MainTable from "./components/MainTable"
import { db } from "./farebase-config"

const App = () => {
  const [regions, setRegions] = React.useState([])

  console.log(regions);
  React.useEffect(() => {
    onSnapshot(collection(db, "regions"), (snapshot) => {
      console.log(snapshot.docs)
      setRegions(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    })
  }, [])

  const handelClick = async () => {
    const name = prompt("Hello add region")
    const collectionRef = collection(db, "regions")
    const payload = { name }

    await addDoc(collectionRef, payload)
  }

  return (
    <Container maxWidth="xl">
      <MainTable />
      <Button onClick={() => handelClick()}>hello</Button>
    </Container>
  )
}

export default App;
