
import "../index.css"
import { useSelector } from "react-redux";
import { getRelativeTime } from "../utils/getRelativeTime";
import { getRandomInteger } from "../utils/constant";


const VideoCard = ({info}) => {

    const isMenuOpen  = useSelector(appStore => appStore.navbar.isMenuOpen)
 
    const {snippet  } = info  ;
    const {statistics} = info || {};
    const {channelTitle,thumbnails,title,publishedAt} = snippet;
    const {viewCount} = statistics || {}



    



    if(isMenuOpen === false ){
        return(
            <div className="" >

            

            <div className=" w-[410px] h-[230px] shadow-2xl mb-12 ml-5  mt-16  rounded-2xl">
                <img alt="thumbnails" src={thumbnails.high.url} className="object-cover w-full h-full rounded-2xl"></img>
                <h3 className="font-bold ml-8 mt-2 text-sm">{title}</h3>
                <p className="text-sm text-gray-500 ml-10">{channelTitle}</p>
            
             <div className="flex">



                   
                <p className="text-sm text-gray-500 ml-10"> {viewCount? Math.round(viewCount>=1000000?viewCount/1000000 : viewCount>=1000 ? viewCount/1000  : viewCount ):getRandomInteger() } {viewCount>=1000000?"M" : viewCount >= 1000 ? "K" : null } views</p>
                     
                <p className="text-sm text-gray-500 ml-10"> {getRelativeTime(publishedAt)}</p>
                </div>

                
    
                 
            </div>
            
        </div>

        )
    }

     
    return(
        <div className="">

            

            <div className=" w-[360px] h-[200px] shadow-2xl ml-8 mt-16 rounded-2xl flex flex-col gap-[2px] mb-12">
                <img alt="thumbnails" src={thumbnails.high.url} className="object-cover w-full h-full  rounded-2xl"></img>
                <h3 className="font-bold ml-10 text-sm mt-1">{title}</h3>     
                <p className="text-sm text-gray-500 ml-10">{channelTitle}</p>
              
                 <div className="flex">
                  
                <p className="text-sm text-gray-500 ml-10">{viewCount? Math.round(viewCount>=1000000?viewCount/1000000 : viewCount>=1000 ? viewCount/1000  : viewCount):getRandomInteger() } {  viewCount>=1000000?"M" :viewCount >= 1000 ? "K" : null} views</p>
                <p className="text-sm text-gray-500 ml-10"> {getRelativeTime(publishedAt)}</p>   </div>

         
                 
            </div>
            
        </div>
    )
}
export default VideoCard;