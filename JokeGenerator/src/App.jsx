import { useState,useEffect } from 'react'
import Button from './components/Button'
import Joke from './components/Joke'
import Heading from './components/Heading'

function App() {
    const [setup,setSetup]=useState("");
    const [punchline,setPunchline]=useState("");
    const [tracker,setTracker]=useState(true);
    const url='https://official-joke-api.appspot.com/random_joke';
    useEffect(()=>{
        setSetup("Fetching joke...");
        setPunchline("");
        async function getJoke(){
        let response=await fetch(url);
        response.json().then((res)=>{
        setSetup(res.setup);
        setPunchline(res.punchline);
    });}
    getJoke();
    },[tracker]);
  return (
    <div className='w-[95vw] bg-amber-100 m-auto mt-[5vh] h-[90vh]'>
      <Heading/>
      <Joke setup={setup} punchline={punchline}/>
      <div className='mx-[32.5vw]'>
        <Button type='New Joke' icon='fa-solid fa-rotate' setTracker={setTracker}/>
        <Button type='Copy Joke' icon='fa-solid fa-copy' setTracker={setTracker} setup={setup} punchline={punchline}/>
      </div>
    </div>
  )
}

export default App
