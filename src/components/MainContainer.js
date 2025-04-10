import VideoCard from "./VideoCard"
import ButtonList from "./ButtonList";
import useVideo from "../utils/useVideo";
import Shimmer from "./Shimmer";
import { Link } from "react-router";





const MainContainer = () => {
 
    const videos = useVideo()
    

    if(videos.length === 0 ){
        return <Shimmer></Shimmer>

    } 



    return(
        <div className="overflow-hidden ">
            <ButtonList></ButtonList>

        
            
                <div className="flex flex-wrap smooth-scroll gap-2  ">
                    {

               videos.map ((video) => (
                  <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video} ></VideoCard></Link>
               ))           
                     }
      
            </div>
  
               
        </div>
    )
   
    
}
export default MainContainer;