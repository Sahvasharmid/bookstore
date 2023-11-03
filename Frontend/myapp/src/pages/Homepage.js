import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Homepage () {
  const[books,setbooks]=useState([])
 
useEffect(()=>{
  axios.get("http://localhost:5555/newbooks/").then((res)=>{setbooks(res.data);
console.log("books",books)})
},[])

  return (
<div>
<Link to="/newbooks/create">ADD A BOOK HERE</Link>

  
<div class="flex flex-wrap border w-1/2 mx-auto ">
  
  <div class="w-1/5 px-4 py-2">index</div>
  <div class="w-1/5 px-4 py-2">title</div>
  <div class="w-1/5 px-4 py-2">publisher</div>
  <div class="w-1/5 px-4 py-2">author</div>
  <div class="w-1/5 px-4 py-2">operations</div>
{books.map((item,index)=><>

  <div class="w-1/5 px-4 py-2">{index+1}</div>
  <div class="w-1/5 px-4 py-2">{item.title}</div>
  <div class="w-1/5 px-4 py-2">{item.publisher}</div>
  <div class="w-1/5 px-4 py-2">{item.author}</div>
  <div class="w-1/5 px-4 py-2">
   
  <Link to={`/newbooks/edit/${item._id}`}>edit</Link>
  <Link to={`/newbooks/delete/${item._id}`}>delete</Link>
  <Link to={`/newbooks/details/${item._id}`}>show</Link>

  <button >clickhere</button>
  </div>
  </>)}

</div>


</div>


  )
}

export default Homepage