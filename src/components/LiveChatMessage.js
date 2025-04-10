import React from 'react'

function LiveChatMessage({name,message}) {
  
  return (
    <div>
        
    <div className='flex pt-4 pl-6 items-center pb-4  hover:bg-slate-200 cursor-pointer  '>

         <img className='w-6 h-6 mr-2 rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vK39mvab0UiMEU0L82eB0gaPb3cUFfMi_A&s' alt='user-icon'></img>
        <p className='font-bold text-sm'>{name}</p>
        <p  className='ml-5 text-sm'>{message}</p>     
      
    </div>
   
    
   
   
    </div>
  )
}

export default LiveChatMessage
