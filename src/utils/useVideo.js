
import { YOUTUBE_VIDEOS_API } from "./constant"
import { useEffect} from "react"
import { useState } from "react"


const useVideo = () => {

    const [videoData, setVideoData] = useState([])
    


        useEffect(() => {
             getVideos()
    
        }, [])
         
        const getVideos = async() => 
            {
            const data = await fetch(YOUTUBE_VIDEOS_API)
            const response = await data?.json()
            setVideoData(response?.items)
           
            
            
        }
 return videoData
  
}

export default useVideo