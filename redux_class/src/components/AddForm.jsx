import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddForm() {
    const [task,setTask]=useState("");
    const dispatch=useDispatch();

    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }
  return (
    <form onSubmit={submitHandler}>
        <input type='text' value={task} onChange={(e)=>{setTask(e.target.value)}}></input>
        &nbsp;<button>Add Task</button>
    </form>
  )
}

export default AddForm
