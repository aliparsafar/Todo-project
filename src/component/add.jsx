import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Add =({items, setItems}) => {

  const [content, setContent] = useState("");
  const formHandler = (e) => {
    e.preventDefault()
    const newItem= {
      id:uuidv4(),
      todo: content,
      completed: false,
      userId:1
    }
    setItems([...items, newItem])
    setContent("")
  }

  return (
    <form onSubmit={formHandler} className="flex gap-1 justify-center items-center  mb-10">
      <input type="text" onChange={(e) => {setContent(e.target.value)}} value={content} placeholder="...." className="rounded-4xl border border-solid outline-none border-b-black w-80 h-10 pl-5 " />
      <button type="submit" className="w-10 h-10 bg-blue-400 text-3xl pb-1 rounded-2xl text-white">+</button>
    </form>
  )
}

export default Add