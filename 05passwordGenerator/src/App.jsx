import { useState,useCallback,useRef,useEffect } from 'react'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [characterAllowed,setCharacterAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passwordRef=useRef(null)

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="!@#$%^&*-_+=[]{}~`"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass=pass+str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])
  useEffect(()=>{passwordGenerator()},[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
    <div className='w-screen max-w-md mx-auto shadow pt-2 flex-col text-center items-center rounded-lg pb-4 px-4 mt-[-260px] ml-[100%] text-white bg-gray-700'>
      Password Generator
      <div className='flex mt-2 bg-white shadow rounded-lg overflow-hidden'>
        <input type='text' value={password} className='bg-white w-[350px] outline-none text-black py-1 px-3' placeholder='Password' readOnly ref={passwordRef}></input>
        <button className=' bg-blue-600  text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div className='flex text-center align-middle justify-around text-sm mt-3  gap-x-2'>
        <div clasName='flex items-center w-[100%] gap-x-1'>
          <input type='range' min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}></input>
          <p className='text-orange-400'>Length:{length}</p>
        </div>
        <div clasName='flex items-center w-[100%] gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}}></input>
          <p className='text-orange-400'>Numbers</p>
        </div>
        <div clasName='flex items-center w-[100%] gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setCharacterAllowed((prev)=>!prev)}}></input>
          <p className='text-orange-400'>Characters</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
