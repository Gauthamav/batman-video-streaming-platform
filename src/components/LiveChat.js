import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/liveChatSlice';
import LiveChatMessage from "./LiveChatMessage"
import { RandomNameGenerate } from '../utils/constant';
import { randomString } from '../utils/constant';


  

function LiveChat() {

  const [message,setMessage] = useState("")
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)


    const handelClick = () => {
      dispatch((addMessage({
        name:"Gautham",
        message: message,
      })))
      setMessage("")
    }
 
 
 
  useEffect(() => {

    const i =  setInterval(() => {

      dispatch(addMessage({
        name: RandomNameGenerate(),
        message: randomString(10),
      }))

      
    },1000);

    return () => {
      clearInterval(i)
     }
},[])
  





  return (
    <div>
    {/* Chat Box */}
    <div   className="bg-slate-100 w-[25rem] h-[35rem] shadow-lg rounded-md overflow-y-auto scroll-smooth custom-scrollbar flex flex-col-reverse" >

      <div className="flex flex-col px-4 py-2 gap-2 justify-end">

        {chatMessages.map((msg, index) => (
          <LiveChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
    </div>

<div className='flex items-center gap-2 '>

 <input className=' mt-2 w-[20rem] h-[2.5rem] bg-slate-100 border-2 border-black ml-2' value={message}  onChange={(e) => {setMessage(e.target.value)}}></input>
 <button className='bg-gray-200 w-16 h-[2.5rem] mt-2' onClick={handelClick} >Send</button>

</div>

    
        
        
      
    </div>
  )
}

export default LiveChat
