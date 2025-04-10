import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { suggestionClose } from '../utils/searchRecommendationSlice'
import { useSearchParams } from 'react-router'
import { API_KEY } from '../utils/constant'
 import VideoCard from './VideoCard'
 import Shimmer from './Shimmer'
 import { Link } from 'react-router'

function SearchVideos() {
  
    const dispatch = useDispatch()
     
    dispatch(suggestionClose())

    const  [searchParams] = useSearchParams();
    const searchKeyword = searchParams.get("search_query")
    const [searchResults, setSearchResults] = useState([])
  
   


    useEffect(()=> {

      getSearchVideos()


    },[searchKeyword])


    const getSearchVideos = async () =>{
       
      const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+encodeURIComponent(searchKeyword)+"&type=video&key="+API_KEY)
      
      const response = await data?.json()
      setSearchResults(response?.items)
      


    }

    if(searchResults.length === 0 ){
      return <Shimmer></Shimmer>

  } 





  return (
    <div className='flex flex-wrap pt-20 gap-3'>

        {
          searchResults.map((result) => (
                   <Link to={"/watch?v="+result.id} key={result.id.videoId}><VideoCard info={result} ></VideoCard></Link>
          ))
        }


        
      
    </div>
  )
}

export default SearchVideos
