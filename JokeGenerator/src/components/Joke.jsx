import React, { useState } from 'react';

function Joke({setup,punchline}) {
    
  return (
    <div className='w-[100%] text-center flex justify-center items-center text-lg h-[63vh]'>
      {setup}<br/>{punchline}
    </div>
  )
}

export default Joke
