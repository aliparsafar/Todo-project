import { useEffect, useState } from "react";
import axios from "axios";
import Add from "./Add"
import Items from "./items"

const Home = () => {
  const [items, setItems]= useState([]);
  const [textEdit, setTextEdit]= useState("");
  const [isEdit, setIsEdit]= useState(null)

  const getData= async () => {
    const res= await axios.get('https://dummyjson.com/todos')
    const {data}= res
    setItems(data.todos)
  }
  useEffect(()=> {
    getData()
    
  }, [])
  useEffect(() => {
    const temp = JSON.stringify(items);
    localStorage.setItem("todos", temp);
  },[items])

  const deleteHandler = (id) => {
    const newItems= items.filter(item => item.id !== id);
    setItems(newItems)
  }

  const editHandler = (id) => {
    const editItems= items.filter(item => {
      if(item.id=== id) {
        item.todo= textEdit;
      }
      return item;
  });
    setItems(editItems)
    setIsEdit(null)
    setTextEdit("")
  }

  const checkHandler = (id) =>  {
    const checkItems= items.filter(item => {
      if(item.id=== id) {
        item.completed =!item.completed;
      }
      return item;
  });
    setItems(checkItems)
  }




  return items ? (
    <div>
        <h1>toDo<span>List</span></h1>
        <Add items={items} setItems={setItems} />
        <Items items={items} deleteHandler={deleteHandler} editHandler={editHandler} textEdit={textEdit} setTextEdit={setTextEdit} isEdit={isEdit} setIsEdit={setIsEdit} checkHandler={checkHandler} />
    </div>
  ) : <h1>Loading...</h1>
  
}

export default Home