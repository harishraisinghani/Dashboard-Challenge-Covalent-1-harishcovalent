import Navbar from "./screen/NavBar";
import Screen_one from "./screen/Screen_one";
import axios from "axios"
import {useEffect, useState} from "react"

export default function App() {
  const APIKEY = 'ckey_4dab9858382a4ce49155d5bfbc2'
  const chain_id = 250
  const dexname = 'spiritswap'
  const [dat, setDat] = useState([]);
  function getDataSpiritSwap() {
    axios.get(`https://api.covalenthq.com/v1/${chain_id}/xy=k/${dexname}/pools/?&key=${APIKEY}`)
    .then((responses) => {
      let data = responses.data.data.items
      setDat(data)
    })
  }
  useEffect(() => {
    getDataSpiritSwap()
    
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Screen_one data ={dat}/>
      </div>
    </>
  );
}
