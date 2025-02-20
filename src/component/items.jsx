import Item from "./item";

const Items = ({items, deleteHandler, editHandler, textEdit, setTextEdit, isEdit, setIsEdit, checkHandler}) => {

  return (
    <div className="flex flex-col gap-10 items-center">
      {
        items.map((item) => {
          return <Item key={item.id} {...item} deleteHandler={deleteHandler} editHandler={editHandler}  textEdit={textEdit} setTextEdit={setTextEdit} isEdit={isEdit} setIsEdit={setIsEdit} checkHandler={checkHandler} />
        }) 
        
      }
      {console.log(items)
      }

    </div>
    
  )
}

export default Items