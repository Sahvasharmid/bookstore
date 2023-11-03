import React from 'react'
import Homepage from './pages/Homepage'
import { Routes,Route } from 'react-router-dom'
import Createbook from './pages/Createbook'
import Editbook from './pages/Editbook'
import Deletebook from './pages/Deletebook'
import Showbook from './pages/Showbook'

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/newbooks/create' element={<Createbook></Createbook>}></Route>
        <Route path='/newbooks/edit/:id' element={<Editbook></Editbook>}></Route>
        <Route path='/newbooks/delete/:id' element={<Deletebook></Deletebook>}></Route>
        <Route path='/newbooks/details/:id' element={<Showbook></Showbook>}></Route>
      </Routes>
   

    </div>
  )
}

export default App