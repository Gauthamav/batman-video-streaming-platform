import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navbarSlice";
import { useSearchParams } from "react-router";
import CommentVideo from "./CommentVideo";
import LiveChat from "./LiveChat";

const  WatchVideo = () => 


{
  const dispatch = useDispatch()


    dispatch(closeMenu())


    const [searchParams]  = useSearchParams()
     
    const videoId = searchParams.get("v")
   
    
  
    
    
    

  

  return (
    <div className="mt-36 ml-10 ">

      <div className="flex gap-10">

        <iframe className="rounded-2xl" width="700" height="400" src={"https://www.youtube.com/embed/"+videoId+"?si=iub8FcyUpRz8apjc"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <LiveChat></LiveChat>
    
    
      </div>
      <CommentVideo></CommentVideo>
     
    </div>
  )
}



export default WatchVideo;
