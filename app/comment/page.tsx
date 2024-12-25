"use client"
import { useState } from "react";
export default function CommentSection(){
  const [input,setInput]=useState<string>("")
  const [commentStorage,setCommentStorage]=useState<string[]>([])

  const handleEvent=()=>
  {
    if(input.trim()!==""){
      setCommentStorage([...commentStorage,input])
      setInput("")
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-4 rounded-md shadow-lg">
    <h2 className="text-lg font-bold mb-4">Feedback</h2>
  
    <div className="flex flex-col md:flex-row mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a comment..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C2B2B] mb-4 md:mb-0"
      />
      <button
        onClick={handleEvent}
        className="ml-2 px-4 py-2 bg-[#2C2B2B] text-white rounded-md hover:bg-[#1a1919]"
      >
        Post
      </button>
    </div>
  
    <ul className="space-y-4">
      {commentStorage.map((comment, index) => (
        <li
          key={index}
          className="p-3  border border-gray-200 rounded-lg shadow-sm"
        >
          {comment}
        </li>
      ))}
    </ul>
  </div>
  
)
}