import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Showbook() {
  const[Book,setBook]=useState({})
  const{id}=useParams()

  useEffect(()=>{
  axios.get(`http://localhost:5555/newbooks/${id}`).then((res)=>{setBook(res.data);console.log("res",res.data);console.log("books to show",Book)}).catch((err)=>console.log(err))
  },[])
console.log("book is",Book)
  return (
    <div>
      <h2>showbook</h2>
  <h6>{Book.author}</h6>
  <p>{Book.publisher}</p>
  <p>{Book.title}</p>
    </div>
  )
}

export default Showbook