import React from 'react'

function List({todos,handleDelete,toggleCompleted,handleEdit}) {
  
  return (
    <div className='p-4'>
      {todos.map((todo)=><div className='bg-white px-3 rounded-md flex justify-between w-[80vw] h-fit overflow-auto leading-9 my-2' key={todo.id}>
        <p className={todo.completed?"line-through":""}>{todo.task}</p>
        <div>
          <button className='hover:cursor-pointer' onClick={()=>toggleCompleted(todo.id)}><i className="fa-solid fa-square-check"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className={todo.completed?'':'hover:cursor-pointer'} disabled={todo.completed}><i className="fa-solid fa-pen-to-square" onClick={()=>handleEdit(todo.id)}></i></button>&nbsp;&nbsp;&nbsp;
          <button className='hover:cursor-pointer' onClick={()=>handleDelete(todo.id)}><i className="fa-solid fa-trash"></i></button>&nbsp;&nbsp;
        </div>
        </div>)}
    </div>
  )
}

export default List
