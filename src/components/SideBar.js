import { useSelector } from "react-redux";
import { Link } from "react-router";





const SideBar = () => {

      const isMenuOpen  = useSelector(appStore => appStore.navbar.isMenuOpen)


      if(!isMenuOpen) {
        return (

        
           
          <div className="mr-28 mt-20">

        
          
          <div className=" fixed  h-full w-[7rem]   bg-slate-50 shadow-lg  pt-5 items-center overflow-y-auto custom-scrollbar scroll-smooth ">
            <ul className="flex flex-col  pb-5 pt-4 items-center ml-2">

            <Link to={"/"}><li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=73&format=png&color=000000" alt="Home "></img></li></Link>
                        <li className="flex  hover:bg-slate-200 px-4 py-6  rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=ajczeHCWXbyR&format=png&color=000000 " alt="Shorts"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=46217&format=png&color=000000 " alt="Subscription"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=58761&format=png&color=000000" alt="History"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=23030&format=png&color=000000" alt="Your videos"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=er4mnn6ILynU&format=png&color=000000" alt="Watch later"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=U6uSXVbuA1xU&format=png&color=000000" alt="Liked videos"></img></li>


                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=HZ2ukyyEDgOj&format=png&color=000000" className="w-6  h-6" alt="Trending"></img></li>                 
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=4LGw6LibKQmL&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=12654&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=1427&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=tjuIMOXXe1mT&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img></li>
                        <li className="flex  hover:bg-slate-200 px-4 py-6 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=87746&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img></li>

            
            </ul>
          </div>

          </div>
       
        )
          
        
      }
            
      
      


      // orginal


    return (


      <div className="mr-56">

   
       <div className=" fixed h-full w-[15rem] pl-3 bg-gray-50 shadow-lg  pt-5  mt-24 overflow-y-auto custom-scrollbar scroll-smooth  ">
           

                <ul className="flex flex-col gap-5 pb-5 pt-4 ml-4">
                         <Link to={"/"}><li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=73&format=png&color=000000" alt="Home "></img>Home</li></Link>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=ajczeHCWXbyR&format=png&color=000000 " alt="Shorts"></img>Shorts</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=46217&format=png&color=000000 " alt="Subscription"></img>Subscription</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=58761&format=png&color=000000" alt="History"></img>History</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=23030&format=png&color=000000" alt="Your videos"></img>Your videos</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=er4mnn6ILynU&format=png&color=000000" alt="Watch later"></img>Watch later</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img className="w-6 h-6"src="https://img.icons8.com/?size=100&id=U6uSXVbuA1xU&format=png&color=000000" alt="Liked videos"></img>Liked videos</li>

                       <li><hr className="h-[1px] w-40 my-2  ml-2  bg-gray-400 border-0 "></hr></li> 

                      <li><h3 className="font-bold pl-3 pb-2">Subscription</h3></li>
                      
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=HZ2ukyyEDgOj&format=png&color=000000" className="w-6  h-6" alt="Trending"></img>Trending</li>                 
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=4LGw6LibKQmL&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img>Shopping</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=12654&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img>Music</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=1427&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img>Movies</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=tjuIMOXXe1mT&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img>Live</li>
                        <li className="flex gap-6 px-4 py-3 hover:bg-slate-200 rounded-2xl cursor-pointer"><img src="https://img.icons8.com/?size=100&id=87746&format=png&color=000000" className="w-6  h-6" alt="Shopping"></img>Podcast</li>

                    </ul>
       </div>
    
       </div>
             
         
          
    )
}

export default SideBar;