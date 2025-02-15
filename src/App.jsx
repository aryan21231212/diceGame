import React, { useState } from 'react'
import Home from './components/Home'
import Playgame from './components/Playgame'
// import Showrules from './components/Showrules'

const App = () => {
  const [isgamestarted, setisgamestarted] = useState(false)
  return (
   <>
 {isgamestarted?<Playgame></Playgame>:<Home isgamestarted={isgamestarted} setisgamestarted = {setisgamestarted} ></Home>}
  

   </>
  )
}

export default App