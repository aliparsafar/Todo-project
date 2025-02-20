import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";


const Item = ({id, todo, completed, deleteHandler, editHandler, textEdit, setTextEdit, isEdit, setIsEdit, checkHandler}) => {   
 
    
  return (
    <div className="flex w-130 h-22 bg-blue-200 rounded-2xl items-center px-5 gap-3 justify-between">
        <input type="checkbox" name="" id="" checked={completed} onChange={() => checkHandler(id)} />
        {
            isEdit === id ?
            <input type="text" onChange={(event) => setTextEdit(event.target.value)} value={textEdit} className="rounded-4xl b border border-solid outline-none border-b-black w-80 h-10 bg-white pl-5" /> :
            <div>{todo}</div>
        }
        <div className="flex gap-5 items-center">
            {
                isEdit === id ?
                <button onClick={() => editHandler(id)}>Submit</button> : 
                <AiOutlineEdit onClick={() => setIsEdit(id)} />
            }
            <AiFillDelete onClick={() => deleteHandler(id)}/>
        </div>
    </div>
  )
}

export default Item