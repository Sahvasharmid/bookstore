import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Backbutton from '../components/backbutton'

function Editbook() {
  const [author,setauthor]=useState("")
  const[publisher,setpublisher]=useState("")
  const[title,settitle]=useState("")
  const {id}=useParams()
 

  useEffect(()=>{
  axios.get(`http://localhost:5555/newbooks/${id}`).then((res)=>
  
  {
    setauthor(res.data.author)
    setpublisher(res.data.publisher)
    settitle(res.data.title)
  }
  ).catch((err)=>console.log(err))
  },[])
  const EditbookHandler=()=>{
    const data={author,publisher,title}
    axios.put(`http://localhost:5555/newbooks/${id}`,data)

  }
  return (
    
    <div>
        <Backbutton></Backbutton>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Author:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter author name"
            onChange={(e)=>setauthor(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="publisher" className="block text-gray-700 text-sm font-bold mb-2">
            Publisher:
          </label>
          <input
            type="text"
            id="publisher"
          value={publisher}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter author name"
            onChange={(e)=>setpublisher(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            title:
          </label>
          <input
            type="text"
            id="title"
          value={title}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-indigo-500"
            placeholder="Enter title name"
            onChange={(e)=>settitle(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         onClick={EditbookHandler}  >
          Edit
          </button>
        </div>
      </form>
    </div>

    </div>
    
  )
}

export default Editbook