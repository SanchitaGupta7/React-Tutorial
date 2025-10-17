import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteTodo, markAsDone } from '../features/todo/todoSlice';
import AddForm from './AddForm';

function Todo() {
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    const handleDeletion=(id)=>{
        dispatch(deleteTodo(id));
    }
    const handleDone=(id)=>{
        dispatch(markAsDone(id));
    }
  return (
    <>
        <AddForm/>
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>      
                    <p style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task}</p>&nbsp;
                    <button onClick={()=>handleDeletion(todo.id)}>Delete</button>&nbsp; <button onClick={()=>handleDone(todo.id)}>Mark as Done</button>
            </li>))}
        </ul>
    </>
  )
}

export default Todo
