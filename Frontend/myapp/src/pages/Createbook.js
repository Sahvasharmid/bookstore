import React, { useState } from 'react'
import axios from 'axios'
import Backbutton from '../components/backbutton'
function Createbook() {
const[title,settitle]=useState("")
const[author,setauthor]=useState("")
const[publisher,setpublisher]=useState("")
    const AddbookHandler=()=>{
      
        const data={title,author,publisher}
 axios.post("http://localhost:5555/newbooks/create",data)
}
  return (
    <div>
        <Backbutton></Backbutton>

    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="author" className="blcock text-gray-700 text-sm font-bold mb-2">
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
         onClick={AddbookHandler}  >
            Add a book
          </button>
        </div>
      </form>
    </div>

    </div>
  )
}

export default Createbook