import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/about' element={<About/>} />
        </Routes>
    </div>
  )
}

export default MainRoute