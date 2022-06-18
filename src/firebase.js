import { initializeApp } from "firebase/app"
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, query } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(firebaseConfig)

const db = getFirestore()

const years = ["year2017XX", "year2017YY", "year2017ZZ", "year2018XX", "year2018YY", "year2018ZZ", "year2019XX", "year2019YY", "year2019ZZ"]

export const getData = async () => {
  const q = query(collection(db, "regions"))
  const snapshot = await getDocs(q)
  const data = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
      console.log(data);
  data.map((elem) => {
    years.forEach(async (year) => {
      const yearQ = query(collection(db, `regions/${elem.id}/${year}`))
      const yearDetails = await getDocs(yearQ)
      const yearInfo = yearDetails.docs.map(doc => ({...doc.data(), id: doc.id}))
      elem[year] = yearInfo
    })
  })
  
  return data
}


const defaultRegionData = (name, arr) => {
  let obj = {region: name}
  arr.map((el) => {
    obj[el] = []
  })
  return obj
}


export const addNewRegion = async () => {
  const docRef = collection(db, "regions")
  await addDoc(docRef, defaultRegionData(prompt("Enter regions name"), years))
}

export const deleteRegion = async () => {
  const docRef = doc(db, "regions", "DIoDbqFb4gnNTH0LvKam")
  await deleteDoc(docRef)
}




