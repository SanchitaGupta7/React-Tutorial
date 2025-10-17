import React from 'react'

function Button({type,icon,setTracker,setup="",punchline=""}) {
    function handle(){
        if(setup){
            window.navigator.clipboard.writeText(setup+" "+punchline);
            alert("Copied to clipboard!");
        }
        else{
            setTracker((prev)=>!prev);
        }
    }
  return (
    <button onClick={handle} className='bg-[#F72C25] ml-7 hover:cursor-pointer hover:opacity-90 w-40 h-10 text-white rounded-sm'>{type} <i className={icon}></i></button>
  )
}

export default Button
