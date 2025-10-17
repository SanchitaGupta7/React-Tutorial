import React, { useState,useId } from 'react'
import List from './List'

function Add() {
    const [text,setText]=useState("");
    const [todos,setTodos]=useState([]);
    function handleSubmit(){
        if(text==="")   return;
        setTodos((prev)=>{return [...prev,{task:text,completed:false,id:Date.now()}]});
        setText("");
    }
    let handleDelete=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
    }
    let toggleCompleted=(id)=>{
    setTodos(todos.map((todo)=>{
        if(todo.id===id) 
            return {...todo,completed:!todo.completed}
        else
            return {...todo}
    }));
    }
    let handleEdit=(id)=>{
        let oldTask="";
        for( let todo of todos){
            if(todo.id===id)    oldTask=todo.task;
        }
        let newTask=prompt("Enter modified task:",oldTask);
        if(newTask==null||newTask=="") return;
        setTodos(todos.map((todo)=>{
        if(todo.id===id) 
            return {...todo,task:newTask}
        else
            return {...todo}
    }));
    }
  return (
    <div className='bg-blue-300 w-[85vw] h-fit min-h-[75vh] m-auto mt-[12.5vh] rounded-2xl'>
        <div className='p-4 flex justify-center'>
            <input className='bg-white w-[60vw] h-8 rounded-md px-2' type='text' placeholder='Enter new task' value={text} onChange={(e)=>{setText(e.target.value)}}></input>
            <button className='ml-3 bg-green-500 hover:opacity-80 hover:cursor-pointer w-[15vw] h-8 rounded-md' onClick={handleSubmit}>Add</button>
        </div>
        <h2 className='text-2xl px-[45%] mt-3'>TO DOS:</h2>
        <List todos={todos} handleDelete={handleDelete} toggleCompleted={toggleCompleted} handleEdit={handleEdit}/>
    </div>
  )
}

export default Add
