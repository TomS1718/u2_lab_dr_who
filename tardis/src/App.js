import { useState } from 'react'
import React from 'react'
import DivOne from './components/DivOne'
import './App.css'

function App() {
  const [tardis, setTardis] = useState('Time and Relative Dimension in Space')

  const [newtardis, setNewTardis] = useState(
    'Time and Relative Dimension in Space'
  )

  let handleClickLower = () => {
    setTardis(tardis.toLowerCase())
  }

  let handleClickUpper = () => {
    setNewTardis(newtardis.toUpperCase())
  }

  return (
    <div>
      <div>
        <div>
          <h3 onClick={handleClickLower}>{tardis}</h3>
        </div>
        <div>
          <h3 onClick={handleClickUpper}>{newtardis}</h3>
        </div>
      </div>
    </div>
  )
}

export default App
