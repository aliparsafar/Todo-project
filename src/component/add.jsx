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
    <form onSubmit={formHandler}>
      <input type="text" onChange={(e) => {setContent(e.target.value)}} value={content} placeholder="...." />
      <button type="submit">+</button>
    </form>
  )
}

export default Add