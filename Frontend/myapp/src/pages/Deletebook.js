import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Deletebook() {
  const {id}=useParams()
  const navigate=useNavigate()
const deleteHandler=()=>{
axios.delete(`http://localhost:5555/newbooks/${id}`).then(()=>navigate('/')).catch((Err)=>console.log(Err))
}
  return (
    <div>
      <h1>are u sure </h1>
      <button onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default Deletebook